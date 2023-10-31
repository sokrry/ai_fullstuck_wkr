//函数要注意什么？
//编写一个 函数 返回一个美国座机格式的电话号码(123) 4567-890
//输入是数字数组[1,2,3,4,5,6,7,8,9,0]
//不要急于写功能，先写注释
//大厂，代码的可读性甚至比功能重要一个等级
//不用读代码，看完注释拿来就用
//10w 人 5w+合作
/** 
* @func 返回美国格式的座机号码
*@param {Array} nums{1234567890}
*@return(String)(123)4567-890 
*@author wkr 2023/10/31
*/
// function createPhoneNumber(nums){
//     return "(" + nums[0] + nums[1] + nums[2]
//      + ")" + nums[3] + nums[4] + nums[5]
//       + "-" + nums[6] + nums[7] + nums[8] + nums[9]
// }

// js里的函数还能怎么写？es6+ 语法
// const createPhoneNumber = (nums)=>{}
//let createPhoneNumber // undefined 类型未定义 let 声明了undefined的变量
// 箭头函数 es6 简洁的函数 function 可以省略 代码体只有返回值可以省略return
const createPhoneNumber = (nums)=>{ // 函数表达式来定义一个函数
    return "(" + nums[0] + nums[1] + nums[2]
    + ")" + nums[3] + nums[4] + nums[5]
     + "-" + nums[6] + nums[7] + nums[8] + nums[9]
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

// 还有别的实现方法吗？