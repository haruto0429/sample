document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ham").addEventListener("click", function () {
        this.classList.toggle("action");
        document.getElementById("sp-nav").classList.toggle("action");
        document.getElementById("sp-mask").classList.toggle("action");
    })
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-b").addEventListener("click", function () {
        this.classList.toggle("action");
        document.getElementById("pc-nav").classList.toggle("action");
        document.getElementById("pc-mask").classList.toggle("action");
    })
});
