import { Injectable } from '@nestjs/common';
import {VirtualMachine, Server} from './server.interface';


@Injectable()
export class ServerService {

    public calculate(serverType: Server, virtualMachines: Array<VirtualMachine>): number  {
        return virtualMachines[0].RAM
    }
}
