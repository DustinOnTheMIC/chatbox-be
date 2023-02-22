import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { response } from 'express';

@Injectable()
export class AppService {

  users = {
    user1: {
      name: 'T',
      ava: '',
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
    console.log(userName, password);
    
    if(userName === "123" && password === "123") {
      return this.users.user1;
    } else if(userName === '123' && password === 'qwe') {
      return this.users.user2;
    } else {
      throw new HttpException("wrong", HttpStatus.BAD_REQUEST)
    }
  }
  
}
