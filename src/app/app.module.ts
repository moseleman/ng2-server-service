import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		HttpModule,
		FormsModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes)
  ],
	exports: [
		RouterModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
