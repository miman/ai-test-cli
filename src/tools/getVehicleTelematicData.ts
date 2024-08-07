import {Tool} from 'ollama'

const vehicles: VehicleTelematicData[] = [
  {
    id: '1',
    name: 'Vehicle Gbg',
    latitude: 57.74974065279135,
    longitude: 11.927294290485783,
    speed: 56,
    gpsTimestamp: new Date(),
    driverId: 'Mikael',
    fuelLevel: 220.23,
  },
  {
    id: '2',
    name: 'Vehicle Kirchberg',
    latitude: 47.44371333231453,
    longitude: 12.313700606889622,
    speed: 56,
    gpsTimestamp: new Date(),
    driverId: 'Stefan',
    fuelLevel: 220.23,
  },
]

function fn(organizationId: string): string {
  return `This is the telematic data for the vehicles that belong to the organization id '${organizationId}':\n ${JSON.stringify(
    vehicles,
    null,
    2,
  )}`
}

function fnCall(organizationId: string): VehicleTelematicData[] {
  return vehicles
}

function toolDef(): Tool {
  const stockTool: Tool = {
    type: 'function',
    function: {
      name: 'getVehicleTelematicData',
      description:
        'Gets the vehicle telematic data, including gps position, speed, fuel level...) for all vehicles the organization with the given id has access to',
      parameters: {
        type: 'object',
        properties: {
          organizationId: {
            type: 'string',
            description: 'Organization Id',
          },
        },
        required: ['organizationId'],
      },
    },
  }
  return stockTool
}

export const getVehicleTelematicData = {
  fn,
  toolDef,
  fnName: 'getVehicleTelematicData',
  fnCall,
}

interface VehicleTelematicData {
  id: string
  name: string
  latitude: number
  longitude: number
  speed: number
  gpsTimestamp: Date
  fuelLevel?: number
  driverId?: string
}
