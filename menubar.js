

function myFunction(x) {
  x.classList.toggle("change");
}

$(document).ready(function() {
  $('.dropbtn').click(function() {
    $('dropdown-content').slideToggle(1024);
  });


  $(window).resize(function() {
	   if (  $(window).width() > 500 ) {
		$('dropdown-content').removeAttr('style');
	 }
	});
};
