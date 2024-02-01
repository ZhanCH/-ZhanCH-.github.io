// 一个简单的脚本，用于在页面加载时添加一些行为

document.addEventListener('DOMContentLoaded', function() {
    // 这里可以添加更多的JS代码来控制页面行为
    setupNavigation();
});

function setupNavigation() {
    // 示例：为导航链接添加点击事件
    let navLinks = document.querySelectorAll('nav ul li a');
   navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let targetId = this.getAttribute('href').slice(1);
            let targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth' // 平滑滚动到目标区域
                });
            }
        });
    });
}