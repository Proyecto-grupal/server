const store = require('./store')

const getAll = () => {
  return store.getAll()
}

const getBest = (qty) => {
  return store
    .getAll()
    .slice()
    .sort((b, a) => a.points - b.points)
    .slice(0, qty)
}

module.exports = {
  getAll,
  getBest
}
