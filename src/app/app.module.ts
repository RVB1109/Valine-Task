import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { JobsService } from './jobs.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { SearchFilterPipe } from './searchFilter.pipe';
import { DetailsComponent } from './details/details.component';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CardComponent,
    SearchFilterPipe,
    DetailsComponent,
    InfoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [JobsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
