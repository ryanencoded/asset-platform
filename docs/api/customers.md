# Sites API
: This API allows users to assign sites to customers as well as retrieve information about sites.

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
`GET /customers`
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
    status: true,
    params: {}
  },
  data: [

  ]
}
```

`GET /customers/{customer}`
: First IAM will check the user logged in to see if they have permissions. And the API will return
the information about the customer requested
> Path params:
> `customer: <string> *Required*`
> Example: `company-x`. This will return information about the customer

### Response Body
* Code 200: Success
```javascript
{
  metadata: {
    status; true
    params: {
      limit: 100
    }
  },
  data: {
    classification: "srn:integritty:customer",
    artifact: "company-x",
    label: "Company X",
    createdAt: 1557510625580,
    createdBy: "3a12f810-194b-4aff-bdeb-de4e9925c344"
  }    
}
```

`POST /customers`
: Users are able to create customers

> Request Body params:
>  * `name: <string> *Required*`
> Example: `Company X`. This is the name of the customer

### Request Body
```javascript
{
  name: "Company X",
}
```

### Response Body
* Code 200: Success
```javascript
{
  metadata: {
    status; true
  },
  data: {
    classification: "srn:integritty:customer",
    artifact: "company-x",
    label: "Company X",
    createdAt: 1557510625580,
    createdBy: "3a12f810-194b-4aff-bdeb-de4e9925c344"
  }    
}
```
