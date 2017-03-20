import { NgModule } from '@angular/core'
import { aboutRouterConfig } from './about.router'
import { CommonModule } from '@angular/common'
import { AboutComponent } from './about.component'
import { AboutUserComponent } from './about-user.component'
import { AboutSectionComponent } from './about-section.component'
import { AboutResolveService } from './about-resolve.service'
import { AboutUserResolveService } from './about-user-resolve.service'
import { UserService } from '../shared/services/user.service'

@NgModule({
    imports:[
        CommonModule,
        aboutRouterConfig
    ],
    declarations: [
        AboutComponent,
        AboutUserComponent,
        AboutSectionComponent
    ],
    providers:[
        UserService,
        AboutResolveService,
        AboutUserResolveService
    ]
})
export class AboutModule{}