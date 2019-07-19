# Assets API
: This API pertains to storing and collecting data for the assets.

## URL:
`Removed to protect client information`

## Authorization Headers:
: Note that you will have to include authorization headers to get access to these resources. This
includes your Access Key, Secret Access Key, and a Session Token.

> Header Contents
> `host` *Required* This is the amazon endpoint that will reach. Example: `host: apigateway.us-east-1.amazonaws.com`
> `z-amz-date` *Required*: This should be in ISO 8601 standard format. This is the date used to create the signature. Example: `X-Amz-Date: 20130613T203622Z`
> `content-type`: *Conditional*: Required for PATCH, PUT and POST requests. Specifies JSON and the version Example: `Content-Type: application/x-amz-json-1.0`.
> `Authorization` *Required*: This is to allow yourself access to the resources. This will include an access key, secret access key, and session token (this will be the Signature), and above contents. Example: `Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20170223/region/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}`


### Methods
`GET /assets`
: This will return an object containing meta data and an array of data with all the technologies. The information returned will contain: technology type, whether it is active, artifact id, where and whom it's assigned to, and the state of the artifact
> Params: None

### Response Body
* Code 200: Success
```javascript
{
    "meta": {
        "count": 2,
        "status": true,
        "params": null
    },
    "data": [
        {
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
                "updatedAt": 1557510625580
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
                "updatedAt": 1557510666033
            }
        }
    ]
}
```
* Code 403: Security token has expired.
: This means you need to rotate out the authentication keys and session token
```javascript
{
  "message": "The security token included in the request is expired"
}
```

`GET /assets/{asset}`
: This will return asset details of a particular device
> Path params:
> `asset: <string> *Required*`
> Example: `asset1234`. This returns information about the specific asset. The information includes: the technology type, whether it's online, asset runtime, AWS related variables, configuration information for the device and obtaining telemetry, asset state, when it was created and updated, where and who it's assigned to, and a download link for this data.

### Response Body
* Code 200: Success
```javascript
{
    meta: {
        status: true
    },
    data: {
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
        },
        downloadLink: "https://integritty-gateway.s3.amazonaws.com/assets/asset1234/software-kit.zip?aws-security-credential-auto-added-here"
    }
}
```

`GET /assets/{asset}/download`
: This will return the download link url for a particular asset
> Path params:
> `asset: <string> *Required*`
> Example: `asset1234`. This will find this device in the database

### Response Body
* Code 200: Success
```javascript
{
    meta: {
        status: true
    },
    data: "https://integritty-gateway.s3.amazonaws.com/assets/asset1234/software-kit.zip?aws-security-credential-auto-added-here"
}
```

`GET /assets/{asset}/history`
: This will return history of this particular device
> Path params:
> `asset: <string> *Required*`
> Example: `asset1234`. This will find this device in the history table

### Response Body
* Code 200: Success
```javascript
{
    meta: {
      status: true
    },
    data: [{
      classification: "srn:integritty:asset:history",
      artifact: "asset1234",
      start: 1557510625580,
      end: 15575106255900,
      customer: "3a12f810-194b-4aff-bdeb-abcdefghijkl",
      region: "Region",
      site: "Site",
      active: true,
      createdAt: 1557510625580,
      createdBy: "3a12f810-194b-4aff-bdeb-abcdefghijkl"
    }]
}
```

`POST /assets`
: Creates a new artifact in the database with the information provided
> Request Body params:
>  * `name: <string> *Required*`
> Example: `asset1234`. This is the asset artifact id.
> * `technology: <string> *Required*`
> Example: `power-generator`. This is the asset technology type.
> * `device: <string> *Required*`
> Example: `power-generator`. This is the asset device type.
> * `address: <string> *Required*`
> Example: `192.1.1.1`. This is the ip address of the device.
> * `interval: <number> *Not Required*`
> Example: `600000`. This is the interval that device has been up.

### Request Body
```javascript
{
  name: "asset1234",
  technology: "power-generator",
  device: "superpower-generator",
  address: "192.1.1.1",
  interval: "600000",
}
```

`POST /assets/{asset}/history`
: This will create in the database information about the asset history, as well as update any information
about the asset if changed. If the asset was reassigned, then we have to update the current asset in the history table to no longer be active. This will also create an item in the history with the asset information.

> Path params:
> `asset: <string> *Required*`
> Example: `asset1234`. This will find the correct device in the database

> Request Body params:
>  * `site: <string> *Required*`
> Example: `Sitesomething`. This is the asset artifact id.
> * `start: <number> *Required*`
> Example: `power-generator`. This is the asset technology type.
> * `end: <number> *Required*`
> Example: `superdevice-generator`. This is the asset device type that tells the software which device type to connect to.
> * `reassign: <boolean> *Not Required*`
> Example: `true` If this is false, we have to update the current asset in the database to no longer be active and update the time it is has been updated

### Request Body
```javascript
{
  site: "site",
  start: 1557510625580
  end: 1557510625580
  reassign: false
}
```

### Response Body
* Code 200: Success
```javascript
{
  metadata: {
    status: true
  },
  message: "Successfully Updated!"
}
```

`PUT /asset/{asset}``
: Update an existing asset with the new location, and whether the device is active.
> Request Body Params:
> `active: <boolean> *Required*`
> Example: `true`. This will update the database whether the device is active or not.
> `lng: <number> *Not Required*`
> This will update the the database with the new location
> `lat: <number> *Not Required*`
> This will update the the database with the new location

### Request Body
```javascript
{
  active: true,
  lat: "32.984138",
  lng: "-96.754250"
}
```

### Response Body
* Code 200: Success
```javascript
{
  metadata: {
    status: true
  },
  data: {
    active: true,
    location: {
      lat: "32.984138",
      lng: "-96.754250"
    }
  }
}
```
