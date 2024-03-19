import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { LogInDto } from './dto/login.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  signUp(
    @Body()
    signUpDto: SignUpDto,
  ): Promise<{ token: string }> {
    return this.usersService.signUp(signUpDto);
  }

  @Post('/login')
  logIn(
    @Body()
    loginDto: LogInDto,
  ): Promise<{ token: string }> {
    return this.usersService.logIn(loginDto);
  }
}
