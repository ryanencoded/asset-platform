# IAM API
: This API pertains to users and the permissions that they to resources.

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
`GET /users`
: This will return a list of users and their personal information
> Params: None

### Response Body
* Code 200: Success
```javascript
{
  meta: {
    status: true
  }
}
  data: [
    {
      username: "andiep",
      status: true,
      userId: "3a12f810-194b-4aff-bdeb-de4e9925c344"
      name: "Halsey Pedi",
      phone_number: "+18325551234",
      email: "halseypedi@email.com",
      createdAt: 1557510625580,
      updatedAt: 1557510625930
    }
  ]
}
```

`GET /permissions`
: This will return a list of permissions provided the user. User can be found in the request body, or by getting the logged in user from Cognito and parsing the result.

> Request Body params:
>  * `user: <string> *Not Required*`
> Example: `hpedi`. This will be used to find the user to pull permissions for

### Response Body
* Code 200: Success
```javascript
{
  metadata: {
    status; true
  },
  data: {
   classification: "srn:integritty:iam:permission",
   artifact: "5d584c4f-2116-45c2-ae34-add148dac04a:metric:create",
   resources: ["srn:integritty:metric/*"],
   createdAt: 1557499776107,
   createdBy: "5d584c4f-2116-45c2-ae34-add148dac04a	"
  }    
}
```

`POST /permissions`
: This will add new permissions for a user specified. It will add in the table the artifact (user:<service>:<action>), resources the user has permissions to, when it was created and by whom.

> Request Body params:
>  * `user: <string> *Required*`
> Example: `andiep`. This is the user the permissions will be assigned to
>  * `service: <string> *Required*`
> Example: `metric` This is the service will the user be able to access
>  * `resources: <array> *Required*`
> Example: `["srn:integritty:metric/*"]` This is the resources or list of permissions that the user has
>  * `action: <string> *Required*`
> Example: `create` This is the action they are allowed to do on the service

### Request Body
```javascript
{
  user: "hpedi",
  service: "metric",
  action: "create",
  resources: ["srn:integritty:metric/*"]
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
    user: "hpedi",
    service: "metric",
    action: "create",
    resources: ["srn:integritty:metric/*"]
  }   
}
```

`PUT /permissions`
: This will update the permissions for a particular user for a particular service and action. This will also update when it was updated and by whom.

> Request Body params:
>  * `user: <string> *Required*`
> Example: `andiep`. This is the user the permissions will be assigned to
>  * `service: <string> *Required*`
> Example: `metric` This is the service will the user be able to access
>  * `resources: <array> *Required*`
> Example: `["srn:integritty:metric/*"]` This is the resources or list of permissions that a user has
>  * `action: <string> *Required*`
> Example: `create` This is the action they are allowed to do on the service

### Request Body
```javascript
{
  user: "hpedi",
  service: "metric",
  action: "create",
  resources: ["srn:integritty:metric/*"]
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
    user: "andiep",
    service: "metric",
    action: "create",
    resources: ["srn:integritty:metric/*"]
  }   
}
```

`DELETE /permissions`
: This will delete the permissions for this user who had access to do a specific action to this particular service
from the database table.

> Request Body params:
>  * `user: <string> *Required*`
> Example: `andiep`. This is the user the permissions will be deleted from
>  * `service: <string> *Required*`
> Example: `metric` This is the service that will be removed
>  * `action: <string> *Required*`
> Example: `create` This is the action that will be removed

### Request Body
```javascript
{
  user: "andiep",
  service: "metric",
  action: "create"
}
```

### Response Body
* Code 200: Success
```javascript
{
  metadata: {
    status: true
  },
  data: {}
}
```
