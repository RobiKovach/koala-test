const moderatorBtn = document.querySelector('.btn-moderator')
const moderatorCloseBtn = document.querySelector('.close-btn-popup')
const moderatorWindow = document.querySelector('.moderator-window')

function openModeratorWindow() {
    if(!moderatorWindow.classList.toggle('moderator-window')){
        moderatorWindow.classList.add('moderator-active');
    } else {
        moderatorWindow.classList.remove('moderator-active')
    }
}
moderatorBtn.addEventListener('click', openModeratorWindow);

moderatorCloseBtn.addEventListener('click', () => {
    if(!moderatorWindow.classList.toggle('moderator-window')){
        moderatorWindow.classList.add('moderator-active');
    } else {
        moderatorWindow.classList.remove('moderator-active')
    }
})

window.onclick = function(event) {
  if (!event.target.matches('.moderator-active')) {
    if (moderatorWindow.classList.contains('moderator-window')) {
        moderatorWindow.classList.remove('moderator-window');
        moderatorWindow.classList.add('moderator-window')
    }
  }
};
