import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ButtonComponent } from './button/button.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';

const routes: Routes = [
{ path:'', component: HomeComponent},
{ path:'home', component: HomeComponent},
{ path:'travel-pakistan', component: HomeComponent},
{ path:'about-us', component: AboutUsComponent},
{ path:'packages', component: PackagesComponent},
{ path:'contact-us', component: ContactUsComponent},
{ path:'button', component:ButtonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
