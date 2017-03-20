import { Component } from '@angular/core'

@Component({
    template: `
        <div class='jumbotron text-center'>
            <h2>404: Page Not found</h2>
            <span>You may be lost. Go back <a routerLink="/">home</a></span>
        </div>
    `
})
export class NotFoundComponent{
    
}