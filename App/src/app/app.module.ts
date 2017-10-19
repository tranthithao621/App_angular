import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoListComponent } from './info-list/info-list.component';
import { InfoService } from './service/info.service';
import { InfoComponent } from './info/info.component';

const  routerConfig: Routes = [
  { path: 'add' , component: InfoComponent },
  { path: 'edit/:id', component: InfoComponent },
  { path: 'list' , component: InfoListComponent },
  { path: '' , redirectTo :'list' , pathMatch: 'full' },
  { path: '**' , redirectTo :'list' , pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    InfoListComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
