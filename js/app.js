document.addEventListener("DOMContentLoaded", function() {
  // this function runs when the DOM is ready, i.e. when the document has been parsed
  var wraps="none";
  document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    if(wraps=="none"){
      document.getElementsByClassName("nav_bar_invisibal")[0].style.display="flex";
      document.getElementsByClassName("content_blocker")[0].style.display="block";
      wraps="block";
    }
    else{
      document.getElementsByClassName("nav_bar_invisibal")[0].style.display="none";
      document.getElementsByClassName("content_blocker")[0].style.display="none";
      wraps="none";
    }

  }
  // all js code should go below this line
});