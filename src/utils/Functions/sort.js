export function sortData(data, category) {
  return data.sort((a, b) => {
    const first = getProperty(a, category);
    const second = getProperty(b, category);
    let comparison = 0;
    if (first >= second) {
      comparison = 1;
    } else if (first < second) {
      comparison = -1;
    }
    return comparison;
  })
}

export function filterData(data, category) {
  //find selected for that category
  const options = category.options.filter(option => option.selected).map(x => {
    switch (category.artifact) {
      case 'technology':
        return x.artifact
      case 'state':
        return x.rank
      default: return null
    }

  })
  return data.filter(item => {
    return options.includes(getProperty(item, category))
  })
}


const getProperty = (object, category) => {
  var result = null;
  switch(category.artifact) {
    case 'alphabetical':
      return object.artifact
    case 'technology':
    //check each property in object until it matches sort category
    for (var property in object) {
      if (property == category.artifact) {
        return object[property].artifact
      }
      //if property is an object, check inside the object too
      if (object[property] instanceof Object) {
        result = getProperty(object[property], category)
        if (result) {
          break;
        }
      }
    }
      return result
    case 'state':
      for (var property in object) {
        if (property == category.artifact) {
          return object[property].rank ? object[property].rank : 0
        }
        if (object[property] instanceof Object) {
          result = getProperty(object[property], category)
          if (result) {
            break;
          }
        }
      }
    default: return result
  }
}
