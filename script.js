document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || subject === "" || message === "") {
                alert("الرجاء تعبئة جميع الحقول قبل إرسال الرسالة.");
                return;
            }

            alert(
                "شكرًا لتواصلك مع صحيفة خط التماس يا " + name +
                ".\nتم استلام رسالتك بعنوان: " + subject +
                ".\nسيقوم فريق التحرير بمراجعة الرسالة."
            );

            form.reset();
        });
    }
});
