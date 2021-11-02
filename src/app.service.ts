import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Injectable()
export class AppService {

  users = {
    user1: {
      name: 'Tien Ngo',
      ava: 'https://instagram.fdad2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/118727321_180499580208452_7251250675079991400_n.jpg?_nc_ht=instagram.fdad2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=XzU7cKIM8C4AX_rwtPo&tn=_WirIWuEYE4J-01I&edm=AABBvjUBAAAA&ccb=7-4&oh=48bfc4e5a105b4a32acc8c7336e90d33&oe=6187B1EF&_nc_sid=83d603',
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
