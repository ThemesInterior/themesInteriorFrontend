import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,NavbarComponent,NgxUiLoaderModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Themes-Interior';
}
