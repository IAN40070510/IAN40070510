document.addEventListener('DOMContentLoaded', () => {
    // 1. 獲取「模式切換」按鈕和 <body> 元素
    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // 2. 檢查按鈕是否存在，以避免錯誤
    if (themeToggleButton) {
        // 3. 為按鈕添加一個 click 事件監聽器
        themeToggleButton.addEventListener('click', () => {
            // 4. 當按鈕被點擊時，切換 body 上的 'light-mode' class
            bodyElement.classList.toggle('light-mode');
        });
    }
});
