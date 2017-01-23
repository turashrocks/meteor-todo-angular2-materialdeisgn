import { Component } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import {Parties} from '../../../both/collections/parties.collection';
import {Party} from '../../../both/models/party.model';
import template from "./app.component.html";
import style from "./app.component.scss";
import {InjectUser} from "angular2-meteor-accounts-ui";

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
@InjectUser('user')
export class AppComponent {
  constructor() {
 
  }
 
  logout() {
    Meteor.logout();
  }
}
