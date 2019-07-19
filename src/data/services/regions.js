import { API } from 'aws-amplify';


export const fetchRegions = () => {
  return [
    {
      classification: "srn:integritty:region",
      artifact: "region-1",
      label: "region1",
      createdAt: 1557510625580,
      createdBy: "3a12f810-194b-4aff-bdeb-de4e9925c344"
    }
  ]
}
