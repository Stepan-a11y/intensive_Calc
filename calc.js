let calc = document.getElementById('calc_pole');
let out = document.getElementById('calc_cells_result');

let firstNum = "";
let secondNum = "";
let sign = "";
let finish;
out.textContent = "";

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let signs = ['+', '-', '*', '/']

calc.addEventListener('click', (event) => {
    let key = event.target.textContent;

    if (!event.target.classList.contains('buttons')) return;

    if (event.target.textContent === "C") {
        firstNum = "";
        secondNum = "";
        sign = "";
        out.textContent = "";
    }

    if (event.target.textContent === "Cl") {
        if (secondNum === "") {
            let back = firstNum.split('');
            back.pop();
            let str = back.join('');
            firstNum = str;
            out.textContent = firstNum;
        }else {
            let back = secondNum.split('');
            back.pop();
            let str = back.join('');
            secondNum = str;
            out.textContent = secondNum;
        }
    }

    if (numbers.includes(key)) {
        if (secondNum === "" && sign === "") {
            firstNum += key;
            let res = Number(firstNum);
            if(isNaN(res)){
                firstNum = firstNum.substr(0, firstNum.length-1);
            } else {
                out.textContent = res;
            }    
        } else if (firstNum !== "" && sign !== "" && finish) {
            secondNum = key;
            finish = false;
            out.textContent = secondNum;
        } else {
            secondNum += key;
            let res = Number(secondNum);
            if(isNaN(res)){
                secondNum = secondNum.substr(0, secondNum.length-1);
            } else {
                out.textContent = res;
            }    
        }
    }

    if (signs.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }

    if (key === "=") {
        if (secondNum === "") {
            secondNum = firstNum;
            out.textContent = secondNum
        }
        switch (sign) {
            case "+":
                firstNum = Number(firstNum) + Number(secondNum);
                break;
            case "-":
                firstNum = firstNum - secondNum;
                break;
            case "*":
                firstNum = firstNum * secondNum;
                break;
            case "/":
                firstNum = firstNum / secondNum;
                break;
        }
        
        let outPut;
        if(firstNum === Infinity){
            out.textContent = "Ошибка!"
        } else {
        outPut = Number(firstNum).toFixed(8)
        out.textContent = Number(outPut);
        finish = true;
        }
    }

    if (key === "%") {
        out.textContent = ''
        firstNum = Number(firstNum) / 100;
        let output = Number(firstNum).toFixed(8)
        out.textContent = Number(output);
        console.log(firstNum);
    }
})


