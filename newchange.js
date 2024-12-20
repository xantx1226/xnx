// JavaScript Document
// 轮播图script.js
const images = document.getElementById('carousel-images');
    const dots = document.getElementById('carousel-dots').children;
    let currentIndex = 0;

    function updateCarousel() {
        images.style.transform = `translateX(-${currentIndex * 480}px)`;
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        dots[currentIndex].classList.add('active');
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % 7;
        updateCarousel();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + 7) % 7;
        updateCarousel();
    });

    Array.from(dots).forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // 自动轮播
    setInterval(() => {
        currentIndex = (currentIndex + 1) % 7;
        updateCarousel();
    }, 3000); // 每3秒切换一次
//小轮播图
//小二级菜单
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const indicator = document.getElementById('indicator');
    const submenuContents = document.querySelectorAll('.submenu-content');

    function setActiveMenu(menu) {
        submenuContents.forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(menu).style.display = 'block';
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            this.classList.add('active');

            const menu = this.getAttribute('data-menu');
            setActiveMenu(menu);

            const itemWidth = this.offsetWidth;
            const itemOffsetLeft = this.offsetLeft;

            indicator.style.width = `${itemWidth}px`;
            indicator.style.left = `${itemOffsetLeft}px`;
        });
    });

    // 默认激活第一个菜单项
    menuItems[0].click();
});