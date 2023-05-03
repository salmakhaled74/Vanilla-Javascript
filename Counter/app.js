const decrease = document.querySelector('.btn-primary');
const reset = document.querySelector('.btn-danger');
const increase = document.querySelector('.inc');

const number = document.querySelector('.number');
let num = number.textContent;

function state() {
    if(num > 0){
        number.style.color = 'green';
    }else if(num < 0){
        number.style.color = 'red';
    }else if (num == 0){
        number.style.color = 'black';
    }
};
increase.addEventListener('click', () =>{
    num++;
    state();
    number.textContent = num;
});

reset.addEventListener('click', () =>{
    num = 0;
    state();
    number.textContent = num;
});

decrease.addEventListener('click', ()=>{
    num--;
    state();
    number.textContent = num;
});

