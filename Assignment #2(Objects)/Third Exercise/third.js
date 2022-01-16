//functionebshi chasmulia scopebi rom ar gadaikvetos,
//funqciebi arafers abrunebs tavad garda map-isa radgan testebi ar momifiqrebia
//mxolod pollyfillebi weria shignit

function mapPolyfill() {
  const users = [1, 2, 3, 4, 5];
  function addIndex(num, i) {
    return [num + i];
  }
  Array.prototype.polyMap = function (callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this));
    }
    return arr;
  };
  return users.polyMap(addIndex);
}

function filterPolyfill() {
  Array.prototype.polyFilter = function (callback, context) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) {
        arr.push(this[i]);
      }
    }
    return arr;
  };
}

function reducePolyfill() {
  Array.prototype.reducePoly = function (callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;

    for (let i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this);
      } else {
        accumulator = this[i];
      }
    }
    return accumulator;
  };
}

function everyPolyfill() {
  Array.prototype.polyEvery = function (callback, context) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) {
        arr.push(this[i]);
      }
    }
    return arr.length === this.length ? true : false;
  };
}
