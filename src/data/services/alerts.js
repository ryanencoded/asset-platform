import {
  API
} from 'aws-amplify';

export const fetchAlertsService = () => {
  return [{
      "active": true,
      "artifact": "asset1234:concentration_1:latest:critical:1561387916978:1",
      "createdAt": 1561388037146,
      "actual": "15.46 ",
      "expected": "20 ",
      "message": {
        "body": "The H2S concentration on Asset 1234 is in critical status.",
        "notify": true,
        "repeat": true
      },
      "asset": {
        "artifact": "asset1234",
        "site": "None",
        "label": "Asset 1234",
        "technology": {
          "artifact": "gas-detection",
          "label": "Gas Detection"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "normal",
        "rank": 1,
        "label": "Normal"
      }
    },
    {
      "active": true,
      "artifact": "asset1234:concentration_1:latest:warning:1561387946742:1",
      "createdAt": 1561388067091,
      "actual": "0 ",
      "expected": "10 ",
      "message": {
        "body": "The H2S concentration on asset1234 is in warning status.",
        "notify": true,
        "repeat": true
      },
      "asset": {
        "artifact": "asset1234",
        "site": "None",
        "label": "Asset 1234",
        "technology": {
          "artifact": "gas-detection",
          "label": "Gas Detection"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "normal",
        "rank": 1,
        "label": "Normal"
      }
    },
    {
      "active": true,
      "artifact": "asset4321:temperature_coolant:latest:informational:1561071755532:6",
      "updatedAt": 1561175188004,
      "createdAt": 1561072055945,
      "actual": "185 ",
      "expected": "184 ",
      "message": {
        "notifyAt": 1561071996423,
        "body": "The coolant temperature on Asset 4321 is slowly rising.",
        "notify": true,
        "repeat": true,
        "attempts": 5
      },
      "updatedBy": "3a12f810-194b-4aff-bdeb-de4e9925c344",
      "asset": {
        "artifact": "asset4321",
        "site": "None",
        "label": "Asset 4321",
        "technology": {
          "artifact": "power-generator",
          "label": "Power Generator"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "informational",
        "rank": 2,
        "label": "Informational"
      }
    },
    {
      "active": true,
      "artifact": "asset4321:temperature_coolant:latest:informational:1561071755532:8",
      "updatedAt": 1561151290715,
      "createdAt": 1561072176192,
      "actual": "185 ",
      "expected": "184 ",
      "message": {
        "notifyAt": 1561072116483,
        "body": "The coolant temperature on Asset 1234 is slowly rising.",
        "notify": true,
        "repeat": true,
        "attempts": 7
      },
      "updatedBy": "3a12f810-194b-4aff-bdeb-de4e9925c344",
      "asset": {
        "artifact": "asset4321",
        "site": "None",
        "label": "Asset 4321",
        "technology": {
          "artifact": "power-generator",
          "label": "Power Generator"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "informational",
        "rank": 2,
        "label": "Informational"
      }
    }, {
      "active": true,
      "artifact": "asset4321:temperature_coolant:latest:informational:1561150786170:1",
      "createdAt": 1561150786429,
      "actual": "183 ",
      "expected": "184 ",
      "message": {
        "body": "The coolant temperature on Asset 4321 is slowly rising.",
        "notify": true,
        "repeat": true
      },
      "asset": {
        "artifact": "asset4321",
        "site": "None",
        "label": "Asset 4321",
        "technology": {
          "artifact": "power-generator",
          "label": "Power Generator"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "normal",
        "rank": 1,
        "label": "Normal"
      }
    },
    {
      "active": true,
      "artifact": "asset4321:temperature_coolant:latest:informational:1561422920674:1",
      "createdAt": 1561423580611,
      "actual": "185 ",
      "expected": "184 ",
      "message": {
        "body": "The coolant temperature on Asset 4321 is slowly rising.",
        "notify": true,
        "repeat": true
      },
      "asset": {
        "artifact": "asset4321",
        "site": "None",
        "label": "Asset 4321",
        "technology": {
          "artifact": "power-generator",
          "label": "Power Generator"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "informational",
        "rank": 2,
        "label": "Informational"
      }
    }, {
      "active": true,
      "artifact": "asset4321:temperature_coolant:latest:informational:1562015139775:1",
      "createdAt": 1562015800310,
      "actual": "183 ",
      "expected": "184 ",
      "message": {
        "body": "The coolant temperature on Asset 4321 is slowly rising.",
        "notify": true,
        "repeat": true
      },
      "asset": {
        "artifact": "asset4321",
        "site": "None",
        "label": "Asset 4321",
        "technology": {
          "artifact": "power-generator",
          "label": "Power Generator"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "normal",
        "rank": 1,
        "label": "Normal"
      }
    }
  ]
}

export const clearAlertService = (alert) => {
  return [{
      "active": true,
      "artifact": "asset1234:concentration_1:latest:critical:1561387916978:1",
      "createdAt": 1561388037146,
      "actual": "15.46 ",
      "expected": "20 ",
      "message": {
        "body": "The H2S concentration on Asset 1234 is in critical status.",
        "notify": true,
        "repeat": true
      },
      "asset": {
        "artifact": "asset1234",
        "site": "None",
        "label": "Asset 1234",
        "technology": {
          "artifact": "gas-detection",
          "label": "Gas Detection"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "normal",
        "rank": 1,
        "label": "Normal"
      }
    },
    {
      "active": true,
      "artifact": "asset1234:concentration_1:latest:warning:1561387946742:1",
      "createdAt": 1561388067091,
      "actual": "0 ",
      "expected": "10 ",
      "message": {
        "body": "The H2S concentration on asset1234 is in warning status.",
        "notify": true,
        "repeat": true
      },
      "asset": {
        "artifact": "asset1234",
        "site": "None",
        "label": "Asset 1234",
        "technology": {
          "artifact": "gas-detection",
          "label": "Gas Detection"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "normal",
        "rank": 1,
        "label": "Normal"
      }
    },
    {
      "active": true,
      "artifact": "asset4321:temperature_coolant:latest:informational:1561071755532:6",
      "updatedAt": 1561175188004,
      "createdAt": 1561072055945,
      "actual": "185 ",
      "expected": "184 ",
      "message": {
        "notifyAt": 1561071996423,
        "body": "The coolant temperature on Asset 4321 is slowly rising.",
        "notify": true,
        "repeat": true,
        "attempts": 5
      },
      "updatedBy": "3a12f810-194b-4aff-bdeb-de4e9925c344",
      "asset": {
        "artifact": "asset4321",
        "site": "None",
        "label": "Asset 4321",
        "technology": {
          "artifact": "power-generator",
          "label": "Power Generator"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "informational",
        "rank": 2,
        "label": "Informational"
      }
    },
    {
      "active": true,
      "artifact": "asset4321:temperature_coolant:latest:informational:1561071755532:8",
      "updatedAt": 1561151290715,
      "createdAt": 1561072176192,
      "actual": "185 ",
      "expected": "184 ",
      "message": {
        "notifyAt": 1561072116483,
        "body": "The coolant temperature on Asset 1234 is slowly rising.",
        "notify": true,
        "repeat": true,
        "attempts": 7
      },
      "updatedBy": "3a12f810-194b-4aff-bdeb-de4e9925c344",
      "asset": {
        "artifact": "asset4321",
        "site": "None",
        "label": "Asset 4321",
        "technology": {
          "artifact": "power-generator",
          "label": "Power Generator"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "informational",
        "rank": 2,
        "label": "Informational"
      }
    }, {
      "active": true,
      "artifact": "asset4321:temperature_coolant:latest:informational:1561150786170:1",
      "createdAt": 1561150786429,
      "actual": "183 ",
      "expected": "184 ",
      "message": {
        "body": "The coolant temperature on Asset 4321 is slowly rising.",
        "notify": true,
        "repeat": true
      },
      "asset": {
        "artifact": "asset4321",
        "site": "None",
        "label": "Asset 4321",
        "technology": {
          "artifact": "power-generator",
          "label": "Power Generator"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "normal",
        "rank": 1,
        "label": "Normal"
      }
    },
    {
      "active": true,
      "artifact": "asset4321:temperature_coolant:latest:informational:1561422920674:1",
      "createdAt": 1561423580611,
      "actual": "185 ",
      "expected": "184 ",
      "message": {
        "body": "The coolant temperature on Asset 4321 is slowly rising.",
        "notify": true,
        "repeat": true
      },
      "asset": {
        "artifact": "asset4321",
        "site": "None",
        "label": "Asset 4321",
        "technology": {
          "artifact": "power-generator",
          "label": "Power Generator"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "informational",
        "rank": 2,
        "label": "Informational"
      }
    }, {
      "active": true,
      "artifact": "asset4321:temperature_coolant:latest:informational:1562015139775:1",
      "createdAt": 1562015800310,
      "actual": "183 ",
      "expected": "184 ",
      "message": {
        "body": "The coolant temperature on Asset 4321 is slowly rising.",
        "notify": true,
        "repeat": true
      },
      "asset": {
        "artifact": "asset4321",
        "site": "None",
        "label": "Asset 4321",
        "technology": {
          "artifact": "power-generator",
          "label": "Power Generator"
        },
        "region": "None",
        "customer": "None"
      },
      "state": {
        "artifact": "normal",
        "rank": 1,
        "label": "Normal"
      }
    }
  ]
}
