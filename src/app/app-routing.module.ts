import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { CalculateOxygenComponent } from './calculate-oxygen/calculate-oxygen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'calculate-oxygen',
    component: CalculateOxygenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
