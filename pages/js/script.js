// وظيفة نسخ الكود
function copyCode(id) {
    var code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code).then(function() {
        alert("تم نسخ الكود!");
    }, function() {
        alert("فشل في نسخ الكود.");
    });
}

// دالة للتوجه إلى رابط معين
function goToLink() {
    window.location.href = ""; // ضع الرابط الذي تريده هنا


}



// Shrink the navbar 
navbarShrink();

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink);

// Activate Bootstrap scrollspy on the main nav element
const mainNav = document.body.querySelector('#mainNav');
if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
    });
};