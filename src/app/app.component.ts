import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components';
import { Auth } from 'aws-amplify';
import * as Observable from 'zen-observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Chatty } from "../models";
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user;
  subscription;
  moment = moment;
  messages: Array<Chatty>;
  loading = true;
  public createForm: FormGroup;
  unregister;

  constructor(private ref: ChangeDetectorRef, private fb: FormBuilder) { 
    Auth.currentAuthenticatedUser().then(user => {
      this.user = user
      console.log(this.user)
    })
  }

  loadMessages() {
    DataStore.query<Chatty>(Chatty, Predicates.ALL)
    .then(messages => {
      this.loading = false;
      this.messages = [...messages].sort((a, b) => -a.createdAt.localeCompare(b.createdAt));
    })
  }

  ngOnInit() {
    this.unregister = onAuthUIStateChange((state, user) => {
      if (state === AuthState.SignedIn) {
        this.user = user;
        this.ref.detectChanges();
      }
    })

    this.createForm = this.fb.group({
      'message': ['', Validators.required],
    });

    this.loading = true;
    this.loadMessages();

    //Subscribe to changes
    this.subscription = DataStore.observe<Chatty>(Chatty).subscribe(msg => {
      console.log(msg.model, msg.opType, msg.element);
      this.loadMessages();
    });
  }

  ngOnDestroy() {
    this.unregister();
    if (!this.subscription) return;
    this.subscription.unsubscribe();
  }
  
  public onCreate(message: any) {
    if ( message.message=="" ) return;
    DataStore.save(
      new Chatty({
        user: this.user.username,
        message: message.message,
        createdAt: new Date().toISOString()
      })
    ).then(() => {
      console.log('item created!');
      this.createForm.reset();
      this.loadMessages();
    })
    .catch(e => {
      console.log('error creating message...', e);
    });
  }

  public async onDeleteAll() {
    await DataStore.delete<Chatty>(Chatty, Predicates.ALL)
    .then(() => this.loadMessages())
    .catch(e => {
      console.log('error deleting all messages...', e);
    });
  }
}
