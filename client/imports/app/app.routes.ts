import { Route } from '@angular/router';
/**import { Meteor } from 'meteor/meteor';**/

import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';
import {LoginComponent} from "./auth/login.component";
import {SignupComponent} from "./auth/signup.component";
import {RecoverComponent} from "./auth/recover.component";
 
 
/**export const routes: Route[] = [
  { path: '', component: PartiesListComponent },
  { path: 'party/:partyId', component: PartyDetailsComponent, canActivate: ['canActivateForLoggedIn'] }
];**/

export const routes: Route[] = [
  { path: '', component: PartiesListComponent },
  { path: 'party/:partyId', component: PartyDetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recover', component: RecoverComponent }
];

/**export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];**/