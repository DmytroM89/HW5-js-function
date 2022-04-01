function log(val) {
    console.log(val);
}

log('-------------- # 4 Упрощенный вариант')
function showNums(a, b) {
    if (a > b) {
        return;
    }
    log(a)
    showNums(a + 1, b);
}
showNums(1, 5);

log('-------------- # 4 Усложненный вариант')
function showNumsHard(a, b) {
    log(a);
    if (a < b) {
        a++;
    } else if (a > b) {
        a--;
    } else {
        return;
    }
    showNumsHard(a, b);
}
showNumsHard(1, -1);

log('-------------- # 5 Часы на экране - Первый вариант')
const clock = document.getElementById('clock');
let formatFull = true;
let time = '';

/*function clockInit() {
    const date = new Date();
    let hours = date.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    let seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    //clock.innerHTML = formatFull ? hours + ':' + minutes + ':' + seconds : hours + ':' + minutes; // как вариант
    if (formatFull) {
        time = hours + ':' + minutes + ':' + seconds;
    } else {
        time = hours + ':' + minutes;
    }
    clock.innerHTML = time;
}*/

log('-------------- # 5 Часы на экране - Второй вариант')
/**
 * Что здесь происходит?
 * new Date().toTimeString - получаем время формата '00:07:55 GMT+0300 (Восточная Европа, летнее время)'
 * new Date().toTimeString.split(' ')[0] - разбиваем строку на массив строк и по нулевому индексу получаем время в полном формате
 */
function clockInit() {
    if (formatFull) {
        time = new Date().toTimeString().split(' ')[0];
    } else {
        time = new Date().toTimeString().split(' ')[0].substring(0,5); // то же, что и выше + substring(0,5) обрезаем двоеточие с секундами
    }
    clock.innerHTML = time;
}

setInterval(clockInit, 1000);

// Toggle time format
clock.addEventListener('click', () => {
    formatFull = !formatFull;
    clockInit(); // вызываем ф-цию сразу, чтобы не ждать
});
