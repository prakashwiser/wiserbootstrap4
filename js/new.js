// function prkash(a,b) {
//     var c = a-b
//     return c

//     console.log(c);
// }
// prkash()
// console.log(prkash(2,5));

function add(a,b,c) {
    return a+b+c
}
function subtraction(a,b,c) {
    return a-b-c
}
function mul(a,b,c) {
    return a*b*c
}
function divd(a,b,c) {
    return a/b+c
}
function bothvalues(a,b,c) {
    var e = add(a,b,c)
    var f = subtraction(a,b,c)
    var x = mul(a,b,c)
    var d = divd(a,b,c)
    return new Array (e,f,x,d)
// console.log(bothvalues(4,6));
}
console.log(bothvalues(4,5,6));