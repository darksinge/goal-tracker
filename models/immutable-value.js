export default class ImmutableValue {
  constructor(value) {
    this.__value__ = value
    return new Proxy(this, {
      set(obj, prop, value) {
        if (prop === '__value__') {
          throw new Error(`Cannot set property '__value__' on Immutable object`)
        }
        return Reflect.set(obj, prop, value)
      },
      get(obj, prop) {
        if (prop === 'value') {
          return obj.__value__
        }
        return Reflect.get(obj, prop)
      }
    })
  }
}
