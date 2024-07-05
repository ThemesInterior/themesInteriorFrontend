import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:'full',
      },
//       {
//         path:'auth',
       
//         children:[ 
//           {
//             path:'signup',
//             component:SignupComponent,
           
//           },
//           {
//             path:'',
//             component:LoginComponent,   
//           }
//         ]
//       },
//       {
//         path:'about-us',
//         component:AboutUsComponent,
//         pathMatch:'full'
//       },
//       {
//         path:'contact-us',
//         component:ContactUsComponent,
//         pathMatch:'full'
//       },
//       {
//         path:'services',
//         component:ServicesComponent,
//         pathMatch:'full',
//       },
      
      
        
        
 ];
