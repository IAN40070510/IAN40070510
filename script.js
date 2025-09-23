document.addEventListener('DOMContentLoaded', () => {
    // 獲取「模式切換」按鈕和 <body> 元素
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // 為按鈕添加點擊事件監聽器
    themeToggleBtn.addEventListener('click', () => {
        // 切換 body 元素的 'light-mode' class
        // classList.toggle() 會在 class 存在時移除它，不存在時新增它
        body.classList.toggle('light-mode');
    });
});
