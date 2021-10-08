import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedComponent } from './feed/feed.component';
import { MainComponent } from './main.component';
import { ProgramsComponent } from './programs/programs.component';
import { SurveysComponent } from './surveys/surveys.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'', component: MainComponent
  , children: [
    {path: 'feed', component: FeedComponent},
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'programs', component: ProgramsComponent},
    {path: 'tasks', component: TasksComponent},
    {path: 'users', component: UsersComponent},
    {path: 'surveys', component: SurveysComponent}
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
