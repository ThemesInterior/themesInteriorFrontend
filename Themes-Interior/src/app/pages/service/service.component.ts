import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  services = [
    { service: 'Painting',description: 'Explore namename njsdnfdn for Kitchen, ' },
    { service: 'Painting',description: 'Explore namename njsdnfdn for Kitchen, ' },
    { service: 'Painting',description: 'Explore namename njsdnfdn for Kitchen, ' },
    { service: 'Painting',description: 'Explore namename njsdnfdn for Kitchen, ' },
    { service: 'Painting',description: 'Explore namename njsdnfdn for Kitchen, ' }

    


  ];

}
