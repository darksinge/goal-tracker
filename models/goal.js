import moment from 'moment'
import randomstring from 'randomstring'
import ImmutableValue from './immutable-value'

export default class GoalModel {
  constructor({ title, text, purpose, deadline, id } = {}) {
    this.title = title || ''
    this.text = text || ''
    this.purpose = purpose || ''
    this.done = false
    this._deadline = moment(deadline)
    this._immutableId = new ImmutableValue(id || randomstring.generate(7))
  }

  get id() {
    return this._immutableId.value
  }

  get deadline() {
    return this._deadline.format('YYYY-MM-DD')
  }

  set deadline(value) {
    this._deadline = moment(value)
  }
}
