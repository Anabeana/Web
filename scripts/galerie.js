var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var photos = document.getElementsByClassName("mySlides");
  var titles = document.getElementsByClassName("picturetext").childnodes;
  alert(titles)
  if (n > photos.length) {
	  slideIndex = 1
	  }    
	  
  if (n < 1) {
	  slideIndex = photos.length
	}
	
  for (i = 0; i < photos.length; i++) {
     photos[i].style.display = "none"; 
	 titles[i].style.display = "none";
  }
  photos[slideIndex-1].style.display = "block";  
  titles[slideIndex-1].style.display = "block";  
}
