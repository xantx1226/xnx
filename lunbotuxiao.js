const images1 = document.getElementById('carousel-images1');
const dots1 = document.getElementById('carousel-dots1').children;
let currentIndex1 = 0;

function updateCarousel1() {
    images1.style.transform = `translateX(-${currentIndex1 * 300}px)`;
    for (let i = 0; i < dots1.length; i++) {
        dots1[i].classList.remove('active1');
    }
    dots1[currentIndex1].classList.add('active1');
}

document.getElementById('next1').addEventListener('click', () => {
    currentIndex1 = (currentIndex1 + 1) % 4;
    updateCarousel1();
});

document.getElementById('prev1').addEventListener('click', () => {
    currentIndex1 = (currentIndex1 - 1 + 4) % 4;
    updateCarousel1();
});

Array.from(dots1).forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex1 = index;
        updateCarousel1();
    });
});

// 自动轮播
setInterval(() => {
    currentIndex1 = (currentIndex1 + 1) % 4;
    updateCarousel1();
}, 3000); // 每3秒切换一次


//lunbo2
document.addEventListener('DOMContentLoaded', function() {
    const images2 = document.getElementById('carousel-images2');
    const dots2 = document.getElementById('carousel-dots2').children;
    let currentIndex2 = 0;

    function updateCarousel2() {
        images2.style.transform = `translateX(-${currentIndex2 * 300}px)`;
        for (let i = 0; i < dots2.length; i++) {
            dots2[i].classList.remove('active2');
        }
        dots2[currentIndex2].classList.add('active2');
    }

    document.getElementById('next2').addEventListener('click', () => {
        currentIndex2 = (currentIndex2 + 1) % 4;
        updateCarousel2();
    });

    document.getElementById('prev2').addEventListener('click', () => {
        currentIndex2 = (currentIndex2 - 1 + 4) % 4;
        updateCarousel2();
    });

    Array.from(dots2).forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex2 = index;
            updateCarousel2();
        });
    });

    // 自动轮播
    setInterval(() => {
        currentIndex2 = (currentIndex2 + 1) % 4;
        updateCarousel2();
    }, 3000); // 每3秒切换一次
});
