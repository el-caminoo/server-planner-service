import { ServerService } from './server.service';

describe('Testing middleware/helper function', () => {

  var serverType = {CPU: 2, RAM: 32, HDD: 100}
  var virtualMachines = [{CPU: 1, RAM: 16, HDD: 10}, {CPU: 1, RAM: 16, HDD: 10}, {CPU: 2, RAM: 32, HDD: 100}]

  var serviceObect = new ServerService();
  var result = serviceObect.calculate(serverType, virtualMachines);

  it("The parameters should be of correct types", () => {
    expect(serverType).toBeInstanceOf(Object)
    expect(virtualMachines).toBeInstanceOf(Array)
  });

  it("Should be equal to 2", () => {
    expect(result).toBe(2)
  });

});
