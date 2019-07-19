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
        downloadLink: "https://integritty-staging-gateway.s3.amazonaws.com/assets/asset1234/software-kit.zip?AWSAccessKeyId=ASIAWTLKC6E6CVENMA7B&Expires=1558548421&Signature=z%2B%2F6CR6A5pvKqOiXDSbJry0HAFs%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIB%2FYfemIH0RjLgOV9MGI08SmujbBr1eMOjP0nPvAp40pAiEA4e7Z2hV2ypACAL%2BDxsWu%2BEqPn44Dzt7yLBYngpbVti4qogIIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0NTM4Nzg0MTE1ODAiDEVMyVUbXHGdbb6hmyr2AfXUJWAHR5jYV2FUE5DUmg9E58ODaGjZ6gl%2BqNe0fv%2FB9ak3H%2FFoIbMEW23UE41j17i92LLmz6l2wNCK6HAWQC3m%2FlJJ2mgYOJ9GI7w0vEtHS%2FAXyXnKxhppehlkvb8pTC%2BE1GPQI7bjHwHlE07V45J8H1tgHWnVHg9WqA%2BUS8N1WBm5XMUmh22ZbGdMO3xF2RlBnevkRwPaitI55Fm2UCx8ACHweZePxxQyF%2B1jJaB%2FGiHN1%2F5OH%2FbwZFM7A%2BXNkQ59y1fTdaSc%2BeC7%2BH2SuO6b4onkyZy%2FEVI1E3v1gCEBFje4CQgJFMK0Nel75YgflA%2BH3Ux28DD4gpbnBTq0Ac52hRyjXs6c7moMM6roiYh3GAuzOCp0PsHdfXGqioU4%2F2y2hryawtmPNo1OeKHZpwLtijWRLa7N3xmyjeGp%2F1pgaFn1a6ZJWUUivVHnaWbn3RFq5b%2FgFANg7VTO9lcWTMVwB1t8YPgWHyjYTcbB7kVcZZXgOuE0SRcRfcwYk%2B1e1cfJB0mqfS2PdVw6gh8Ibv4HbddP4P2V3PkuSyyihMkYXOL%2FJOtXPdTU4N%2FbHCC2c0DxRA%3D%3D"
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
    data: "https://integritty-gateway.s3.amazonaws.com/assets/asset1234/software-kit.zip?AWSAccessKeyId=ASIAWTLKC6E6CP573HO5&Expires=1558551468&Signature=EKBL%2BCJlaitWj%2BAzp%2FG00IWS8%2F0%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCKBNXx8dGPtdq%2FExyHbY9wK2jRXGQLU3xZwYqsg2XswQIgThZkNoeLEEidoI3lgVwOP%2BOs%2F9vRWbagZaQ2gH5ikZkqpwIIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0NTM4Nzg0MTE1ODAiDKHlud%2B4l%2BDqh%2BrbAir7AZJr0pFSJTNkrKAvwDNUii0us1cxLwqEXBon1fggqfcs9mugc6YC9fJpXbK0hb1sxOSdKJXMOPjRCGCDDnjw%2FGH3aPJ8i48j8StSAsqiE69ISeUMuQYF1GM7UWVEDyAdQxVMxOLkRvIJ3NSXgu13Lw5S%2FiZF7HaCC8E%2BDq0CVrVgv2HdkNz3kO6qCzuLEOP4T0nnW6%2FCtMWXVcrjOQ%2FQmtUESfX9EXnzjjmhhA1BlNA5%2B26lM0VE3LemXwxAHI42ec2D1%2FsGv9tuEwshUwLvDvixZO12EeRsz8xEVYrfnGv0oA4SWm8soIoRNVzQZf6WcEvXkSjmVDpRvzzyMN%2BalucFOrQBinOgVNz0V%2B6NiE1csLWTwyuyEjpu2BTBicljrMgFUkUnlz7EFGqVhbYUBrYZPnVdOEdf8epoFVW0HFub2O8i%2FD8E92IpOJYynP9TX%2FA8YXxGWnI%2BXz6FTZiphkcB1Iuz%2BpTtQgoOldIXoiGz9Sdu5abvOUKgRc2c5KlGUpfkE2uQ3l3CW4c79fnbIZaRTaF6Qh5ywl6ZTpRenQuc%2FoSw9K1szdTb1FkQGX77VIrZEiic2qyY"
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
