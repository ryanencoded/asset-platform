import { API } from 'aws-amplify';


export const fetchSites = () => {
  return API.get('SitesAPI', '/sites')
    .then(response => {
      return response.data;
    })
}
