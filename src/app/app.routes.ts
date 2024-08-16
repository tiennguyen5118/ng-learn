import { GetStartedComponent } from './pages/get-started/get-started.component';
import { Routes } from '@angular/router';
import { MaterialComponent } from './pages/material/material.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  {
    path: 'get-started',
    component: GetStartedComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'material',
    component: MaterialComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];
