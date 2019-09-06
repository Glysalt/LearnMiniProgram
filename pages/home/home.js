Page({
  data: {
    name: 'glysalt',
    student: [
      {name: 'kobe', id: '110', age: '18'},
      {name: 'kobe', id: '110', age: '18'},
      {name: 'kobe', id: '110', age: '18'},
      {name: 'kobe', id: '110', age: '18'},
    ],
    counter: 0
  },
  handleBtn() {
    // 1.错误的做法，页面不会刷新
    // this.data.conunter += 1
    // console.log(this.data.counter)

    // 2.this.setData()
    this.setData({
      counter: this.data.counter += 1
    })
  },
  handle() {
    this.setData({
      counter: this.data.counter -= 1
    })
  }
})