var myIndex = 0;

window.onload = carousel;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    if (myIndex > x.length) {
        myIndex = 1
    }

    var current_node = x.item(myIndex);
    if (current_node) {
        current_node.style.display = "inline"
    }

    myIndex++;
    setTimeout(carousel, 2000); // Change image every 5 seconds
}