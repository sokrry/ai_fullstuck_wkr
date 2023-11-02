//递归
//自顶而下
//每个问题都相同
//推出条件
function climStairs(n) {
    if(n===1) return 1;
    if(n===2) return 2;
    return climStairs(n-1)+climStairs(n-2);
}
console.log(climStairs(10))