import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplayDetailComponent } from './display-detail/display-detail.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home', component:HomeComponent},
  {path:'result/:id',component:SearchComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'delete/:track',component:DeleteComponent},
  {path:'dt/:trackname/:genre',component:DisplayDetailComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

