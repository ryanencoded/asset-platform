import { API } from 'aws-amplify';


export const fetchSites = () => {
  return [
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
