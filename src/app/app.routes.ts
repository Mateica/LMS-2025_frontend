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
import { TeacherFormComponent } from './components/forms/teacher-form/teacher-form.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EvaluationInstrumentTableComponent } from './components/tables/evaluation-instrument-table/evaluation-instrument-table.component';
import { EvaluationInstrumentFormComponent } from './components/forms/evaluation-instrument-form/evaluation-instrument-form.component';
import { OutcomeTableComponent } from './components/tables/outcome-table/outcome-table.component';
import { OutcomeFormComponent } from './components/forms/outcome-form/outcome-form.component';
import { RoleFormWrapperComponent } from './components/wrappers/role-form-wrapper/role-form-wrapper.component';
import { RoleTableWrapperComponent } from './components/wrappers/role-table-wrapper/role-table-wrapper.component';
import { EvaluationInstrumentTableWrapperComponent } from './components/wrappers/evaluation-instrument-table-wrapper/evaluation-instrument-table-wrapper.component';
import { EvaluationInstrumentFormWrapperComponent } from './components/wrappers/evaluation-instrument-form-wrapper/evaluation-instrument-form-wrapper.component';
import { EvaluationTypeTableWrapperComponent } from './components/wrappers/evaluation-type-table-wrapper/evaluation-type-table-wrapper.component';
import { EvaluationTypeFormWrapperComponent } from './components/wrappers/evaluation-type-form-wrapper/evaluation-type-form-wrapper.component';
import { OutcomeFormWrapperComponent } from './components/wrappers/outcome-form-wrapper/outcome-form-wrapper.component';
import { OutomeTableWrapperComponent } from './components/wrappers/outome-table-wrapper/outome-table-wrapper.component';
import { TeacherPageComponent } from './components/pages/teacher-page/teacher-page.component';
import { StudentServicePageComponent } from './components/pages/student-service-page/student-service-page.component';

export const routes: Routes = [
    {
        path:'/', component: HomeComponent
    },
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
        path: 'roles', component : RoleTableWrapperComponent, data:{
            allowedRoles: ["ADMIN"]
        }, canActivate: [authGuard]
    },
    {
        path: 'roleForm', component : RoleFormWrapperComponent, data:{
            allowedRoles: ["ADMIN"]
        }, canActivate: [authGuard]
    },
    {
        path: 'accounts', component : AccountTableComponent, data:{
            allowedRoles: ["ADMIN"]
        }, canActivate : [authGuard]
    },
    {
        path: 'accountForm', component : AccountFormComponent
    },
    {
        path: 'evaluationTypes', component : EvaluationTypeTableWrapperComponent, data:{
            allowedRoles: ["ADMIN", "TEACHER"]
        },
        canActivate: [authGuard]
    },
    {
        path: 'evaluationTypeForm', component : EvaluationTypeFormWrapperComponent,data:{
            allowedRoles: ["ADMIN", "TEACHER"]
        },
        canActivate: [authGuard]
    },
    {
        path: 'evaluationInstruments', component : EvaluationInstrumentTableWrapperComponent, data:{
            allowedRoles: ["ADMIN", "TEACHER"]
        },
        canActivate: [authGuard]
    },
    {
        path: 'evaluationInstrumentForm', component : EvaluationInstrumentFormWrapperComponent, data:{
            allowedRoles: ["ADMIN", "TEACHER"]
        },
        canActivate: [authGuard]
    },
    {
        path: 'syllabi', component : OutomeTableWrapperComponent, data:{
            allowedRoles: ["ADMIN", "TEACHER"]
        },
        canActivate: [authGuard]
    },
    {
        path: 'syllabusForm', component : OutcomeFormWrapperComponent, data:{
            allowedRoles: ["ADMIN"]
        },
        canActivate: [authGuard]
    },
    {
        path: 'places', component : PlaceTableComponent, data:{
            allowedRoles: ["ADMIN"]
        },
        canActivate: [authGuard]
    },
    {
        path: 'placeForm', component : PlaceFormComponent, data:{
            allowedRoles: ["ADMIN"]
        },
        canActivate: [authGuard]
    },
    {
        path: 'countries', component : CountryTableComponent, data:{
            allowedRoles: ["ADMIN"]
        },
        canActivate: [authGuard]
    },
    {
        path: 'countryForm', component : CountryFormComponent, data:{
            allowedRoles: ["ADMIN"]
        },
        canActivate: [authGuard]
    },
    {
        path :'teacherForm', component : TeacherFormComponent, data:{
            allowedRoles: ["ADMIN"]
        },
        canActivate: [authGuard]
    },
    {
        path: 'teacherPage', component : TeacherPageComponent, data:{
            allowedRoles: ["TEACHER"]
        }, canActivate: [authGuard]
    },
    {
        path: 'studentServicePage', component: StudentServicePageComponent , data: {
            allowedRoles: ["ADMIN", "STAFF"]
        }
    }
];
