import { API } from 'aws-amplify';


export const fetchRegions = () => {
  return API.get('RegionsAPI', '/regions')
    .then(response => {
      return response.data
    })
}
