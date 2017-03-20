import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { User } from '../shared/models/user'
import { UserService } from '../shared/services/user.service'

@Injectable()
export class AboutResolveService implements Resolve<User>{

    constructor(private service:UserService){}

    
    resolve(route:ActivatedRouteSnapshot){
        return this.service.getAllUsers()
    }

}