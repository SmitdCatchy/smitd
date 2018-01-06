import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NewsComponent } from './pages/news/news.component';
import { AccountComponent } from './pages/account/account.component';
import { MarketComponent } from './pages/market/market.component';

const routes: Routes = [
  { path: '',  component: IndexComponent },
  { path: 'contacts', component: AboutComponent,
    children: [
      { path: 'a',     redirectTo: 'contacts', pathMatch: 'full' },
      { path: '**',     redirectTo: 'contacts', pathMatch: 'full' }
    ]
  },
  { path: 'projects',     component: ProjectsComponent },
  { path: 'market',     component: MarketComponent },
  { path: 'account',     component: AccountComponent },
  { path: '**',     redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
