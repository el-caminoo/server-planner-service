import { Controller, Post, Body, Req } from '@nestjs/common';
import { ServerService } from './server.service';
import { VirtualMachine, Server } from './server.interface';


@Controller('server')
export class ServerController {
    constructor(private serverService: ServerService) {}

    @Post('/')
    public getNumberOfServers(@Body("severType") serverType: Server, @Body("virtualMachines") virtualMachines: Array<VirtualMachine>): number {
        return this.serverService.calculate(serverType, virtualMachines)
    }
}
