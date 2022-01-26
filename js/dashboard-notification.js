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

////

