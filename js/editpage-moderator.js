//pass

const pass = document.getElementById('password__login');
const eye = document.getElementById('eye');
const linkEye = document.getElementById('link-eye');


function show() {
    pass.setAttribute('type', 'text');
    pass.classList.add('show-pass');
    eye.src = "../img/eye-show.svg";
    eye.classList.add('show-eye');
}

function hide() {
    pass.setAttribute('type', 'password');
    pass.classList.remove('show-pass');
    eye.src = "../img/uil_eye-slash.svg";
    eye.classList.remove('show-eye');
}

var passShow = 0;

linkEye.addEventListener('click', (event) => {
    event.preventDefault();
})

eye.addEventListener("click", function (event) {
    event.preventDefault();
    if (passShow == 0) {
        passShow = 1;
        show();
    } else {
        passShow = 0;
        hide();
    }
}, false);

//paralax

let orange = document.querySelector('.moderator-editpage__orange-row');
let purple = document.querySelector('.moderator-editpage__purle-row');
let orangeSmall = document.querySelector('.moderator-editpage__orangesmall-row');
let piramide = document.querySelector('.moderator-editpage__piramide');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    orange.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    purple.style.transform = 'translate(+' + x * 25 + 'px, -' + y * 25 + 'px)';
    orangeSmall.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    piramide.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
});