const names = require('./2-names');
// const { john, peter } = require('./2-names')
const sayHi = require('./3.utils');
const data = require('./4-alternative-flavor')
console.log(data)

sayHi('susan')

// const { john, peter } = names
sayHi(names.john)
sayHi(names.peter)

require('./5-mid-grenade')