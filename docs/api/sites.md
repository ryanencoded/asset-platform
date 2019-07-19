# Customers API
: This API is so users can create and retrieve users information.

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
`GET /sites`
:
> Query params:
> limit: limit the number of results
> customer: customer name
> region: region of site assigned to customer
> offset: offset the results by this number

### Response Body
* Code 200: Success
```javascript
{
  meta: {
    status: true,
    params: {
      limit: null
      customer: null,
      region: null,
    } ,
    count: 1,
    limit: 100
  },
  data: [
    {
      classification: "srn:integritty:site",
      artifact: "paul-jones:region1:site1",
      label: "site-1",
      customer: 'PAUL JONES',
      region: 'REGION 1',
      createdAt: 1557510625580,
      createdBy: "3a12f810-194b-4aff-bdeb-de4e9925c344"
    }
  ]
}
```

`GET /sites/{customer}/{region}/{site}`
: This endpoint will return customer, region, and site in a presentable format

> Path params:
> `customer: <string> *Required*`
> Example: `paul-jones`. This will return information about the customer
>  * `region: <string> *Required*`
> Example: `region1`. This is the region that the site is located at
>  * `site: <string> *Required*`
> Example: `site1`. This is the region that the site is located at

### Response Body
* Code 200: Success
```javascript
{
  metadata: {
    status; true
  },
  data: {
    customer: 'Paul Jones',
    region: 'Region 1',
    site: 'Site 1'
  }    
}
```

`POST /sites/{customer}/{site}`
: Users are able to assign sites to a customer with this endpoint

> Path params:
>  * `customer: <string> *Required*`
> Example: `paul-jones`. This is the name of your customer that you want to assign the site to
>  * `region: <string> *Required*`
> Example: `region1`. This is the region that the site is located at

> Request Body params:
>  * `name: <string> *Required*`
> Example: `site1`. This is the name of the site that is being assigned to the customer

### Request Body
```javascript
{
  name: "site1",
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
    classification: "srn:integritty:site",
    artifact: "paul-jones:region1:site1",
    label: "site-1",
    createdAt: 1557510625580,
    createdBy: "3a12f810-194b-4aff-bdeb-de4e9925c344"
  }    
}
```
