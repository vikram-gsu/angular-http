import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { User } from '../shared/models/user'
import { UserService } from '../shared/services/user.service'



@Component({
    styles: [`
        img {
            max-width: 300px;
            margin: 20px auto;
        }
    `],
    template: `
        <button type="button" (click)="goBack()" class="btn btn-info btn-sm">Go Back</button>
        <div class="jumbotron text-center" *ngIf="user">
            <img [src]="user.avatar" class="img-responsive img-circle" />
            {{user.name}}
        </div>
    `
})
export class AboutUserComponent implements OnInit{
    user:User
    
    constructor(private route:ActivatedRoute, private userService: UserService, private router:Router){}

    ngOnInit(){
        let selectedUser = this.route.snapshot.params['username']
        this.userService.getUserByUsername(selectedUser).then(user => this.user = user)

        this.route.data.forEach(data => console.log(data))
    }

    goBack(){
        this.router.navigate(['/about'])
    }
}