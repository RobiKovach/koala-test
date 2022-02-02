//active button
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

//column table verification
const columnTable = document.querySelectorAll('.column-table')

columnTable.forEach(colTable => {
    //approve
    const imgAproove = document.createElement('img');
    imgAproove.src = colTable.children[3].getElementsByTagName('span')[0].getElementsByTagName('img')[0].src;
    colTable.children[2].appendChild(imgAproove);
    //Count Upload
    const CountUploadTag = document.createElement('div');
    CountUploadTag.textContent = 'Count Upload'
    colTable.children[6].appendChild(CountUploadTag)
    //Count date
    const dateTag = document.createElement('div');
    dateTag.textContent = 'Date'
    colTable.children[4].appendChild(dateTag);
    //Count code
    const codeTag = document.createElement('div');
    codeTag.textContent = 'Code';
    colTable.children[5].appendChild(codeTag);
    //comment
    const commentTag = document.createElement('div');
    commentTag.textContent = 'Comment';
    colTable.children[7].appendChild(commentTag);
})
//column table integration
const columnIntegration = document.querySelectorAll('.column-integration__items')

columnIntegration.forEach(colInt => {
    //Channel profile link
    const profileLinkTag = document.createElement('div');
    profileLinkTag.textContent = 'Channel profile link'
    colInt.children[2].appendChild(profileLinkTag);
    //Integration link
    const integrationLinkTag = document.createElement('div');
    integrationLinkTag.textContent = 'Integration link'
    colInt.children[3].appendChild(integrationLinkTag);
    //Data
    const integrationDataTag = document.createElement('div');
    integrationDataTag.textContent = 'Data'
    colInt.children[5].appendChild(integrationDataTag);
    //Approve 
    const integrationAproveImgWrapper = document.createElement('div');
    integrationAproveImgWrapper.classList.add('column-integration__item');
    const integrationAproveImg = document.createElement('img');
    integrationAproveImg.src = colInt.children[4].getElementsByTagName('span')[0].getElementsByTagName('img')[0].src;
    integrationAproveImgWrapper.appendChild(integrationAproveImg)
    colInt.appendChild(integrationAproveImgWrapper);
})

//more-btn
const integrationMoreBtn = document.querySelector('.boxheader-integration__more')
const integrationMoreBox = document.querySelector('.filter-boxheader')

integrationMoreBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (!integrationMoreBtn.classList.toggle('boxheader-integration__active')) {
        integrationMoreBox.style.display = `none`
    } else {
        integrationMoreBox.style.display = `flex`
    }
})

const verificationMoreBtn = document.querySelector('.boxheader-verification__more')
const verificationMoreBox = document.querySelector('.filter-verification')

verificationMoreBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (!verificationMoreBtn.classList.toggle('boxheader-verification__active')) {
        verificationMoreBox.style.display = `none`
    } else {
        verificationMoreBox.style.display = `flex`
    }
})



 


