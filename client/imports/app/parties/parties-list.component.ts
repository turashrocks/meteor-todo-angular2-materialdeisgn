import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';
import { InjectUser } from "angular2-meteor-accounts-ui";
 
import { Parties } from '../../../../both/collections/parties.collection';
import { Party } from '../../../../both/models/party.model';

import template from './parties-list.component.html';
 
@Component({
  selector: 'parties-list',
  template
})
@InjectUser('user')
export class PartiesListComponent implements OnInit, OnDestroy {
  parties: Observable<Party[]>;
  partiesSub: Subscription;
  user: Meteor.User;
 
  constructor() {
    this.parties = Parties.find({}).zone();
  }
  ngOnInit() {
    this.parties = Parties.find({}).zone();
    this.partiesSub = MeteorObservable.subscribe('parties').subscribe();
  }
 
  removeParty(party: Party): void {
    Parties.remove(party._id);
  }

   isOwner(party: Party): boolean {
    return this.user && this.user._id === party.owner;
  }

  ngOnDestroy() {
    this.partiesSub.unsubscribe();
  }
}