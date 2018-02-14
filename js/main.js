$(document).ready(function(){

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
			type: 'inline',
			showCloseBtn: true		
	});
	$(".popup_item").each(function(i){
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".popup_descr").attr("id", "work_" + i);
	});

	$(".navbar-right li a, .head_desc a.learn").mPageScroll2id();

	$(function () { $("input, select, textarea").not("[type=submit]").jqBootstrapValidation(); } );

	$(".head_desc, section h1").animated("fadeInUp","fadeOutDown"); 
	$(".about_img").animated("bounceInLeft","bounceOutLeft"); 
	$(".about p").animated("bounceInRight","bounceOutRight"); 
	$(".animate_1").animated("slideInLeft","slideOutLeft"); 
	$(".animate_2").animated("slideInUp","slideOutUp"); 
	$(".animate_3").animated("slideInDown","slideOutDown"); 
	$(".animate_4").animated("slideInRight","slideOutRight"); 
	$(".popup_item, .animate_5, form").animated("fadeIn","fadeOut"); 
	$(".animate_6").animated("bounceInLeft","bounceOutLeft"); 
	$(".animate_7").animated("bounceInRight","bounceOutRight"); 
	$(".animate_8").animated("flipInY","flipOutY"); 

	$(".desc_par button").on("click", function(){
		$(this).parent().find('p').css("max-height", "none");
		console.log("!!!");
	});

});

