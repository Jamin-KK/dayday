
let colors = ["#ffd0d2","#fffdd0","#d0fffd","#d0d2ff"];
$(".main").children('section').each(function(){   
    let firstGradient = randomNumber(10,90);
    $(this).css(
        "background", "linear-gradient(141deg, "+colors[randomNumber(0,4)]+" "+firstGradient+"%, "+colors[randomNumber(0,4)] + ")"
    );
});
function randomNumber(min,max){
    return Math.floor((Math.random() * max) + min);
}


// let colors = ["#e14fad","#ed6ea0","#ec8c69","#F578DC,#e14fad","#ec77ab","#7873f5","#5a55ae","#e14fad","#f9d423","#e5b2ca","#F578DC","ff8c7f",
// "#9795f0","#64b3f4","#c2e59c","#f9d423,#7b5fac","#00cdac","#8ddad5","#88d3ce,#e14fad","#7028e4","#3f51b1","#c9ffbf","#cc6b8e"];

// let percent = randomNumber(0,60);
// let degree = randomNumber(0,360);
// $("body").css(
//     "background", "linear-gradient("+degree+"deg, "+colors[randomNumber(0,25)]+" "+percent+"%, "+colors[randomNumber(0,25)]+" "+(100-percent)+"%)"
// );
// "background", "linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)" 

// function randomNumber(min,max){
// return Math.floor((Math.random() * max) + min);
// }
