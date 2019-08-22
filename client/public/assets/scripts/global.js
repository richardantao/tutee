// render copyright statement inside footer after window loads 
window.onload = function copyrightYear() {
    var year = new Date().getFullYear();

    document.querySelector("#copyright").innerHTML = "Copyright <i class='far fa-copyright'></i> " + year + " Tutee LLC. All rights reserved.";
}