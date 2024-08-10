import { Tool } from "ollama";
import { getVehicleTelematicData } from "./getVehicleTelematicData.js";

function fn(
  target: string,
  entityType: string,
  organizationId: string
): string {
  // Todo get lat/long for target
  if (entityType.includes("vehicle")) {
    const ent = getVehicleTelematicData.fnCall(organizationId);
    // TODO get vehicle closest to target lat/long
    return `The entity closest to [${target}] is '${JSON.stringify(
      ent[0].name,
      null,
      2
    )}'`;
  } else {
    return `Unknown entity type'`;
  }
}

function toolDef(): Tool {
  const tool: Tool = {
    type: "function",
    function: {
      name: "getClosest",
      description:
        "returns the entity closest to a place given the locations of a list of entities and the place",
      parameters: {
        type: "object",
        properties: {
          target: {
            type: "string",
            description: "The target place we will compare the locations to",
          },
          entityType: {
            type: "string",
            description:
              "The type of entity that you want to find the closest one of",
          },
          organizationId: {
            type: "string",
            description: "Organization Id",
          },
        },
        required: ["target", "entityType", "organizationId"],
      },
    },
  };
  return tool;
}

export const getClosest = {
  fn,
  toolDef,
  fnName: "getClosest",
};

interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  gpsTimestamp: Date;
}
