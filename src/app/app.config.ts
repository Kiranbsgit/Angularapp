import { ApplicationConfig, NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';


import { allRoutes,  } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AfterLoginPagesModule } from './components/after-login-pages/after-login-pages.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/authservices/auth.service';
import { LoginComponent } from './components/Auth/login/login.component';
import { TokenService } from './services/tokenServices/token.service';
import { UserService } from './services/userService/user.service';





// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes)]
// };

const routes: Routes = [
  ...allRoutes,
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login if no matching route found
];

@NgModule({
  declarations: [
     // Make sure to include LoginComponent here if it's declared in this module
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AfterLoginPagesModule,
    RouterModule.forRoot(allRoutes),
    
    RouterModule.forRoot([
      // Define your routes here
    ]),
    // Other imported modules
  ],
  exports: [RouterModule],
  providers: [
    // Provide services here
     AuthService,
     TokenService,// Provide AuthService if needed
      UserService
  ],
  
  
})
export class AppConfigModule {
  ngDoBootstrap() {}
}


// just added it to get rid of error, i will research on this one later.
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

