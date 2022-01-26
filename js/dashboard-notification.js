//tab

const open = document.getElementById('open');
const closed = document.getElementById('closed');
const openBtn = document.querySelector('.switch-left__btn');
const closedBtn = document.querySelector('.switch-left__on');
const input = document.querySelectorAll('input[type=radio]');


for (var i=0; i<input.length; i++) {
    input[i].addEventListener('click', (event) => {
        event.preventDefault();
        if (closed.checked) {
      openBtn.style = `background: transparent; box-shadow: none; color: #B7C1CB; font-weight: normal;`;
      closedBtn.style = `background: linear-gradient(183.6deg, #F1FAFF 25.58%, #E9F1F8 66.56%); box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.43),
        8px 8px 12px #CAD2D9; 
        font-weight: bold;
        font-size: 18px;
        line-height: 150%;
        color: #2B2B2B;`;
    } else if (open.checked) {
      openBtn.style = `background: linear-gradient(183.6deg, #F1FAFF 25.58%, #E9F1F8 66.56%); box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.43),
        8px 8px 12px #CAD2D9; 
        font-weight: bold;
        font-size: 18px;
        line-height: 150%;
        color: #2B2B2B;`;
      closedBtn.style = `background: transparent; box-shadow: none; color: #B7C1CB; font-weight: normal;`;
    };
    })
};

//// select

const openSelectBtn = document.querySelector('.select-right__btn');
const selectBlock = document.querySelector('.select-right__box-select');
const selectArrow = document.getElementById('select-arrow');


openSelectBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if(!selectBlock.classList.toggle('select-right__box-select')) {
        selectBlock.classList.add('box-select__show');
        selectArrow.style = `transform: rotate(135deg); margin: 10px 20px 0px 0px;`;
    } else {
        selectBlock.classList.remove('box-select__show');
        selectArrow.style = `transform: rotate(-45deg); margin: 0px 20px 0px 0px;`;
    } 
})

//popup

const popupBtn = document.getElementById('0001');
const popupWindow = document.getElementById('P0001');
const popupClose = document.querySelector('.block-popup__bg');

popupBtn.addEventListener('click', () => {
  popupWindow.style.display = "flex";
})


popupClose.addEventListener('click', () => {
  popupWindow.style.display = "none";
})
