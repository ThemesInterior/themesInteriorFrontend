import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() images = [
    "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/04/13225131/cover-3.png",
    "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/4/2022/01/31113624/Cover-5.png",
    "https://www.aertsen.in/wp-content/uploads/2022/11/Stunning-Modern-Living-Room-Interior-Design-Ideas-in-India.jpg",
   ]

   @Input() image ="";


   

  constructor() { }

  ngOnInit(): void {
   
    this.image = this.images[2];
   var len = this.images.length;
   var i = 0;
   function slider(){
    
     if(i > len-1){
       i=0;
     }
     i++;
    
     
   }
   interval(3000).subscribe(x => {
     slider();
     this.image = this.images[i-1]
    //  console.log(this.image);
 });

  }


}
