//LOGIC SECTION

function winning(n) {
    const u = n.toString().split('').reduce(((ac,cv) => ac + Math.pow(cv,2)), 0);
    if (u === 1) return true;
    if (u === 4) return false;
    else return winning(u);
}

const generator = (lose_nums, win_nums) => {
    let randomNumber;
    const all_nums = [...lose_nums, ...win_nums];
    if (all_nums.length == 20) return displayNums(all_nums.sort());

    if (!randomNumber || all_nums.contains(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 100000000);
    }

    if (winning(randomNumber) && win_nums.length < 3) {
        win_nums.push([randomNumber, 'win']);
    } else if (!winning(randomNumber) && lose_nums.length < 17) {
        lose_nums.push([randomNumber, 'lose']);
    }
    return generator(lose_nums, win_nums);
};


//DOM SECTION
const gen_button=document.querySelector('.generator');
const check_button=document.querySelector('.checker');
const numbers_show=document.querySelector('.all-numbers-container');
const status_highlight=document.querySelector('.status-highlight');  

gen_button.addEventListener('click',()=>{
    generator([], []);
    check_button.removeAttribute('disabled');
    status_highlight.style.display='none';

    })
const displayNums=(numbers)=>{
    const template = numbers.map(n => `<div  class="${n[1]}"><span >${n[0]}</span></div>`).join('');
    numbers_show.innerHTML = template;
}
check_button.addEventListener('click',()=>{
    const win_status=document.querySelectorAll('.win');
    win_status.forEach((lose)=>{lose.style.backgroundColor='green'})
    status_highlight.style.display='block';
})


