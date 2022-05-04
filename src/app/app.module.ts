import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppState } from './store/app.state';
import { authReducer } from './store/auth/auth.reducer';
import { isLoggedReducer } from './store/isLoggedUser/isLoggedUser.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
    StoreModule.forRoot<AppState>({
      auth: authReducer,
      isLogged: isLoggedReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
