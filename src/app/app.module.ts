import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RepoFormComponent } from './repo-form/repo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    RepoDetailsComponent,
    UserFormComponent,
    RepoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
