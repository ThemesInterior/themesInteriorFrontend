import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterOutlet,FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
