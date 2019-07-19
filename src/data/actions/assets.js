import * as types from 'data/constants/types';

export function fetchAssets(){
  return {
    type: types.ASSETS_FETCH
  }
}

export function selectAsset(asset){
  return {
    type: types.ASSET_SELECT,
    asset
  }
}
