import { Logger } from "@nestjs/common";
import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class AppGateway implements OnGatewayInit {
    private logger: Logger = new Logger('AppGateway');
    private joiningRoom: string = "";

    @WebSocketServer() socketServer: Server

    private EventEnum = {
        connection: 'connection',
        joinRoom: 'joinRoom',
        sendNewMessage: 'sendNewMessage',
        getNewMessage: 'getNewMessage'
    }

    afterInit(server: any) {
        this.logger.log("Running");
    }

    @SubscribeMessage("joinRoom")
    handleJoinRoom(clientSocket: Socket, roomId: string) {
        clientSocket.join(roomId);
        this.joiningRoom = roomId;
    }

    @SubscribeMessage("sendNewMessage")
    handleSendMessage(clientSocket: Socket, message: any) {
        this.socketServer.to(this.joiningRoom).emit("getNewMessage", {message})
    }

}