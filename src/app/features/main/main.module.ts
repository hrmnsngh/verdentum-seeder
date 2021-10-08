import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FeedComponent } from './feed/feed.component';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgramsComponent } from './programs/programs.component';
import { TasksComponent } from './tasks/tasks.component';
import { SurveysComponent } from './surveys/surveys.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [FeedComponent, MainComponent, DashboardComponent, ProgramsComponent, TasksComponent, SurveysComponent, UsersComponent, ReportsComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
