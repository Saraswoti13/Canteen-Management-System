// total order chart
let orderProgress = document.querySelector(".order-progress"),
progressValue = document.querySelector(".progress-value");
let progressStartValue = 0,    
progressEndValue = 81,    
speed = 10;

let progress = setInterval(() => {
progressStartValue++;
progressValue.textContent = `${progressStartValue}%`
orderProgress.style.background = `conic-gradient(#ff5b5b ${progressStartValue * 3.6}deg, #d9d9d9 0deg)`
if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);

// Customer Growth Chart
let customerProgress = document.querySelector(".customer-progress"),
growthValue = document.querySelector(".growth-value");
let growthStartValue = 0,    
growthEndValue = 22,    
percentage = 10;

let growth = setInterval(() => {
growthStartValue++;
growthValue.textContent = `${growthStartValue}%`
customerProgress.style.background = `conic-gradient(#00B074 ${growthStartValue * 3.6}deg, #d9d9d9 0deg)`
if(growthStartValue == growthEndValue){
    clearInterval(growth);
}    
}, percentage);

// Total Revenue Chart
let revenueProgress = document.querySelector(".revenue-progress"),
revenueValue = document.querySelector(".revenue-value");
let revenueStartValue = 0,    
revenueEndValue = 62,    
percent = 10;

let revenue = setInterval(() => {
    revenueStartValue++;
    revenueValue.textContent = `${revenueStartValue}%`
    revenueProgress.style.background = `conic-gradient(#2D9CDB ${revenueStartValue * 3.6}deg, #d9d9d9 0deg)`
    if(revenueStartValue == revenueEndValue){
        clearInterval(revenue);
    }    
    }, percent);

//star icon function 
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            const parent = this.parentElement;

            parent.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));

            for (let i = 0; i < value; i++) {
                parent.children[i].classList.add('selected');
            }
        });
    });
});
