import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about.component'
import { AboutUserComponent } from './about-user.component'
import { AboutSectionComponent } from './about-section.component'
import { AboutResolveService } from './about-resolve.service'
import { AboutUserResolveService } from './about-user-resolve.service'

const routes: Routes = [
    { 
      path: '', 
      component: AboutSectionComponent,
      children: [
            {
                path: '',
                component: AboutComponent,
                resolve: {
                    users: AboutResolveService
                }
            },
            {
                path:':username',
                component: AboutUserComponent,
                resolve:{
                    user: AboutUserResolveService
                }
            }
        ]
    }
]

export const aboutRouterConfig = RouterModule.forChild(routes)