//tab

const open = document.getElementById('open');
const closed = document.getElementById('closed');
const openBtn = document.querySelector('.switch-left__btn');
const closedBtn = document.querySelector('.switch-left__on');
const input = document.querySelectorAll('input[type=radio]');
const openedBlocks = document.querySelectorAll('.item-box-open');
const closedBlocks = document.querySelectorAll('.item-box-closed');
const headOnClose = document.querySelector('.head-close');
const columnOnClose = document.querySelector('.column-close');
const headTable = document.querySelector('.head-table');
const columnTable = document.querySelectorAll('.column-table');
const answerOpen = document.querySelectorAll('.answer-block-open');
const answerClose = document.querySelectorAll('.answer-block-close');
const popComentBtn = document.querySelectorAll('.action-comment__btn');


for (var i=0; i<input.length; i++) {
    input[i].addEventListener('click', (event) => {
        event.preventDefault();
        if (closed.checked) {

      openBtn.style = `background: transparent; box-shadow: none; color: #B7C1CB; font-weight: normal;`;
      closedBtn.style = `background: linear-gradient(183.6deg, #F1FAFF 25.58%, #E9F1F8 66.56%); 
        box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.43),
        8px 8px 12px #CAD2D9; 
        font-weight: bold;
        font-size: 18px;
        line-height: 150%;
        color: #2B2B2B;`;


        headTable.classList.add('head-close');
        columnTable.forEach(col => {
          col.classList.add('column-close');
        })

        closedBlocks.forEach(items => {
          items.classList.contains('item-box-closed');
          items.classList.add('item-box-open');
          items.classList.remove('item-box-closed');
        })
        openedBlocks.forEach(items => {
          items.classList.contains('item-box-open');
          items.classList.add('item-box-closed');
          items.classList.remove('item-box-open');
        })

        answerOpen.forEach(answer => {
          answer.style.display = `none`;
        })
        answerClose.forEach(answer => {
          answer.style.display = `flex`;
        })
        popComentBtn.forEach(popComB => {
          popComB.classList.contains('item-box-open');
          popComB.classList.add('item-box-closed');
          popComB.classList.remove('item-box-open');
        })
        
    } else if (open.checked) {
      openBtn.style = `background: linear-gradient(183.6deg, #F1FAFF 25.58%, #E9F1F8 66.56%); box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.43),
        8px 8px 12px #CAD2D9; 
        font-weight: bold;
        font-size: 18px;
        line-height: 150%;
        color: #2B2B2B;`;


        closedBtn.style = `background: transparent; box-shadow: none; color: #B7C1CB; font-weight: normal;`;

        headTable.classList.remove('head-close');
        columnTable.forEach(col => {
          col.classList.remove('column-close');
        })
        
        closedBlocks.forEach(items => {
          items.classList.contains('item-box-open');
          items.classList.add('item-box-closed');
          items.classList.remove('item-box-open');
        })

        openedBlocks.forEach(items => {
          items.classList.contains('item-box-closed');
          items.classList.add('item-box-open');
          items.classList.remove('item-box-closed');
        })

        answerOpen.forEach(answer => {
          answer.style.display = `flex`;
        })
        answerClose.forEach(answer => {
          answer.style.display = `none`;
        })
        popComentBtn.forEach(popComB => {
          popComB.classList.contains('item-box-closed');
          popComB.classList.add('item-box-open');
          popComB.classList.remove('item-box-closed');
        })
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

const popupWindow = document.querySelectorAll('.block-popup');
const popupClose = document.querySelectorAll('.block-popup__bg');
const popupLinks = document.querySelectorAll('.answer');



for(var i = 0; i < popupLinks.length; i++){
  popupLinks[i].addEventListener('click', (e) => {
    popupWindow.forEach(popupW => {
      if(popupW.id  === e.currentTarget.id){
        popupW.style.display = `flex`;
      } else {
        popupW.style.display = `none`;
      }
    })
  });
}

popupClose.forEach(popupBG => {
  popupBG.addEventListener('click', () => {
    popupWindow.forEach(popupW => {
      popupW.style.display = "none";
      
    })
  })
})

//mobile-table
const mobHead = document.querySelectorAll('.head-table__item');
const mobColumn = document.querySelectorAll('.column-table');  
const mobColumnItem = document.querySelectorAll('.column-table__item');



mobColumn.forEach(mobColumn => {

//user
const userTag = document.createElement('div');
userTag.classList.add('user-tag');
const textUser = document.createTextNode('Ник');
mobColumn.childNodes[5].classList.add('user')
mobColumn.childNodes[5].appendChild(userTag);
userTag.appendChild(textUser);


//date-create
const dataCreate = document.createElement('div')
dataCreate.classList.add('date-create-tag');
const textDateCreate = document.createTextNode('Создано');
mobColumn.childNodes[7].classList.add('date-create');
mobColumn.childNodes[7].appendChild(dataCreate);
dataCreate.appendChild(textDateCreate);



//date-closed
const dataClosed = document.createElement('div');
dataClosed.classList.add('date-closed-tag');
const textDateClosed = document.createTextNode('Закрыто');
mobColumn.childNodes[9].classList.add('date-closed');
mobColumn.childNodes[9].appendChild(dataClosed);
dataClosed.appendChild(textDateClosed);

//notice
const notice = document.createElement('div')
notice.classList.add('notice-tag');
const textNotice = document.createTextNode('Уведомление');
mobColumn.childNodes[11].classList.add('notice')
mobColumn.childNodes[11].appendChild(notice);
notice.appendChild(textNotice);

//answer
const answer = document.createElement('div')
answer.classList.add('answer-tag');
const textAnswer = document.createTextNode('Уведомление');
mobColumn.childNodes[13].classList.add('answer-block')
mobColumn.childNodes[13].appendChild(answer);
answer.appendChild(textAnswer);

})


