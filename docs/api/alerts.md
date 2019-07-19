# Alerts API
: This API pertains to the alerts dealing with assets

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
`GET /alerts`
:
> Query params:
> limit: limit the number of results
> offset: how many to offset the results by
> audit:

### Response Body
* Code 200: Success
```javascript
{
  meta: {
    status: true
  }
}
  data: [

  ]
}
```

`GET /alerts/{alert}`
:



### Response Body
* Code 200: Success
```javascript
{
  metadata: {
    status; true
  },
  data: {
  }    
}
```
