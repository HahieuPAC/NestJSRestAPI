import { Injectable } from "@nestjs/common";
@Injectable({}) // This us "Dependency"
export class AuthService {
    register () {
        return {
            message: 'Register an user'
        }
        
    }
    
    login() {
        return {
            message: 'This is Login'
        }
        
    }
}