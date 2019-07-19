
const fetchAssets = () => {
  return [{
      "technology": {
          "artifact": "power-generator",
          "label": "Power Generator"
      },
      "active": true,
      "online": true,
      "artifact": "asset1234",
      "runtime": "Hours:979 Minutes:51",
      "label": "Asset 1234",
      "assignment": {
          "artifact": "none",
          "site": "None",
          "region": "None",
          "customer": "None"
      },
      "state": {
          "artifact": "normal",
          "label": "Normal",
          "rank": 1
      }
  },
  {
      "technology": {
          "artifact": "gas-detection",
          "label": "Gas Detection"
      },
      "active": true,
      "online": true,
      "artifact": "asset1243",
      "runtime": "Hours:1122 Minutes:12",
      "label": "Asset 1243",
      "assignment": {
          "artifact": "none",
          "site": "None",
          "region": "None",
          "customer": "None"
      },
      "state": {
          "artifact": "normal",
          "label": "Normal",
          "rank": 1
      }
  }]
}

const fetchAssetService = (asset) => {

  return {
      technology: {
          artifact: "power-generator",
          label: "Power Generator"
      },
      classification: "srn:integritty:asset",
      location: {},
      online: true,
      runtime: "Hours:979 Minutes:54",
      thing: {
          certificate: "arn:aws:iot:us-east-1:453878411580:cert/e804cdd563b880d1698ba4701c454eab4bf8e464d6026acef2321fcfd3858b69",
          thingName: "asset1234",
          environment: "staging",
          thingArn: "arn:aws:iot:us-east-1:123456789:thing/asset1234",
          thingId: "2620b921-886f-49aa-bbf2-9792611504ce"
      },
      config: {
          device: {
              interval: 60000,
              address: "192.1.1.1",
              asset: "asset1234",
              device: "power-generator"
          },
          telemetry: {
              asset: "asset1234",
              certs: {
                  host: "aow88fg5wagou-ats.iot.us-east-1.amazonaws.com",
                  certPath: "./certs/certificate.pem.crt",
                  clientId: "asset1234",
                  keyPath: "./certs/private.key",
                  caPath: "./certs/AmazonRootCA1.crt"
              },
              interval: 60000
          }
      },
      device: {
          artifact: "superpower-generator",
          label: "Superpower Generator"
      },
      label: "asset1234",
      createdAt: 1557510625580,
      updatedBy: "3a12f810-194b-4aff-bdeb-abcdefghijkl",
      createdBy: "3a12f810-194b-4aff-bdeb-abcdefghijkl",
      state: {
          artifact: "normal",
          label: "Normal",
          updatedAt: 1557510625580
      },
      active: true,
      artifact: "asset1234",
      updatedAt: 1558544742872,
      assignment: {
          artifact: "none",
          site: "None",
          region: "None",
          customer: "None"
      }
  }
}

export {
  fetchAssets,
  fetchAssetService
}
