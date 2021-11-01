import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  users = {
    user1: {
      name: 'Tien Ngo',
      ava: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2018%2F04%2Fzappa-the-cat-9.jpg',
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
      return new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
        }, HttpStatus.BAD_REQUEST
      )
    }
  }
}
