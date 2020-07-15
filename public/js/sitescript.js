const btn = document.querySelectorAll('.btn-number');
const operation = document.querySelector('#operation');
const result = document.querySelector('#result');

const btnEnter =document.querySelector('#btn-enter');
const btnC =document.querySelector('#btn-c');

btn.forEach(element => {
    element.addEventListener('click', function(e){
        operation.innerHTML += e.currentTarget.innerHTML;
        const curChar = e.currentTarget.innerHTML;
        const lastChar = operation.innerHTML.slice(-1);
        if((curChar == '+') || (curChar == '-') || (curChar == '*') || (curChar == '/')) {
            if((lastChar == '+') || (lastChar == '-') || (lastChar == '*') || (lastChar == '/')) {
                operation.innerHTML = operation.innerHTML + curChar;
            }
            else {
                operation.innerHTML += e.currentTarget.innerHTML;
            }
        }
        else {
            // operation.innerHTML += e.currentTarget.innerHTML;
        }
        
    });
});

btnEnter.addEventListener('click', function(e){
    result.innerHTML = eval(operation.innerHTML);
});
btnC.addEventListener('click', function(e){
    operation.innerHTML = "";
    result.innerHTML = "";
});