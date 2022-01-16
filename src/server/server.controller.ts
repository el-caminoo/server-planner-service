import { Controller, Post, Body } from '@nestjs/common';
import { ServerService} from './server.service';
import { virtualMachine, serverType } from './server.interface';


@Controller('server')
export class ServerController {
    constructor(private serverService: ServerService) {}

    @Post('/')
    public getNumberOfServers(@Body() serverType: serverType, virtualMachine: Array<virtualMachine>): number {
        return this.serverService.determineNumberOfServers(serverType, virtualMachine)
    }
}
