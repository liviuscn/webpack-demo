import "./helpers";
import "./more-helpers"; // more-helpers is also 40kb in size
import context from "./context";
import c from "./context";
export default function (params) {
    context.set('bbb', '111111111111')
    context.set('ccc', '222222222222')
    let obj = context.get()
    let cc = c.get()
    console.log(obj, cc)

    console.log('b.js')
}