# Metrics API
: This API pertains to the metrics for your assets. They can be visualized through charts. Data is available in JSON.

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
`GET /metrics`
: This will return all measurements. This includes an object of metadata and an array of data metrics with the including information: measurement type, unit, asset artifact, chart data to display chart, and measurement limits.
> Params: None

### Response Body
* Code 200: Success
```javascript
{
  "meta": {
    "count": 0,
    "status": true,
    "params": "string"
  },
  "data": [
    {
      "unit": "V",
      "measure": "battery_voltage",
      "artifact": "asset1234:latest:battery_voltage:1557763079605",
      "chart": {
        "colorrange": {
          "color": [
            {
              "minvalue": 0,
              "maxvalue": 50,
              "code": "#8e0000"
            },
            {
              "minvalue": 50,
              "maxvalue": 75,
              "code": "#f2c500"
            },
            {
              "minvalue": 75,
              "maxvalue": 100,
              "code": "#1aaf5d"
            }
          ]
        },
        "chart": {
          "ledGap": 1,
          "captionAlignment": "center",
          "upperlimitdisplay": "Max",
          "caption": "Battery Voltage",
          "lowerlimitdisplay": "Min",
          "lowerlimit": 0,
          "ledSize": 5,
          "tickMarkDistance": "30",
          "bgAlpha": "0",
          "origh": "300",
          "numbersuffix": "V",
          "alignCaptionWithCanvas": "1",
          "theme": "fusion",
          "upperlimit": 100
        },
        "value": "30"
      },
      "presentation": "vled",
      "label": "Battery Voltage",
      "result": "30",
      "asset": "asset1234",
      "stops": {
        "warning": 50,
        "min": 0,
        "critical": 75,
        "max": 100
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

`GET /metrics/{metric}`
: This will return metric details of a particular measurement
> Path params:
> `metric: <string> *Required*`
> Example: `asset4321%3latest%3engine_load%31557499779055`. This returns measurements and information on a specific metric.

### Response Body
* Code 200: Success
```javascript
{
  meta: {
    status: true
  },
  data: {
    artifact: " asset1234:latest:engine_load:1557499779055",
    asset: "asset1234",
    classification: "srn:integritty:metric",
    createdAt: 1557499779055,
    createdBy: "d584c4f-2116-45c2-aee-34-add148dac04a",
    label: "Engine Load",
    measure: "engine_load",
    method: "latest\"",
    presentation: "hlineargauge",
    range: 30000,
    stops: {
      critical: 80,
      max: 100,
      min: 0,
      warning: 65
    },
    unit: "%"
  }
}
```

`POST /metrics`
: Creates a new metric to the list of metrics. This will post to the table with the requested data, when it was created, and

### Request Body
```javascript
{
  asset: "asset1234",
  label: "Engine Load",
  measure: "engine_load",
  method: "latest",
  unit: "%",
  range: 30000,
  presentation: "engine_load",
  min: 2000,
  max: 30000
}
```

`PUT /metrics/{metric}`
: Update an existing metric with a put request. Users are able to change the range of the graph, the label for the metric and the unit displayed. In the database this will update these attributes as well as update when it was updated and by whom.
> Path params:
> `metric: <string> *Required*`
> Example: `asset4321%3latest%3engine_load%31557499779055`. This parameter will be used to find the artifact in the database to update.

### Request Body
```javascript
{
  label: "Engine Load",
  unit: "%",
  range: 30000
}
```

### Response Body
* Code 200: Success
```javascript
{
  meta: {
    status: true
  },
  data: {
    label: "Engine Load",
    unit: "%",
    range: 30000,
    updatedAt: 1557499776107
    updatedBy: "3a12f810-194b-4aff-bdeb-de4e9925c344"
  }
}
```
