let submitBtn = document.querySelector(".btn");
let pageWrapper = document.querySelector(".page-wrapper");
let regCard = document.querySelector(".card-3");
let submitState = document.querySelector(".submit-state");

console.log(regCard);

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // regCard.style.display = "none";
    // pageWrapper.classList.remove("p-t-100", "p-b-100");
    submitState.style.height = "100%";
    setTimeout(function() {
        submitState.style.top = "0";
        submitState.style.height = "0";
    }, 800);
    submitState.style.removeProperty('top');
})