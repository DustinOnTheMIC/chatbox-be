import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('roomList')
  getRoomList() {
    return this.appService.getRoomList();
  }

  // @Post('login')
  // handleLogin(@Body('userName') userName: string, @Body('password') password: string) {
  //   return this.appService.login(userName, password);
  // }

  @Post('login')
  handleLogin(@Body() body: any) {
    const {userName, password} = JSON.parse(body.data)
    return this.appService.login(userName, password);
  }
}
