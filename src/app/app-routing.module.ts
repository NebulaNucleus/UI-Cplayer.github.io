import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { StatsComponent } from './stats/stats.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FavsComponent } from './favs/favs.component';
import { RecomComponent } from './recom/recom.component';
import { EdituserComponent } from './edituser/edituser.component';
import { StatOpenerComponent } from './stat-opener/stat-opener.component';
import { NewsComponent } from './news/news.component';
import { HelperComponent } from './helper/helper.component';

// declaring the routes here
const routes: Routes = [
  // making the login as the default path of the app
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  //path to load login component
  {
    path: 'login',
    component: LoginComponent
  },
  // path to load the signup component
  {
    path: 'signup',
    component: SignupComponent
  },
  // path to login the dashboard component
  {
    path: 'dashboard',
    component: DashboardComponent,
    //once a user logs in he will be directed to login and will be able to access children paths
    children: [
      // making search as the default path of dashboard
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      // path of search component
      {
        path: 'search',
        component: SearchComponent
      },
      // path of stat component
      {
        path: 'stats',
        component: StatsComponent
      },
      // path of favourites coomponent
      {
        path: 'favs',
        component: FavsComponent,
      },
      {
        path: 'help',
        component: HelperComponent,
      },
      // path of recommended component
      {
        path: 'recom',
        component: RecomComponent
      },
      // path of calendar component
      {
        path: 'cal',
        component: CalendarComponent
      },
      // path of edituser component
      {
        path: 'edit',
        component: EdituserComponent
      },
      //path of contact(about us) component
      {
        path: 'contact',
        component: ContactComponent
      },
      // path for the news component
      {
        path: 'news',
        component : NewsComponent
      },
      // path of stats opener with providin the pid of the player clicked
      {
        path: 'statOpener/:pid/view',
        component: StatOpenerComponent,
        outlet: 'statOpener'
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
