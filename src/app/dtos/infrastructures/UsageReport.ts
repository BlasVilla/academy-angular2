export interface IUsageReport {
    usageReportId: string;
    virtualMachineId: number;
    timeStamp: Date;
    processorUsage: number;
    memoryUsage: number;
}

export class UsageReport implements IUsageReport {
    usageReportId: string;
    virtualMachineId: number;
    timeStamp: Date;
    processorUsage: number;
    memoryUsage: number;

    constructor(data: {
        usageReportId: string,
        virtualMachineId: number,
        timeStamp: any,
        processorUsage: number,
        memoryUsage: number}) {
        
      this.usageReportId = data.usageReportId;
      this.virtualMachineId = data.virtualMachineId;
      this.processorUsage = data.processorUsage;
      this.memoryUsage = data.memoryUsage;
      this.timeStamp = new Date(data.timeStamp);
    }
}