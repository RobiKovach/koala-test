const activeNoticeBtn = document.querySelector('.actions-header__notice')
const activeSettingsBtn = document.querySelector('.actions-header__settings')
const activeExitBtn = document.querySelector('.actions-header__exit')


activeNoticeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    activeNoticeBtn.classList.toggle('active-notice');
})

activeSettingsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    activeSettingsBtn.classList.toggle('active-settings');
})

activeExitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    activeExitBtn.classList.toggle('active-exit');
})