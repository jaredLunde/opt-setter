import setDefinedOpt from './setDefinedOpt'


export default (obj, opt, optNames, throws = true) => {
  if (optNames !== void 0 && optNames !== null) {
    const newObj = {}

    for (let name of optNames) {
      newObj[name] = undefined
    }

    setDefinedOpt(newObj, opt, throws)
    Object.assign(obj, newObj)
  } else {
    Object.assign(obj, opt)
  }
}
