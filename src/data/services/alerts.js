import { API } from 'aws-amplify';

export const fetchAlertsService = () => {
  return API.get('AlertsAPI', '/alerts', {
    "queryStringParameters": {
      "filter": "active",
      "audit": true
    }
  })
    .then(response => response.data)
}

export const clearAlertService = (alert) => {
  return API.put('AlertsAPI', `/alerts/${alert}`, {
    "body": {
      "active": false
    }
  })
}
