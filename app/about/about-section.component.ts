import { Component } from '@angular/core'

@Component({
    template: `
        <div class='text-center'>
            <span>About Section</span>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AboutSectionComponent{}