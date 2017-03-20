import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { User } from '../shared/models/user'

@Component({
    selector: 'about',
    styles: [`
        .profile-card{
            background: black;
            border-radius: 4px;
            padding: 30px;
            text-align: center;
        }
        .profile-card img {
            max-width: 50%;
            margin: 15px auto;
        }
    `],
    template: `
        <div class="row" *ngIf="users">
            <div class="col-sm-4" *ngFor='let user of users'>
                <div class="profile-card" [routerLink]="['/about', user.username]"> 
                    <img [src]="user.avatar" class="img-responsive img-circle" [alt]="user.name" />
                    <h2>{{user.name}}</h2>
                    <p><a href='http://www.twitter.com/{{user.username}}'>{{user.username}}</a></p>
                </div>
            </div>
        </div>
    `
})
export class AboutComponent implements OnInit{
    users:User[]

    constructor( private route:ActivatedRoute){}

    ngOnInit(){
        // this.userService.getAllUsers().then(users => this.users = users)

        this.route.data.forEach((data:{users:User[]}) => this.users = data.users)
    }
    
    
}