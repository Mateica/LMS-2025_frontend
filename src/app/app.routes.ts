import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { RoleTableComponent } from './components/tables/role-table/role-table.component';
import { RoleFormComponent } from './components/forms/role-form/role-form.component';
import { AccountTableComponent } from './components/tables/account-table/account-table.component';
import { AccountFormComponent } from './components/forms/account-form/account-form.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'signup', component: SignupComponent
    },

    {
        path: 'admin', component: AdminComponent, canActivate: [authGuard]
    },
    {
        path: 'roles', component : RoleTableComponent
    },
    {
        path: 'roleForm', component : RoleFormComponent
    },
    {
        path: 'accounts', component : AccountTableComponent
    },
    {
        path: 'accountForm', component : AccountFormComponent
    }
];
