import { Component } from '@angular/core';
import { CarouselComponent } from '../pages/carousel/carousel.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,FooterComponent,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services: string[] = [
    "Wiring",
    "Painting",
    "Modular Kitchen",
    "Tile Fitting",
    "Modular Kitchen",
    "False Ceiling",
    "Modular Kitchen",
    "Tile Fitting",
    "Modular Kitchen",
    "False Ceiling",
    "Modular Kitchen",
    "See More..."
  ];

  constructor() {}
}
