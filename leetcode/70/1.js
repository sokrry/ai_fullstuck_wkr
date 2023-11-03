//递归
//自顶而下
//每个问题都相同
//推出条件
function climbStairs(n) {
    if(n===1) return 1;
    if(n===2) return 2;
    return climbStairs(n-1)+climbStairs(n-2);
}
console.log(climbStairs(10))

     f7
     f8
     f9
     f10