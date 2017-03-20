import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { NotFoundComponent } from './not-found/notfound.component'


const appRoutes:Routes = [
    {path: '', 
        component: HomeComponent
        // redirectTo: '/about',
        // pathMatch: 'full'
    },
    {path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent},
    
]

export const routeConfig:ModuleWithProviders = RouterModule.forRoot(appRoutes)