
// const  a =()=>{
//   console.log('a')
// }
// const  b =()=>{
//   console.log('b')
// }
// c()
// d()
// export {
//   a,b
// }
// import {c,d} from './b.mjs';
console.log("before import b")
import {b} from "./b.mjs"
console.log("b is " + b)
export let a = b+1;