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

log('-------------- # 5 Часы на экране')
function clockInit() {
    const date = new Date();
    let hours = date.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    document.getElementById('hour').innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    document.getElementById('min').innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById('sec').innerHTML = seconds;
}

setInterval(clockInit, 1000);

// Часы Toggle - “full/short” format
function changeFormat() {
    document.getElementById('clock').classList.toggle('short');
}
