import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  ngOnInit(): void {
    
    throw new Error('Method not implemented.');
  }

}
