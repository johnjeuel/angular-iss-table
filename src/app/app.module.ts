import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { HttpClientModule } from '@angular/common/http';
import { IssService } from './services/_iss.service';
import { IssComponent } from './pages/iss.component';
import { IntervalInputComponent } from './components/interval-input/interval-input.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DynamicTableComponent,
    IssComponent,
    IntervalInputComponent,
  ],
  bootstrap: [AppComponent],
  providers: [IssService],
})
export class AppModule {}
