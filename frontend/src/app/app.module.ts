// CORE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// UI
import { SuiModule } from 'ng2-semantic-ui';
import { DataTableModule, SharedModule } from 'primeng/primeng';

// Services
import { ApiService } from './service';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components';

//Ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// used to create fake backend
import { fakeBackendProvider } from './service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ContextMenuModule } from 'primeng/components/contextmenu/contextmenu';
import { UserComponent } from './components/pages/user/user.component';
import {DialogModule} from 'primeng/primeng'
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { FooterComponent } from './components/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserProfileComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SuiModule,
    // Prime
    DataTableModule,
    SharedModule,
    FormsModule,
    DataTableModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    ContextMenuModule,
    DialogModule,
    NgbModule.forRoot()
  ],
  providers: [
    AppRoutingModule,
    ApiService,
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
