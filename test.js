const test = require('tape')
const objectHash = require('./')

test('should output the same hash no matter order of keys', function (t) {
  t.plan(1)
  var obj1 = {
    a: 2,
    b: 4,
    c: {k: 1, d: 3, m: 'string'},
    f: 0.1111111111
  }
  var obj2 = {
    a: 2,
    f: 0.1111111111,
    c: {m: 'string', k: 1, d: 3},
    b: 4
  }

  t.assert(objectHash.hex(obj1) === objectHash.hex(obj2))
})
test('should handle cycles', function (t) {
  t.plan(1)
  var obj1 = {
    a: 2,
    b: 4,
    c: {k: 1, d: 3, m: 'string'},
    f: 0.1111111111
  }
  var obj2 = {
    a: 2,
    f: 0.1111111111,
    c: {m: 'string', k: 1, d: 3},
    b: 4
  }
  obj2.c.m = obj2
  obj1.c.m = obj1
  t.assert(objectHash.hex(obj1) === objectHash.hex(obj2))
})

test('should output the same hash with a nested cycle', function (t) {
  t.plan(1)
  var obj1 = {
    a: 2,
    b: 4,
    c: {k: 1, d: 3, m: 'string'},
    f: 0.1111111111
  }
  var obj2 = {
    a: 2,
    f: 0.1111111111,
    c: {m: 'string', k: 1, d: 3},
    b: 4
  }
  obj2.c.m = obj2
  obj1.c.m = obj1
  t.assert(objectHash.hex(obj1) === objectHash.hex(obj2))
})

test('should output a different hash for two different objects', function (t) {
  t.plan(1)
  var obj1 = {
    a: 2,
    b: 4,
    c: {k: 1, d: 3, m: 'string'},
    f: 0.1111111111
  }
  var obj2 = {
    a: 2,
    c: {m: 'string', k: 1, d: 3},
    b: 4
  }
  obj2.c.m = obj2
  obj1.c.m = obj1
  t.assert(objectHash.hex(obj1) !== objectHash.hex(obj2))
})
