import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';


const routes: Routes = [{path: 'detail/:id', component:DetailsComponent},
                        {path: '', component:CardComponent},
                            ];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterLink],
  exports: [RouterModule]
})
export class AppRoutingModule { }
