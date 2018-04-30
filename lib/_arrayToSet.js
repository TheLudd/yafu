function _arrayToSet (list) {
  const set = new Set()
  for (let i = 0; i < list.length; i++) {
    set.add(list[i])
  }
  return set
}

export default _arrayToSet
