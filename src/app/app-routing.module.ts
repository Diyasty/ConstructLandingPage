import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component"
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';


const routes: Routes = [{
  path:"",component:AppComponent
},
{path:"['/Features']",component:FeaturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
