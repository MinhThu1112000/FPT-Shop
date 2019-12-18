$(function(){
	$('.products-seen>.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		dots:false,
		navText: ["<img src='images/kiTu.png' width = '30'>","<img src='images/kiTu.png' width='30'>"],
		responsive:{
			0:{
				items:2,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
	});
	$('.homeSlider>.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		dots:false,
		navText: ["<img src='images/kiTu.png' width = '30'>","<img src='images/kiTu.png' width='30'>"],
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{

				items:1,
				nav:false
			},
			1000:{
				items:1,
				nav:true,
				loop:false
			}
		}
	});
	$('.menu-multi').siblings().css('display','none');

	$('.menu-multi').click(function(){
		$(this).siblings().slideToggle('show');
	});
	$('.dropdown-item').click(function(){
		$('.option-customs').html($(this).html());

	});
	$('.fa-bars').click(function(){
		$('.menu-multi-mobile').show();
		$('.overplay').show();
	});
	$('.fa-times').click(function(){
		$('.menu-multi-mobile').hide();
		$('.overplay').hide();

	});
	
	// $(window).resize(function(){
	// 	var width = 

	// });

	

	// $('.items-select').removeClass('flex-column');
});