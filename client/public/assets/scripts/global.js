window.onload = function() {
    let year = new Date.getFullYear();

    document.querySelector("#copyright").innerHTML = "Copyright <i class='far fa-copyright'></i> " + year + " Tutee LLC. All rights reserved.";
}
