let slide = document.querySelectorAll(".slice");
// const slices =document.querySelectorAll(".slices");
console.log(slide)
function reset() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].classList.remove("visible")
    }
}

function sliderHandelr1() {
    reset()
        console.log("sliderHandelr1");
         slide[0].classList.add("visible");
    }

    function sliderHandelr2() {
        reset()
        console.log("sliderHandelr2");
         slide[1].classList.add("visible");
    }

    function sliderHandelr3() {
        reset()
        console.log("sliderHandelr3");
         slide[2].classList.add("visible");
    }