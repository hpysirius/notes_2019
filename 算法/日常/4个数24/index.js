var opArr =new Array("+", "-", "*","/"); //运算符数组

/*
参数说明：
1、numArr：输入的四个数字
2、numLen：输入的数字个数
3、targetNum：输入四个数字后要计算出的结果(24,etc)
*/
function computeNum(numArr, numLen, targetNum) {
    for (var i = 0; i < numLen; i++) {
        for (var j = i + 1; j < numLen; j++) {
            var numij = [numArr[i], numArr[j]];
            numArr[j] = numArr[numLen - 1];
            for (var k = 0; k < opArr.length; k++) {
                numArr[i] = '(' + numij[k % 2] + opArr[k] + numij[(!(k % 2) * 1)] + ')'; //构建算术表达式，然后利用eval函数计算结果
                if (computeNum(numArr, numLen - 1, targetNum)) {
                    return true;
                }
            }
            numArr[i] = numij[0];
            numArr[j] = numij[1];
        }
    }
    var tmpStr=numArr[0];
    return (numLen == 1) && (eval( numArr[0]) == targetNum); //通过js的eval函数直接算出预期结果targetNum
}
const res = computeNum([2, 4, 3, 1], 4, 24)
console.log(res);