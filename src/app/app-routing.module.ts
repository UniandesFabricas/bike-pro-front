import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { AccountComponent } from './components/account/account.component';
import { RegisterComponent } from './components/register/register.component';
import { CommunityComponent } from './components/community/community.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'search', component: SearchComponent },
  { path: 'account', component: AccountComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
