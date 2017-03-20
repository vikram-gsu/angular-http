import { Injectable } from '@angular/core'
import { User } from '../models/user'

const users:Promise<User[]> = Promise.resolve([
    {
        id: 1,
        name:'Sasha Digiulian',
        username: 'sashadigiulian',
        avatar: 'https://pbs.twimg.com/profile_images/813605035200380928/4N8H-77s_400x400.jpg'
    },
    {
        id: 2,
        name:'J.K. Rowling',
        username: 'jk_rowling',
        avatar: 'https://pbs.twimg.com/profile_images/834494640611065857/882iNSpp_400x400.jpg'
    },
    {
        id: 3,
        name:'Alex Honnold',
        username: 'alexhonnold',
        avatar: 'https://pbs.twimg.com/profile_images/521729433426599937/0nntVU9L_400x400.jpeg'
    }

])


@Injectable()
export class UserService{

    getAllUsers():Promise<User[]>{
        return users
    }

    getUserByUsername(username):Promise<User>{
        return users.then(users => users.find(user => user.username===username))
    }
}