/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
	jQuery(function() {

		//alert(jQuery(window).height());

		/*jQuery('#edit-field-activity .form-type-checkbox label, #edit-field-interests .form-type-checkbox label, #edit-field-occasion .form-type-checkbox label, #edit-field-relationship .form-type-radio label').hover(function(){
				jQuery(this).animate({fontSize: "36px" }, 100);
			}, function(){
				jQuery(this).animate({fontSize: "26px" }, 100);
		});*/

		//jQuery("#magial-submit-ajax input:text").attr("disabled", true);


		jQuery("#magial-submit-ajax input:checkbox").change(function(){
			jQuery("label[for=" + jQuery(this).attr("id") + "]").toggleClass("checked");
		});

		jQuery("#edit-field-sex input:radio").change(function(){
			jQuery("#edit-field-sex label").removeClass("checked");
			jQuery("label[for=" + jQuery(this).attr("id") + "]").toggleClass("checked");
		});

		jQuery("#edit-field-astrological-sign input:radio").change(function(){
			jQuery("#edit-field-astrological-sign label").removeClass("checked");
			jQuery("label[for=" + jQuery(this).attr("id") + "]").toggleClass("checked");
		});

		jQuery("#edit-field-relationship input:radio").change(function(){
			jQuery("#edit-field-relationship label").removeClass("checked");
			jQuery("label[for=" + jQuery(this).attr("id") + "]").toggleClass("checked");
			var value = jQuery(this).val();
			jQuery("#slider-relationship").slider("value", value);
		});

		jQuery("#edit-field-sex").css("margin-top", -30 + jQuery("#edit-field-sex").height() / -2);




		jQuery(".form-item-field-age-max").css("margin-top", -30 + (jQuery(".form-item-field-age-max").height() + 20) / -1);
		jQuery(".form-item-field-age-min").css("margin-top", -30 + (jQuery(".form-item-field-age-min").height() + 20)  / -1);		


		jQuery(".form-item-field-price-max").css("margin-top", (jQuery(".form-item-field-price-max").height() + 20) / -1);
		jQuery(".form-item-field-price-min").css("margin-top", (jQuery(".form-item-field-price-min").height() + 20)  / -1);



		jQuery("#edit-field-relationship").css("margin-top", -30 + jQuery("#edit-field-relationship").height() / -1);
		jQuery("#edit-field-activity").css("margin-top", -30 + jQuery("#edit-field-activity").height() / -2);
		jQuery("#edit-field-post").css("margin-top", -30 + jQuery("#edit-field-post").height() / -2);
		jQuery("#edit-field-astrological-sign").css("margin-top", -30 + jQuery("#edit-field-astrological-sign").height() / -2);
		jQuery("#edit-field-interests").css("margin-top", -30 + jQuery("#edit-field-interests").height() / -2);
		jQuery("#edit-field-occasion").css("margin-top", -30 + jQuery("#edit-field-occasion").height() / -2);




		function resize() {
			//alert(jQuery('#edit-field-sex').height());

			var current = jQuery(window).scrollTop();
			var total = jQuery(document).height();
			var hPrecent = current / total;

		
			var h = jQuery(window).height() - 60 < 600 ? 600 : jQuery(window).height() - 60;
			var pad = jQuery(window).height() * .20;
			jQuery(".results").css("min-height", h);
			jQuery("#magial-submit-ajax .form-wrapper").height(h);
			var sex_h = h - 122;
			jQuery("#edit-sex").height(sex_h);


			var now = jQuery(document).height();

			jQuery('html, body').animate({
				scrollTop: now * hPrecent,
			}, 0);	
		}

		/*jQuery(window).scroll(function(){
		    var scro = jQuery(window).scrollTop();
		    alert(scro);
		});*/

		resize();
		jQuery(window).bind('resize', function(){
			resize();
		});


		jQuery("#slider-age").slider({
			range: true,
			min: 1,
			max: 115,
			values: [1,115],
		    slide: function(event, ui){
				 jQuery("input#edit-field-age-min").val(jQuery("#slider-age").slider("values",0));
				 jQuery("input#edit-field-age-max").val(jQuery("#slider-age").slider("values",1));
		    },
		    stop: function(event, ui){
		      jQuery("input#edit-field-age-min").val(jQuery("#slider-age").slider("values",0));
		     jQuery("input#edit-field-age-max").val(jQuery("#slider-age").slider("values",1));
		   }
		});

		jQuery("#slider-price").slider({
			range: true,
			min: 1,
			max: 103,
			values: [1,103],
		    slide: function(event, ui){
		    	price1 = nonLinear(jQuery("#slider-price").slider("values",0));
		    	price2 = nonLinear(jQuery("#slider-price").slider("values",1));
				jQuery("input#edit-field-price-min").val(price1);
				jQuery("input#edit-field-price-max").val(price2);
		    },
		    stop: function(event, ui){
		      price1 = nonLinear(jQuery("#slider-price").slider("values",0));
		      price2 = nonLinear(jQuery("#slider-price").slider("values",1));
		    jQuery("input#edit-field-price-min").val(price1);
		    jQuery("input#edit-field-price-max").val(price2);
		    }

		});

		jQuery("#slider-relationship").slider({
			min: 0,
			max: 2,
			value: 1,
		    slide: function(event, ui){
		    	jQuery("#edit-field-relationship-" + ui.value).click();
		    	jQuery("#edit-field-relationship label").removeClass("checked");
				jQuery('#label-edit-field-relationship-' + ui.value).toggleClass("checked");
		    }

		});

		/*function refresh_share_block()
		{

		}*/

		function nonLinear(value) {
			var price = value;

			if (value < 26)
	    	{
	    		price *= 100;	    		
	    	}
	    	else if (value < 61)
	    	{
	    		price -= 25;
	    		price *= 500;
	    		price += 2500;
	    	}
	    	else if (value < 81)
	    	{
	    		price -= 60;
	    		price *= 1000;
	    		price += 20000;
	    	}
	    	else if (value < 91)
	    	{
	    		price -= 80;
	    		price *= 5000;
	    		price += 40000;
	    	}
	    	else if (value < 100)
	    	{
	    		price -= 90;
	    		price *= 100000;
	    		price += 0;
	    	}
	    	else
	    		price = 1000000;

	    	if (value <= 100)
				return number_format(price, {decimals: 0, thousands_sep: "."}) + " р";

			if (value == 101)
				return "10.000.000€";
			else if (value == 102)
				return "100.000.000€";
			else 
				return "300.000.000€";
		}

		function number_format(_number, _cfg){
		  function obj_merge(obj_first, obj_second){
		    var obj_return = {};
		    for (key in obj_first){
		      if (typeof obj_second[key] !== 'undefined') obj_return[key] = obj_second[key];
		      else obj_return[key] = obj_first[key];
		      }
		    return obj_return;
		  }
		  function thousands_sep(_num, _sep){
		    if (_num.length <= 3) return _num;
		    var _count = _num.length;
		    var _num_parser = '';
		    var _count_digits = 0;
		    for (var _p = (_count - 1); _p >= 0; _p--){
		      var _num_digit = _num.substr(_p, 1);
		      if (_count_digits % 3 == 0 && _count_digits != 0 && !isNaN(parseFloat(_num_digit))) _num_parser = _sep + _num_parser;
		      _num_parser = _num_digit + _num_parser;
		      _count_digits++;
		      }
		    return _num_parser;
		  }
		  if (typeof _number !== 'number'){
		    _number = parseFloat(_number);
		    if (isNaN(_number)) return false;
		  }
		  var _cfg_default = {before: '', after: '', decimals: 2, dec_point: '.', thousands_sep: ','};
		  if (_cfg && typeof _cfg === 'object'){
		    _cfg = obj_merge(_cfg_default, _cfg);
		  }
		  else _cfg = _cfg_default;
		  _number = _number.toFixed(_cfg.decimals);
		  if(_number.indexOf('.') != -1){
		    var _number_arr = _number.split('.');
		    var _number = thousands_sep(_number_arr[0], _cfg.thousands_sep) + _cfg.dec_point + _number_arr[1];
		  }
		  else var _number = thousands_sep(_number, _cfg.thousands_sep);
		  return _cfg.before + _number + _cfg.after;
		}

		jQuery("#secondary-menu a, a.anchor").slideto({
		  speed: 800
		});

		jQuery("#secondary-menu a").click(function () {
		    jQuery("#secondary-menu li").removeClass("active");
		    jQuery(this).parent().addClass("active");
		    /*new Ya.share({
        		element: 'yashare'
        	});*/
    	});

    	jQuery("a.anchor").click(function () {
    		jQuery("#secondary-menu li").removeClass("active");
    		jQuery('#secondary-menu a[href="' + jQuery(this).attr('href') + '"]').parent().addClass("active");
    	});



	});
})(jQuery, Drupal, this, this.document);


