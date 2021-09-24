document.getElementById("settings").addEventListener("click", abc);
function abc() {
    if(document.getElementById("panel").style.right == "-100%"){
        document.getElementById("panel").style.right = "0%";

    document.getElementById("settings").style.right = "16rem";
    }
    else{
        document.getElementById("panel").style.right = "-100%";

            document.getElementById("settings").style.right = "0%";
            
    }


}
document.getElementById("color-btn-1").addEventListener("click", colorOne);
function colorOne() {
   
    document.getElementById("header").style.backgroundColor = "#6900c7";
    document.getElementById("overlay").style.background="linear-gradient(45deg,#0061f2,#0061f28a)";
    var element = document.getElementsByClassName("text-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.color = "#0061f2";
    }

    var element = document.getElementsByClassName("page-btn");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("background-color", "#0061f2", "important");

    }
    var element = document.getElementsByClassName("page-btn");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("border-color", "#0061f2", "important");

    }
    var element = document.getElementsByClassName("badge-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("background-color", "rgba(255, 255, 255, 0.59)", "important");

    }
    var element = document.getElementsByClassName("badge-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("color", "#0061f2a", "important");

    }
}
document.getElementById("color-btn-2").addEventListener("click", colorTwo);
function colorTwo() {
   
    document.getElementById("header").style.backgroundColor = "#8039da";
    document.getElementById("overlay").style.background="linear-gradient(45deg,#1da1f5,#1da1f58a)";

    var element = document.getElementsByClassName("text-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.color = "#1da1f5";
    }

    var element = document.getElementsByClassName("page-btn");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("background-color", "#1da1f5", "important");

    }
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("border-color", "#1da1f5", "important");

    }
    var element = document.getElementsByClassName("badge-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("background-color", "rgba(255, 255, 255, 0.59)", "important");

    }
    var element = document.getElementsByClassName("badge-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("color", "#1da1f5", "important");

    }

}
document.getElementById("color-btn-3").addEventListener("click", colorThree);
function colorThree() {
    document.getElementById("header").style.backgroundColor = "#ff793f";
    document.getElementById("overlay").style.background="linear-gradient(45deg,#f53b57,#f53b578a)";

    var element = document.getElementsByClassName("text-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.color = "#f53b57";
    }

    var element = document.getElementsByClassName("page-btn");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("background-color", "#f53b57", "important");

    }
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("border-color", "#f53b57", "important");

    }
    var element = document.getElementsByClassName("badge-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("background-color", "rgba(255, 255, 255, 0.59)", "important");

    }
    var element = document.getElementsByClassName("badge-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("color", "#f53b57", "important");

    }

}

document.getElementById("color-btn-4").addEventListener("click", colorFour);
function colorFour() {
    document.getElementById("header").style.backgroundColor = "#506c6a";
    document.getElementById("overlay").style.background="linear-gradient(45deg,#6eabc2,#6eabc28a)";

    var element = document.getElementsByClassName("text-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.color = "#6eabc2";
    }

    var element = document.getElementsByClassName("page-btn");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("background-color", "#6eabc2", "important");

    }
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("border-color", "#6eabc2", "important")

    }
    var element = document.getElementsByClassName("badge-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("background-color", "rgba(255, 255, 255, 0.59)", "important");

    }
    var element = document.getElementsByClassName("badge-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("color", "#6eabc2", "important");

    }

}

document.getElementById("color-btn-5").addEventListener("click", colorFive);
function colorFive() {
    document.getElementById("header").style.backgroundColor = "#0fa28b";
     


    document.getElementById("overlay").style.background="linear-gradient(45deg,#06794f,#06794f8a)";

    var element = document.getElementsByClassName("text-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.color = "#06794f";
    }

    var element = document.getElementsByClassName("page-btn");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("background-color", "#06794f", "important");

    }
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("border-color", "#06794f", "important");

    }
    var element = document.getElementsByClassName("badge-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("background-color", "rgba(255, 255, 255, 0.59)", "important");

    }
    var element = document.getElementsByClassName("badge-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("color", "#06794f", "important");

    }

}

document.getElementById("color-btn-6").addEventListener("click",colorPrimary);
function colorPrimary() {
document.getElementById("primary-panel").style.display="block";
}
document.getElementById("color-btn-7").addEventListener("click",colorSecondary);
function colorSecondary() {
document.getElementById("secondary-panel").style.display="block";
}


let colorInput=document.querySelector('#color');

colorInput.addEventListener('input',() =>{
    let color =colorInput.value;
    document.getElementById("header").style.backgroundColor = color;

});

let colorsInput=document.querySelector('#colors');

colorsInput.addEventListener('input',() =>{
    let colors = colorsInput.value;
    document.getElementById("overlay").style.background=colors;

    var element = document.getElementsByClassName("text-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.color = colors;
    }

    var element = document.getElementsByClassName("page-btn");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("background-color", colors, "important");

    }
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("border-color", colors, "important");

    }
    var element = document.getElementsByClassName("badge-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("background-color", "rgba(255, 255, 255, 0.59)", "important");

    }
    var element = document.getElementsByClassName("badge-clr");
    for (var i = 0; i < element.length; i++) {
        element[i].style.setProperty("color",colors, "important");

    }

});

