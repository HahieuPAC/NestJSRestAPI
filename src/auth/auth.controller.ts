import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
@Controller('auth')
export class AuthController {
    // auth service is automatically created when initializing the controller
    constructor(private authService: AuthService) {

    }
    // some request from client
    @Post('register') //register a new user
    register() {
        // Now controller call 'service'
        return this.authService.register
    }


    //POST: ..../auth/login
    @Post('login')
    login() {
        return this.authService.login();
    }
}
// export = "make public"