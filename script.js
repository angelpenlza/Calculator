console.log("start of the program");

//set values
const cl = 0;
let newNum = 0;
let totalNum = 0;
const buttons = document.querySelectorAll("num");
const stdout = document.querySelector("input");
stdout.value = 0;
let nums = [0, 0];
let op;

//clear the screen
document.querySelector("#clear").addEventListener("click", clear);
function clear() {
    stdout.value = 0;
}

//print the number to the screen
function getNum(value) {
    newNum = value;
    if(stdout.value == 0) {
        stdout.value = newNum;
        totalNum = newNum;
    } else  {
        totalNum += newNum;
        stdout.value = totalNum;
    }
}

function operation(operator) {
    nums[0] = totalNum;
    op = operator;
    clear();
    totalNum = 0;
    console.log(nums[0]);
}

function equ() {
    nums[1] = totalNum;

    nums[0] = parseInt(nums[0]);
    nums[1] = parseInt(nums[1]);

    if(op == '+') 
        totalNum = nums[0] + nums[1];
    else if(op == '-')
        totalNum = nums[0] - nums[1];
    else if(op == '*') 
        totalNum = nums[0] * nums[1];
    else if(op == '/')
        totalNum = nums[0] / nums[1];
    
    stdout.value = totalNum;
}


console.log("end of the program");
