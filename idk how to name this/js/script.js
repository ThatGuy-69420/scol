'use strict';

const imgAll = document.querySelectorAll("img")

imgAll.forEach(abc => {
    abc.addEventListener("click", () => {

        const big = document.querySelector(".big img")
        
        big.src = abc.src.replace("_min", "")
    })
})