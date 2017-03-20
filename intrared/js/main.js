$(document).ready(function() {

//Set Menu
//$( ".black-bg" ).load( "menu.html");
$( ".black-bg" ).load( "menu.html", function() {
 	
	//About Us
	 $( ".abt_us" ).click(function() {
			$('html, body').animate({
                       scrollTop: $('#about_us').offset().top
             }, 2000);								   
		});
	 $( ".our_ptr" ).click(function() {
			$('#test2').addClass('active');
			$('#test').removeClass('active');
			
			$('html, body').animate({
                       scrollTop: $('#test2').offset().top
             }, 2000);								   
		});
	 $( ".our_mantors" ).click(function() {
				$('#test').addClass('active');
			$('#test2').removeClass('active');
			$('html, body').animate({
                       scrollTop: $('#test').offset().top
             }, 2000);								   
		});
	
	
	 
});
 



$('.thumbnail').click(function(){
      $('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
});

function getParameterByName(name, url) {
       if (!url) url = window.location.href;
       name = name.replace(/[\[\]]/g, "\\$&");
       var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
           results = regex.exec(url);
       if (!results) return null;
       if (!results[2]) return '';
       return decodeURIComponent(results[2].replace(/\+/g, " "));
   }
  



$( document ).ready(function() {
							 
	 //Dropdown Menu
	 $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
		event.preventDefault(); 
		event.stopPropagation(); 
		$(this).parent().siblings().removeClass('open');
		$(this).parent().toggleClass('open');
	});
    $(".social-top").append('<a href="#" class="login">&nbsp;&nbsp;Login</a>')
	$(".social-top").append('<a href="#" class="login">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BSS</a>')
	$(".social-top").append('<a href="#" class="login">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="images/top-massal.png"></a>')
	
	$(".sanskar_list").after('<div class=""><a href="#"><img src="images/donation.jpg" style="width:100%; margin-top:10px;"></a></div><div class="col-md-12 col-sm-12 col-xs-12 subscribe"><form class="form-horizontal"><fieldset><legend><img src="images/newsletter-icon.png" class="sub_icon">Sign Up Newsletter</legend><div class="form-group">  <label class="col-md-12 control-label" for="textinput"></label><div class="col-md-12"> <input id="textinput" name="textinput" type="text" placeholder="Your Email ID" class="form-control input-md" required=""></div></div><div class="form-group">  <div class="col-md-12"><input id="subscribe" name="subscribe" class="sub_button col-md-6" value="Subscribe" type="submit">  </div></div></fieldset></form></div>')		
	  $('.dropdown-toggle').dropdown();  
   
   $( "#show_more" ).click(function() {
 		 $("p").removeClass("hide");
		 $("#show_more").hide("hide");
		 $("#show_less").show();
		});
	  $( "#show_less" ).click(function() {
 		 $(".custome_hide").addClass("hide");
		 $("#show_less").hide("hide");
		 $("#show_more").show();
		});
	  //*---carousel----*/
	  $('#myCarousel_top').carousel({
		  interval: 10000,
		  autoPlay: true
	  });
	  $('#myCarousel_mentor').carousel({
		  interval: 6000,
		  autoPlay: true
	  });


//---scrollTop------//
				   

	 
});
	
	 
	 
	 
	   $( "#our_mentor" ).click(function() {
		location.href="mentor.html?home=y"
	
         });					   

	 
							