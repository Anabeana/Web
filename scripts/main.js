var myIndex = 0;

window.onload = carousel;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    if (myIndex == x.length) {
        myIndex = 0
    }

    var current_node = x.item(myIndex);
    if (current_node) {
        current_node.style.display = "inline"
    }

    myIndex++;
    setTimeout(carousel, 2000); // Change image every 5 seconds
}

function moveGallery(moveSize) {
    var images = document.getElementsByClassName("galleryImage");
	var titles = document.getElementById("picturetexts").getElementsByTagName('p');
    var currIdx = -1;

    for (i = 0; i < images.length; i++) {
        if (images[i].style.display == "inline") {
            currIdx = i;
        }
        images[i].style.display = "none";
		titles[i].style.display = "none";
    }

    currIdx += moveSize;
    if (currIdx >= images.length) {
        currIdx = 0;
    }
    if (currIdx < 0) {
        currIdx = images.length - 1;
    }

    var current_node = images.item(currIdx);
	var current_node_title = titles.item(currIdx);
    if (current_node) {
        current_node.style.display = "inline"
    }
	if (current_node_title) {
        current_node_title.style.display = "inline"
    }
}