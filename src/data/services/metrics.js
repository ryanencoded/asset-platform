import { API } from 'aws-amplify';

const fetchMetricsService = (asset) => {
  return API.get('MetricsAPI', '/metrics', {
    "queryStringParameters": {
        "asset": asset
    }
  }).then(response => response.data)
}

const fetchAllMetricsService = () => {
  return API.get('MetricsAPI', '/metrics')
    .then(response => response.data)
}

export {
  fetchMetricsService,
  fetchAllMetricsService
}
