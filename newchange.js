// JavaScript Document
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('loginModal');
    const loginTrigger = document.getElementById('loginTrigger');
    const closeModal = document.querySelector('.close');
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    // 打开登录弹窗
    loginTrigger.onclick = function () {
        modal.style.display = 'block';
    };

    // 关闭登录弹窗
    closeModal.onclick = function () {
        modal.style.display = 'none';
    };

    // 切换到注册表单
    registerLink.onclick = function () {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    };

    // 切换回登录表单
    loginLink.onclick = function () {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    };

    // 实现弹窗拖动功能
    let isMouseDown = false;
    let offset = { x: 0, y: 0 };

    modal.addEventListener('mousedown', function (e) {
        isMouseDown = true;
        offset = {
 x: modal.offsetLeft - e.clientX,
 y: modal.offsetTop - e.clientY
        };
    });

    document.addEventListener('mouseup', function () {
        isMouseDown = false;
    });

    document.addEventListener('mousemove', function (e) {
        if (isMouseDown) {
 modal.style.left = e.clientX + offset.x + 'px';
 modal.style.top = e.clientY + offset.y + 'px';
        }
    });
});


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// 创建指示器
const indicatorsContainer = document.getElementById('indicators');
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    if (i === 0) indicator.classList.add('active');
    indicatorsContainer.appendChild(indicator);
}
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    const carouselImages = document.getElementById('carousel-images');
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;
    carouselImages.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    indicators.forEach((indicator, idx) => {
        indicator.classList.toggle('active', idx === slideIndex);
    });
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

// 自动播放
setInterval(() => {
    moveSlide(1);
}, 3000); // 每3秒切换一次