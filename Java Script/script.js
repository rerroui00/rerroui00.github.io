function outNum(num, elem) {
    const time = 5000;
    const step = 1;
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num){
            clearInterval(interval);
        }
        l.innerHTML = n;
    },
    t);
}

function outNum2(num, elem) {
    const time = 15000;
    const step = 0;
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num){
            clearInterval(interval);
        }
        l.innerHTML = n;
    },
    t);
}

function outNum2(num, elem) {
    const time = 15000;
    const step = 0;
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num){
            clearInterval(interval);
        }
        l.innerHTML = n;
    },
    t);
}

function outNum2(num, elem) {
    const time = 15000;
    const step = 0;
    let l = document.querySelector('#' + elem);
    n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num){
            clearInterval(interval);
        }
        l.innerHTML = n;
    },
    t);
}

let flag = false;

$(document).ready(function() {
    $(window).on('scroll', () => {
       let blockPosition = $('.green-block').offset().top;  
       let windowScrollPosition = $(window).scrollTop();
       console.log( (blockPosition - window.innerHeight + 214) + " |" + windowScrollPosition);
     
      if( blockPosition - window.innerHeight + 214  < windowScrollPosition ) {
          if (!flag){
            outNum(255, 'out-1');
            outNum2(50, 'out-2');
            outNum2(11, 'out-3');
            outNum2(39, 'out-4');
          }

          flag = true;
          
      }
    });
  });