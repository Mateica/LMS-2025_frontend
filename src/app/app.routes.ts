import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { RoleTableComponent } from './components/tables/role-table/role-table.component';
import { RoleFormComponent } from './components/forms/role-form/role-form.component';
import { AccountTableComponent } from './components/tables/account-table/account-table.component';
import { AccountFormComponent } from './components/forms/account-form/account-form.component';
import { EvaluationTypeTableComponent } from './components/tables/evaluation-type-table/evaluation-type-table.component';
import { EvaluationTypeFormComponent } from './components/forms/evaluation-type-form/evaluation-type-form.component';
import { PlaceWrapperComponent } from './components/wrappers/place-wrapper/place-wrapper.component';
import { CountryWrapperComponent } from './components/wrappers/country-wrapper/country-wrapper.component';
import { PlaceTableComponent } from './components/tables/place-table/place-table.component';
import { CountryTableComponent } from './components/tables/country-table/country-table.component';
import { PlaceFormComponent } from './components/forms/place-form/place-form.component';
import { CountryFormComponent } from './components/forms/country-form/country-form.component';

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
    },
    {
        path: 'evaluationTypes', component : EvaluationTypeTableComponent
    },
    {
        path: 'evaluationTypeForm', component : EvaluationTypeFormComponent
    },
    {
        path: 'places', component : PlaceTableComponent
    },
    {
        path: 'placeForm', component : PlaceFormComponent
    },
    {
        path: 'countries', component : CountryTableComponent
    },
    {
        path: 'countryForm', component : CountryFormComponent
    },
];
