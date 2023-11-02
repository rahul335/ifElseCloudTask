import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MainComponent } from './shared/components/main/main.component';
import { TopNavbarComponent } from './shared/components/top-navbar/top-navbar.component';
import { TopDataCardComponent } from './shared/components/top-data-card/top-data-card.component';
import { OrderCardComponent } from './shared/components/order-card/order-card.component';
import { RegistrationsCardComponent } from './shared/components/registrations-card/registrations-card.component';
import { SalesChartComponent } from './shared/components/sales-chart/sales-chart.component';
import { OverviewChartComponent } from './shared/components/overview-chart/overview-chart.component';
import { DonutChartComponent } from './shared/components/donut-chart/donut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    TopNavbarComponent,
    TopDataCardComponent,
    OrderCardComponent,
    RegistrationsCardComponent,
    SalesChartComponent,
    OverviewChartComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
