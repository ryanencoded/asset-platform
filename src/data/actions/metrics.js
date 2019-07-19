import * as types from 'data/constants/types';

function fetchMetrics(asset){
  return {
    type: types.METRICS_FETCH,
    asset
  }
}

function selectMetric(metric) {
   let response = {};
  if (Object.keys(metric).length !== 0) {
    response = {
      presentation: metric.presentation,
      label: metric.label,
      reading: metric.result,
      unit: metric.unit,
      chart: metric.chart
    }
  }
  return {
    type: types.METRIC_SELECT,
    metric: response
  }
}

function fetchAllMetrics() {
  return {
    type: types.METRICS_FETCH_ALL
  }
}


export {
  fetchMetrics,
  selectMetric,
  fetchAllMetrics
}
