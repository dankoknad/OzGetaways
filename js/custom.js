$( document ).ready(function() {

	/* Drop down */

	$('.select').hide();

	$('li').click(function(){
		var nameLi = $(this).text();
		$(this).parent().parent().siblings().text(nameLi);
		$('.select').hide();
	});

	$('body').click(function(e){
		//$('.div-select').removeClass('div-select-click');


		var etarget = $(e.target);
		var sibling = etarget.siblings();

		if(!etarget.hasClass('div-select')) {
			$('.div-select').removeClass('div-select-click');
			$('.div-select').removeClass('current_list');
			$('.div-select').siblings().css('display','none');
			$('.div-select').css({
				'background' : "url('img/svg/arrow_up.svg') no-repeat",
				'background-position': 'right 10px center',
				'background-size': '15px 8px',
				'text-indent': '0.01px'
			});
			return false;
		} else {
			$('.div-select').removeClass('current_list');
			etarget.addClass('current_list');
			$('.div-select').each(function() {
				if(!$(this).hasClass('current_list')) {
					$(this).removeClass('div-select-click');
					$(this).siblings().css('display','none');
					$(this).css({
						'background' : "url('img/svg/arrow_up.svg') no-repeat",
						'background-position': 'right 10px center',
						'background-size': '15px 8px',
						'text-indent': '0.01px'
					});
				}
			});

			etarget.toggleClass('div-select-click');
			if(etarget.hasClass('div-select-click')) {
				sibling.css('display', 'block');
				$(e.target).css({
					'background' : "url('img/svg/arrow_down.svg') no-repeat",
					'background-position': 'right 10px center',
					'background-size': '15px 8px',
					'text-indent': '0.01px'
				});
			} else {
				sibling.css('display', 'none');
				$('.div-select').css({
					'background' : "url('img/svg/arrow_up.svg') no-repeat",
					'background-position': 'right 10px center',
					'background-size': '15px 8px',
					'text-indent': '0.01px'
				});

			}
		}



	});

	var stickyOffset = $('.container').offset().top;

	/* Left menu fixed */

	$(window).scroll(function(){
		var sticky = $('#icons'),
			scroll = $(window).scrollTop();

		if (scroll >= stickyOffset) sticky.addClass('fixed');
		else sticky.removeClass('fixed');
	});

	/* Form Validate */

	var errorMessage = {};
	var inputForm = {};

	errorMessage.firstname = "First name required";

	$('#saveChangeButton').click(function(e){
		event.preventDefault();

		inputForm.firstname = $('#InputFirstName');
		inputForm.lastname = $('#InputLastName');
		inputForm.gender = $('#selGender');
		inputForm.birthdayMonth = $('#selMonth');
		inputForm.birthdayDay = $('#selDay');
		inputForm.birthdayYear = $('#selYear');
		inputForm.Sign = $('#inputSign');
		inputForm.Work = $('#inputWork');
		inputForm.about = $('#aboutTextarea');
		inputForm.Unit = $('#InputUnit');
		inputForm.StreetNo = $('#InputStreetNo');
		inputForm.StreetName = $('#InputStreetName');
		inputForm.Suburb = $('#InputSuburb');
		inputForm.PostCode = $('#InputPostCode');
		inputForm.State = $('#InputState');

		var errorType = true;

		$.each( inputForm, function( key, value ) {
			value.removeClass('box-error');

			if (value[0].localName == 'div') {
				if( $.trim(value[0].innerHTML).length == 0){
					value.addClass('box-error');
					errorType = false;
				}
			} else {
				if( $.trim(value.val()).length == 0){
					value.addClass('box-error');
					errorType = false;
				}
			}


			console.log("error type = ", errorType );
		});


	})


});