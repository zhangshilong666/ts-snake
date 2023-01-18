// ts对象语法
let a: {name: string, [xx: string]: unknown}
a = {name: 's', b: 'fkld'}
// 函数
let c: (a: string) => number

c =  function (b): number {
  return 1 + 2
}
// 可选参数 ?
let fn2: (a: number, b?: number) => number
fn2 = function (a) {
  return a
}
// 数组
let arr: number[]
arr = [1,2,3,1]

let arr2: Array<string>
arr2 = ['a','123']
// 元组
let yuanzu: [string, number]
yuanzu = ['a', 1]