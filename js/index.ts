class food{
  // 表示食物的元素
  element: HTMLElement;
  // 构造函数
  constructor () {
    this.element = document.querySelector('.food')
  }
  get X () {
    return this.element.offsetLeft;
  }

  get Y () {
    return this.element.offsetTop;
  }

  change () {
    this.element.style.top = '30px'
    this.element.style.left = '50px'
  }
}
let fo = new food()
fo.change()