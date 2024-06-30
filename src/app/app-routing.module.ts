import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { TransformationComponent } from './transformation/transformation.component';

const routes: Routes = [
  {path:"transformation",component:TransformationComponent},
  {path:'', component:BlankLayoutComponent,children:[
    {path:"",redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent, title:'Home'},
    {path:'cart',component:CartComponent, title:'Cart'},
    {path:'products',component:ProductsComponent, title:'Products'},
    {path:'categories',component:CategoriesComponent, title:'Categories'},
    {path:'brands',component:BrandsComponent, title:'Brands'}
  ]},
  {path:'', component:AuthLayoutComponent,children:[
    {path:'login',component:LoginComponent, title:'Login'},
    {path:'register',component:RegisterComponent, title:'register'},
  ]},
  {path:"**",component:NotfoundComponent,title:'Error 404!'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
