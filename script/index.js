document.addEventListener("DOMContentLoaded", () => {
    const buttonGroups = document.querySelectorAll('.button-group');

    buttonGroups.forEach(group => {
        const buttons = group.querySelectorAll('.btn');

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault(); // tránh submit form nếu button là submit

                // Xóa class 'selected' ở tất cả button trong nhóm
                buttons.forEach(btn => btn.classList.remove('selected'));

                // Thêm class 'selected' cho button vừa click
                button.classList.add('selected');

                // Lưu giá trị vào data-value nếu cần gửi lên server
                group.dataset.selected = button.textContent.trim();
            });
        });
    });
});
