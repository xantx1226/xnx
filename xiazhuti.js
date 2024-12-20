// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".xiazhuti-menu-item");
    const subMenus = document.querySelectorAll(".xiazhuti-submenu");
    const indicator = document.querySelector(".xiazhuti-indicator");
    
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            subMenus.forEach(menu => menu.style.display = "none");
            const targetMenu = document.getElementById(this.getAttribute("data-target"));
            targetMenu.style.display = "flex";
            
            // 更新指示器的位置
            indicator.style.width = this.offsetWidth + 'px';
            indicator.style.left = this.offsetLeft + 'px';
        });
    });

    // 初始化指示器位置
    if (menuItems.length > 0) {
        indicator.style.width = menuItems[0].offsetWidth + 'px';
        indicator.style.left = menuItems[0].offsetLeft + 'px';
    }
});
