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


    // --- Submit form và gửi lên Google Sheet ---
    const form = document.getElementById("weddingForm");
    form.addEventListener("submit", function(e){
        e.preventDefault();

        console.log('submit form');

        // Lấy dữ liệu
        const selected = document.querySelector(".button-group .btn.selected")?.textContent || "";
        const name = document.getElementById("name").value;
        const wish = document.getElementById("wish").value;

        // Google Apps Script Web App URL
        const url = "https://script.google.com/macros/s/AKfycbwRRXSktkun-LTvFfAqG_7cBSs376dC6BNAUP_nKV0Lvjngpn1brKKF_1oQqxEQOHO5/exec"; // Thay bằng URL của bạn

        // Gửi dữ liệu
        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: new URLSearchParams({selected, name, wish})
        })
        .then(res => res.json())
        .then(data => {
            alert("Thank you! Your wish has been sent.");
            form.reset();
            document.querySelectorAll(".button-group .btn").forEach(btn => btn.classList.remove("selected"));
        })
        .catch(err => console.error("Error:", err));
    });
});
