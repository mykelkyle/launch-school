(function () {
  const _ = function (collection) {
    function objectsEqual(obj1, obj2) {
      for (let prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
          return false;
        }
      }

      return true;
    }

    function hasProperty(obj1, obj2) {
      for (let prop in obj1) {
        if (obj1[prop] === obj2[prop]) return true;
      }

      return false;
    }

    return {
      first() {
        return collection[0];
      },
      last() {
        return collection[collection.length - 1];
      },
      without(...args) {
        return collection.filter((val) => {
          return !args.includes(val);
        });
      },
      lastIndexOf(val) {
        for (let i = collection.length - 1; i > 0; i--) {
          if (collection[i] === val) {
            return i;
          }
        }
      },
      sample(size = 1) {
        if (size === 1) {
          return collection.slice(0, size)[0];
        } else {
          return collection.slice(0, size);
        }
      },
      findWhere(obj) {
        for (let i = 0; i < collection.length; i++) {
          if (objectsEqual(obj, collection[i])) {
            return collection[i];
          }
        }
      },
      where(obj) {
        return collection.filter((currObj) => {
          return hasProperty(currObj, obj);
        });
      },
      pluck(propArg) {
        let propValues = [];
        collection.forEach((obj) => {
          for (let prop in obj) {
            if (prop === propArg) {
              propValues.push(obj[prop]);
            }
          }
        });
        return propValues;
      },
      keys() {
        let props = [];
        for (let prop in collection) {
          if (collection.hasOwnProperty(prop)) {
            props.push(prop);
          }
        }
        return props;
      },
      values() {
        let props = [];
        for (let prop in collection) {
          if (collection.hasOwnProperty(prop)) {
            props.push(collection[prop]);
          }
        }
        return props;
      },
      pick(...props) {
        let newObj = {};
        for (let prop in collection) {
          if (props.includes(prop)) {
            newObj[prop] = collection[prop];
          }
        }
        return newObj;
      },
      omit(...props) {
        let newObj = {};
        for (let prop in collection) {
          if (!props.includes(prop)) {
            newObj[prop] = collection[prop];
          }
        }
        return newObj;
      },
      has(propArg) {
        for (let prop in collection) {
          if (prop === propArg) return true;
        }
        return false;
      },
      isElement(el) {
        return el instanceof Node;
      },
      isArray(el) {
        return toString.call(el) === "[object Array]";
      },
      isObject(el) {
        return typeof el === "function" || typeof el === "object";
      },
      isFunction(el) {
        return typeof el === "function";
      },
      isBoolean(el) {
        return toString.call(el) === "[object Boolean]";
      },
      isString(el) {
        return toString.call(el) === "[object String]";
      },
      isNumber(el) {
        return toString.call(el) === "[object Number]";
      },
    };
  };

  _.range = function (start, stop) {
    let arr = [];

    if (arguments.length === 1) {
      for (let i = 0; i < start; i++) {
        arr.push(i);
      }
    } else {
      for (let i = start; i < stop; i++) {
        arr.push(i);
      }
    }
    return arr;
  };

  _.extend = function (...args) {
    let extendedObj = args.shift();
    args.forEach((obj) => {
      for (let prop in obj) {
        extendedObj[prop] = obj[prop];
      }
    });
    return extendedObj;
  };

  _.isElement = function (el) {
    return el instanceof Node;
  };

  _.isArray = function (el) {
    return toString.call(el) === "[object Array]";
  };

  _.isObject = function (el) {
    return typeof el === "function" || typeof el === "object";
  };

  _.isFunction = function (el) {
    return typeof el === "function";
  };

  _.isBoolean = function (el) {
    return toString.call(el) === "[object Boolean]";
  };

  _.isString = function (el) {
    return toString.call(el) === "[object String]";
  };

  _.isNumber = function (el) {
    return toString.call(el) === "[object Number]";
  };

  globalThis._ = _;
})();
