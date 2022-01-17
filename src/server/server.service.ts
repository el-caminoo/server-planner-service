import { Injectable } from '@nestjs/common';
import {VirtualMachine, Server} from './server.interface';


@Injectable()
export class ServerService {

    public resolve(serverType: Server, virtualMachines: Array<VirtualMachine>): number {
        var currentState = serverType;
        var count = 1;

        for (let index = 0; index < virtualMachines.length; index++) {
            const element = virtualMachines[index];

            if (element["CPU"]>serverType["CPU"] || element["RAM"]>serverType["RAM"] || element["HDD"]>serverType["HDD"]) {
                continue
            }

            else {
                if ((currentState["CPU"]-element["CPU"]) >= 0 || (currentState["RAM"]-element["RAM"]) >= 0 || (currentState["HDD"]-element["HDD"]) >= 0) {
                    var currentState = {"CPU":currentState["CPU"]-element["CPU"], "RAM":currentState["RAM"]-element["RAM"], "HDD":currentState["HDD"]-element["HDD"]}
                }
            
                else if ((currentState["CPU"]-element["CPU"])<0 || (currentState["RAM"]-element["RAM"])<0 || (currentState["HDD"]-element["HDD"])<0){
                    count += 1
                    var currentState = serverType;
                    var currentState = {"CPU":currentState["CPU"]-element["CPU"], "RAM":currentState["RAM"]-element["RAM"], "HDD":currentState["HDD"]-element["HDD"]}
                }
            }
        }
        return count;
    }

    public calculate(serverType: Server, virtualMachines: Array<VirtualMachine>): number  {
        return this.resolve(serverType, virtualMachines);
    }
}
