import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './components/home/home.component';
// import { ContractDetailsComponent } from './components/contract-details/contract-details.component';
import { HeadingComponent } from './components/home/heading/heading.component';
import { TablesComponent } from './components/home/tables/tables.component';
import { ShowContractDetailsComponent } from './components/home/show-contract-details/show-contract-details.component';
import { ContractOptionsComponent } from './components/home/contract-options/contract-options.component';
import { ContractActionsComponent } from './components/home/contract-actions/contract-actions.component';
import { CardComponent } from './components/home/card/card.component';
import { AddNewInputComponent } from './components/home/add-new-input/add-new-input.component';
// import { ContractDetailsComponent } from './components/home/contract-details/contract-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    SideBarComponent,
    HomeComponent,
    HeadingComponent,
    TablesComponent,
    ShowContractDetailsComponent,
    ContractOptionsComponent,
    ContractActionsComponent,
    CardComponent,
    AddNewInputComponent,
    // ContractDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
