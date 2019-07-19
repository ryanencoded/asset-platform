import { API } from 'aws-amplify'
import { persistor } from 'data/services/global'


export const fetchUserServicesService = () => {
  return API.get('TypesAPI', '/types/services')
    .then(response => {
      return response.data
    })
}

export const fetchActionsService = (service) => {
  if (service !== ''){
    return API.get('TypesAPI', '/types/actions', {
      "queryStringParameters": {
        "service": service
      }
    }).then(response => {
      return response.data
    })
  }
  return []
}

export const fetchUsersService = () => {
  return [
    {
      username: "hpedi",
      status: true,
      userId: "3a12f810-194b-4aff-bdeb-de4e9925c344",
      name: "Halsey Pedi",
      phone_number: "+18325551234",
      email: "halseypedi@email.com",
      createdAt: 1557510625580,
      updatedAt: 1557510625930
    }
  ]
}

export const fetchSelectedPermissionsService = ({ user }) => {
  return API.get('IAMAPI', '/permissions', {
    "queryStringParameters": {
      user: user.userId
    }
  }).then(response => {
    return response.data
  })
}

export const savePermissionsService = (requestBody) => {
  //if nothing in resources, delete from database
  if (requestBody.resources.length < 1){
    return API.del('IAMAPI', '/permissions', {
      "body": {
        user: requestBody.user.userId,
        service: requestBody.service,
        action: requestBody.action
      }
    }).then(response => response.data)
  }
  else {
    return API.post('IAMAPI', '/permissions', {
      "body": {
        user: requestBody.user.userId,
        service: requestBody.service,
        action: requestBody.action,
        resources: requestBody.resources
      }
    }).then(response => response.data)
  }
}
