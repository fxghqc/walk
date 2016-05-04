class State {
  constructor (status, index) {
    this.status = status
    this.index = index
  }

  setContext (context) {
    this.context = context
  }
}

const mon = new State('周一', 1)
const tue = new State('周二', 2)
const wed = new State('周三', 3)
const thu = new State('周四', 4)
const fri = new State('周五', 5)

mon.next = function () {
  tue.setContext(this.context)
  return tue
}

tue.next = function () {
  wed.setContext(this.context)
  return wed
}

wed.next = function () {
  thu.setContext(this.context)
  return thu
}

thu.next = function () {
  fri.setContext(this.context)
  return fri
}

fri.next = function () {
  mon.setContext(this.context)
  return mon
}

export { mon, tue, wed, thu, fri }
