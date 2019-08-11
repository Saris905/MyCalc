let buttons = document.querySelectorAll('button');
let switcher = document.querySelector('#switch');

switcher.addEventListener('click', function() {
    if (switcher.checked) {
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        document.querySelector('.switch-for').style.color = 'var(--nightGold)';
        document.querySelector('input').style.backgroundColor = '#231d1db0';
        document.querySelector('input').style.color = 'var(--nightGold)';
        document.querySelector('.calc').style.backgroundColor = '#5d595966';
        document.querySelector('.calc').style.border = '3px solid #5d595966';
        buttons.forEach(function(item, i) {
            item.classList.add('nightButtons');
        })
    } else {
        document.body.style.backgroundColor = 'var(--backgroundDay)';
        document.querySelector('.switch-for').style.color = '#fff';
        document.querySelector('input').style.backgroundColor = '#fff';
        document.querySelector('input').style.color = '#000';
        document.querySelector('.calc').style.backgroundColor = 'var(--backgroundCalcDay)';
        document.querySelector('.calc').style.border = '3px solid var(--backgroundCalcDay)';
        buttons.forEach(function(item, i) {
            item.classList.remove('nightButtons');
        })
    }
})

// let result = 0;
//
// let switchers = document.querySelectorAll('.switch');
// let textString = document.querySelector('.textString');
// console.log(switchers);
//
// function count() {
//     if (textString.value) {
//         result = +textString.value;
//     }
//
//
//     switchers.forEach(function(item, i) {
//         if (item.checked) {
//             result += +item.value;
//         }
//     })
//
//     console.log(result);
// }



// buttons.forEach(function(item, i) {
//     buttons[i].addEventListener('click', function(){
//         if (item.value <= 9 && item.value >= 0 && item.value !== false ) {
//             result += +item.value;
//             console.log(result);
//         }
//     })
// })

function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = '';
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
    let exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }
}

