import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '**', redirectTo: '' }    
        
        
 ];
 
