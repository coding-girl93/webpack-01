// import {a,b} from './a.mjs';

// const c =()=>{
//   console.log('c')
// }
// const d = ()=>{
//   console.log('d')
// }
// a()
// b()
// export {
//   d,c
// }
console.log("before import a")
import {a} from "./a.mjs"
console.log("a is " + a)
export let b = a+1;