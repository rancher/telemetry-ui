import Constants from './constants';

let GraphUtil = {
  constructMap(data) {
    let keys = Object.keys(data);
    let tmp = [];
    let graphColors = Constants.graphColors;

    keys.forEach((key, idx) => {
      tmp.push({
        value: data[key],
        color: graphColors[idx][0],
        highlight: graphColors[idx][1],
        label: key
      })
    });

    return tmp;
  },

  parseLineData(dataset, label, subKey) {
    let data = [];
    let keys = Object.keys(dataset);

    keys.forEach((cv) => {
      data.push({name: cv, value: dataset[cv][subKey]});
    });

    return data;
  },

  parsePieData(dataset, map) {
    let out = map;
    let keys = Object.keys(dataset);

    keys.forEach((orch) => {
      out[this.getIndex(orch, out, 'label')].value = dataset[orch];
    });

    return out;
  },

  getIndex: function(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i][prop] === value) {
          return i;
      }
    }
    return -1; //to handle the case where the value doesn't exist
  }

}

export default GraphUtil;
