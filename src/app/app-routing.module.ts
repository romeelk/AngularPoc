import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { WelcomeComponent } from './home/welcome.component';
import {NotfoundComponent} from './notfound/notfound.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([{path:'welcome',component:WelcomeComponent},
                          {path:'', redirectTo:'welcome',pathMatch:'full'},
                          {path:'**', component:NotfoundComponent,pathMatch:'full'}
                        ])
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { };
