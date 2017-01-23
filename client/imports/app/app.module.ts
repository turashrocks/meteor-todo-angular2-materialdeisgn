import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';

import { AppComponent } from "./app.component";
import { routes} from './app.routes';
import { MaterialModule } from "@angular/material";
import { AUTH_DECLARATIONS } from "./auth/index";
import { PARTIES_DECLARATIONS } from './parties';
import { SHARED_DECLARATIONS } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ...AUTH_DECLARATIONS,
    ...PARTIES_DECLARATIONS,
    ...SHARED_DECLARATIONS 
  ],
  entryComponents: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes),
    AccountsModule,
    MaterialModule.forRoot()
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
