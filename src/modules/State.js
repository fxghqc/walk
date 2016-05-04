class State {
  contructor (status) {
    this.status = status
  }

  setContext (context) {
    this.context = context
  }
}

const mon = new State('周一')
const tue = new State('周二')
const wed = new State('周三')
const thu = new State('周四')
const fri = new State('周五')

mon.next = () => {
  tue.setContext(this.context)
  return tue
}

tue.next = () => {
  wed.setContext(this.context)
  return wed
}

wed.next = () => {
  thu.setContext(this.context)
  return thu
}

thu.next = () => {
  fri.setContext(this.context)
  return fri
}

fri.next = () => {
  mon.setContext(this.context)
  return mon
}

export { mon, tue, wed, thu, fri }
