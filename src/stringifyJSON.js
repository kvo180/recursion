// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (obj === null) {
    return 'null';
  } else if (Array.isArray(obj)) {
    var arrStr = [];
    if (obj.length === 0 || obj[0] === undefined) {
      return '[]';
    } else {
      for (var i = 0; i < obj.length; i++) {
        arrStr.push(stringifyJSON(obj[i]));
      }
      return '[' + arrStr + ']';
    }
  } else if (typeof obj === 'object') {
    var objStr = [];
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      for (var key in obj) {
      	if (obj[key] === undefined || typeof obj[key] === 'function') {
      		return '{}';
      	}
        objStr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
      return '{' + objStr + '}';
    }
  }  else {
    return String(obj);
  }
}
