import { API } from 'aws-amplify';


const fetchAssets = () => {
  return API.get('AssetsAPI', '/assets', {
    "queryStringParameters": {
        "audit": true
    }
  }).then(response => response.data)
}

const fetchAssetService = (asset) => {
  return API.get('AssetsAPI', `/assets/${asset}`)
    .then(response => response.data)
}

export {
  fetchAssets,
  fetchAssetService
}
