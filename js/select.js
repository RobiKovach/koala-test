const chanelsBtn = document.querySelector('.chanels-value')
const chanelsBtnPhone = document.querySelector('.chanels-btn-value')
const chanelsBoxes = document.querySelector('.chanel-list')
const subscribeBtn = document.querySelector('.subscribe-value')
const subscribeBoxes = document.querySelector('.subscribe-list')




function chanelsSelectBtn() {
    if(!chanelsBoxes.classList.toggle('chanel-list')) {
        chanelsBoxes.classList.add('chanel-list-active');
    } else {
        chanelsBoxes.classList.remove('chanel-list-active');
    } 
    
}
chanelsBtn.addEventListener('click', (event) => {
    const e = event.target;
    if (!e.classList.contains('chanels-btn-value')) {
        chanelsSelectBtn()
    } else {
        chanelsSelectBtn()
        
        
    }
});


window.onclick = function(event) {
  if (!event.target.matches('.chanels-value')) {
    if (chanelsBoxes.classList.contains('chanel-list-active')) {
        chanelsBoxes.classList.remove('chanel-list-active');
        chanelsBoxes.classList.add('chanel-list')
    }
  }
  if (!event.target.matches('.subscribe-value')) {
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

