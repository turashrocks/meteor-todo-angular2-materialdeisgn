import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { InjectUser } from "angular2-meteor-accounts-ui";

import 'rxjs/add/operator/map';

import { Parties } from '../../../../both/collections/parties.collection';
import { Party } from '../../../../both/models/party.model';
import { Users } from '../../../../both/collections/users.collection';
import { User } from '../../../../both/models/user.model';

import { PartiesListComponent } from './parties-list.component';

import template from './party-details.component.html';
 
@Component({
  selector: 'party-details',
  template
})
@InjectUser('user')
export class PartyDetailsComponent implements OnInit, OnDestroy {
  partyId: string;
  paramsSub: Subscription;
  party: Party;
  user: Meteor.User;
  users: Observable<User>;
  uninvitedSub: Subscription;
 
  constructor(
    private route: ActivatedRoute
  ) {}
 
  ngOnInit() {
    this.paramsSub = this.route.params
      .map(params => params['partyId'])
      .subscribe(partyId => {
        this.partyId = partyId
        
        this.party = Parties.findOne(this.partyId);
      });
  }
  saveParty() {
     if (!Meteor.userId()) {
      alert('Please log in to change this party');
      return;
    }

    Parties.update(this.party._id, {
      $set: {
        name: this.party.name,
        description: this.party.description,
        location: this.party.location
      }
    });
  }
   get isOwner(): boolean {
    return this.party && this.user && this.user._id === this.party.owner;
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}