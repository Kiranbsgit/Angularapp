import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule,FormControl  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from './components/after-login-pages/dashboard/dashboard.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, CommonModule, ReactiveFormsModule, HttpClientModule, HomeComponent]
})
export class AppComponent {
  title = 'Mydcbank.UI';
  
  constructor(private contexts: ChildrenOutletContexts) {}
}
