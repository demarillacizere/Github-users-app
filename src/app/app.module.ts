import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RepoFormComponent } from './repo-form/repo-form.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { DayCountPipe } from './day-count.pipe';
import { ReposComponent } from './repos/repos.component';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    RepoDetailsComponent,
    UserFormComponent,
    RepoFormComponent,
    UserComponent,
    RepoComponent,
    NavbarComponent,
    NotFoundComponent,
    DayCountPipe,
    ReposComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
