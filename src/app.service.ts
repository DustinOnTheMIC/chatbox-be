import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Injectable()
export class AppService {

  users = {
    user1: {
      name: 'Tien Ngo',
      ava: 'https://instagram.fdad1-3.fna.fbcdn.net/v/t51.2885-15/e35/p240x240/249760561_862938154423168_4851623962953080369_n.jpg?_nc_ht=instagram.fdad1-3.fna.fbcdn.net&_nc_cat=104&_nc_ohc=5L4Kx3n1qNkAX-tXYs1&edm=AJXOVykBAAAA&ccb=7-4&oh=95893cabde8712e8c6dae5d5d1d950fc&oe=618714CD&_nc_sid=9c1db7&ig_cache_key=MjY5NTk2NzA1MTUxNTUyOTg3NA%3D%3D.2-ccb7-4',
      id: 'user1'
    },
    user2: {
        name: 'Tin pro',
        ava: 'https://i.pinimg.com/236x/7d/6f/26/7d6f26f54eeaeaf61d1af6c003e2f463.jpg',
        id: 'user2'
    }
  }

  roomList = [
    {
        id: 'room-1',
        name: 'room 1'
    },
    {
        id: 'room-2',
        name: 'room 2'
    }
  ]

  getHello(): string {
    return 'Hello World!';
  }

  getRoomList() {
    return this.roomList
  }

  login(userName, password) {
    if(userName === "123" && password === "123") {
      return this.users.user1;
    } else if(userName === '123' && password === 'qwe') {
      return this.users.user2;
    } else {
      return new HttpErrorByCode[400]
    }
  }
  
}
