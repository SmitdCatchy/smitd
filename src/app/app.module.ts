import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';import{RouterModule, Routes } from '@angular/router';
 // for routing
import { PathLocationStrategy, HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NewsComponent } from './pages/news/news.component';
import { AccountComponent } from './pages/account/account.component';
import { MarketComponent } from './pages/market/market.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownmenuComponent } from './components/header/dropdownmenu/dropdownmenu.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './pages/about/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ProjectsComponent,
    NewsComponent,
    AccountComponent,
    MarketComponent,
    HeaderComponent,
    FooterComponent,
    DropdownmenuComponent,
    NavigationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  // # for routing
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
