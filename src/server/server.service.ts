import { Injectable } from '@nestjs/common';
import {virtualMachine, serverType} from './server.interface';


@Injectable()
export class ServerService {

    public determineNumberOfServers(serverType: serverType, virtualMachine: Array<virtualMachine>): number {
        return 
    }
}


