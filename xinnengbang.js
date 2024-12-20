// JavaScript Document
const navItemsXinnengbang = document.querySelectorAll('.nav-item-xinnengbang');
    const panelsXinnengbang = document.querySelectorAll('.submenu-wrapper-xinnengbang');
    const underlineXinnengbang = document.querySelector('.underline-xinnengbang');

    navItemsXinnengbang.forEach(item => {
        item.addEventListener('click', () => {
            navItemsXinnengbang.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const targetPanelXinnengbang = item.getAttribute('data-panel');

            panelsXinnengbang.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === targetPanelXinnengbang) {
                    panel.classList.add('active');
                }
            });

            // Update underline position and width
            const itemRect = item.getBoundingClientRect();
            const navBarRect = document.querySelector('.nav-bar-xinnengbang').getBoundingClientRect();
            underlineXinnengbang.style.left = `${itemRect.left - navBarRect.left}px`;
            underlineXinnengbang.style.width = `${itemRect.width}px`;
        });
    });

    // Initialize underline position
    const activeItemXinnengbang = document.querySelector('.nav-item-xinnengbang.active');
    if (activeItemXinnengbang) {
        const itemRect = activeItemXinnengbang.getBoundingClientRect();
        const navBarRect = document.querySelector('.nav-bar-xinnengbang').getBoundingClientRect();
        underlineXinnengbang.style.left = `${itemRect.left - navBarRect.left}px`;
        underlineXinnengbang.style.width = `${itemRect.width}px`;
    }