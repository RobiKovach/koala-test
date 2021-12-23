const chanelsBtn = document.querySelector('.chanels-fill')
const chanelsBtnBox = document.querySelector('.chanels-value')
const chanelsBoxes = document.querySelector('.chanel-list')
const subscribeBtn = document.querySelector('.subscribe-fill')
const subscribeBtnValue = document.querySelector('.chanels-btn-value')
const subscribeBoxes = document.querySelector('.subscribe-list')




function chanelsSelectBtn() {
    if(!chanelsBoxes.classList.toggle('chanel-list')) {
        chanelsBoxes.classList.add('chanel-list-active');
    } else {
        chanelsBoxes.classList.remove('chanel-list-active');
    }
}
chanelsBtn.addEventListener('click', chanelsSelectBtn);
subscribeBtnValue.addEventListener('click', () => {
    if(!chanelsBoxes.classList.toggle('chanel-list')) {
        chanelsBoxes.classList.add('chanel-list-active');
    } else {
        chanelsBoxes.classList.remove('chanel-list-active');
    }
});

window.onclick = function(event) {
  if (!event.target.matches('.chanels-fill')) {
    if (chanelsBoxes.classList.contains('chanel-list-active')) {
        chanelsBoxes.classList.remove('chanel-list-active');
        chanelsBoxes.classList.add('chanel-list')
    }
  }
  if (!event.target.matches('.subscribe-fill')) {
    if (subscribeBoxes.classList.contains('subscribe-list-active')) {
        subscribeBoxes.classList.remove('subscribe-list-active');
        subscribeBoxes.classList.add('subscribe-list')
    }
  }
};

subscribeBtn.addEventListener('click', (event) => {
    if(!subscribeBoxes.classList.toggle('subscribe-list')) {
        subscribeBoxes.classList.add('subscribe-list-active');
    } else {
        subscribeBoxes.classList.remove('subscribe-list-active');
    }
});

