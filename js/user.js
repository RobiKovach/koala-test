const showBtnSelect = document.querySelector(".show-info__btn");
const showSelectBox = document.querySelector(".select-show");
const historyShowTable = document.querySelector(".history-info__btn");
const showHistoryTable = document.querySelector(".all-history");




showBtnSelect.addEventListener('click', () => {
    if(!showSelectBox.classList.toggle('select-show')) {
        showSelectBox.classList.add('select-show__active');
    } else {
        showSelectBox.classList.remove('select-show__active');
    } 
})

historyShowTable.addEventListener('click', () => {
    if(!showHistoryTable.classList.toggle('all-history')) {
        showHistoryTable.classList.add('all-history__active');
    } else {
        showHistoryTable.classList.remove('all-history__active');
    } 
})