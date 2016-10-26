/* Script Global */
(function(w,d,$){
	var page = {} || w.page;
	var keys = {
            enter: 13,
            space: 32,
            left: 37,
            right:39
    };

    /*-------------------------/
    	WAI ARIA
    /-------------------------*/
	// Manejo Aria Tabs

	page.waiAriaTabs = function(){
		$('label.ch-tab').keydown(function(e) {

		    if (e.altKey||e.ctrlKey||e.shiftKey) {
		            // do nothing
		    }
		    else if(e.keyCode == keys.left){
		       	$(this).prev().siblings('.ch-tab').not(this).focus();
		    }else if(e.keyCode == keys.right){
		       	$(this).find( '~ label').focus();
		    }
		    else if (e.keyCode == keys.enter || e.keyCode == keys.space) {
		        var $rgn =  $('#' + $(this).attr('aria-controls'));
		        if ($(this).attr('aria-expanded') == 'true') {
		            $(this).attr('aria-expanded', 'false');
		            $rgn.attr('aria-hidden', 'true');
		            
		        }else {
		            $(this).attr('aria-expanded', 'true');
		            $rgn.attr('aria-hidden', 'false');
		            $(this).siblings().attr('aria-expanded', 'false');
		            $rgn.siblings().attr('aria-hidden', 'true');
		            $(this).trigger('click');
		        }
		        e.stopPropagation();
		        return false;
		    }
		    return true;
		});
	}
	// Manejo Aria carrousels
	page.waiAriaCarrousel = function(){
		// Agrega el tabindex a los bottones
		$('.ch-user-no-select').each(function(index, el) {
			$(el).attr('tabindex',0);		
		});
		$('.ch-user-no-select').keydown(function(e) {

		    if (e.altKey||e.ctrlKey||e.shiftKey) {
		            // do nothing
		    }
		    else if(e.keyCode == keys.left){
		       	$(this).prev().siblings('.ch-user-no-select').not(this).focus();
		    }else if(e.keyCode == keys.right){
		       	$(this).find( '~ .ch-user-no-select').focus();
		    }
		    else if (e.keyCode == keys.enter || e.keyCode == keys.space) {
		       	$(this).trigger('click');
		        e.stopPropagation();
		        return false;
		    }
		    return true;
		});
	}

	// Initialize 
	w.onload = function(){
		var carousels = [];
		carousels.push(new ch.Carousel(ch('.product-carrousel')[0], {
		    pagination: false,
		
		}));
		carousels.push(new ch.Carousel(ch('.suggestions-carrousel')[0], {
		    pagination: false,
		
		}))

		page.waiAriaTabs();
		page.waiAriaCarrousel();
	}





	
})(window,document,jQuery)