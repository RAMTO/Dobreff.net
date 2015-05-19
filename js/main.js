$(document).ready(function(){

	var _sidebar = $('.side-menu'),
		_content = $('.content'),
		_openedclass = 'opened',
		_trigger = 'a.trigger';

	// Calculating and applying elements height based on the result
	var _sidebarheight = _sidebar.outerHeight(),
		_contentheight = _content.outerHeight();

	function _setHeights() {
		if(_sidebarheight > _contentheight) {
			_content.css('height', _sidebarheight);
		}
		else {
			_sidebar.css('height', _contentheight);
		}
	}
	
	$('body').on('click', _trigger, function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		if(_sidebar.hasClass(_openedclass)) { 
			_sidebar.removeClass(_openedclass);
			_content.removeClass(_openedclass);
		}
		else {
			_sidebar.addClass(_openedclass);
			_content.addClass(_openedclass);
		}				
	});
	function _init() {
		var innerwidth = $(window).innerWidth();
		_setHeights();

		if(innerwidth <=979) {
			$('a.logo').appendTo('.navbarwrapper');
		}
		else {
			$('a.logo').appendTo('.main-header .l');
		}
	}
	_init();
	
	// Using Debounce plugin
	(function($,sr){

	  // debouncing function from John Hann
	  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	  var debounce = function (func, threshold, execAsap) {
	      var timeout;

	      return function debounced () {
	          var obj = this, args = arguments;
	          function delayed () {
	              if (!execAsap)
	                  func.apply(obj, args);
	              timeout = null;
	          };

	          if (timeout)
	              clearTimeout(timeout);
	          else if (execAsap)
	              func.apply(obj, args);

	          timeout = setTimeout(delayed, threshold || 100);
	      };
	  }
	  // smartresize 
	  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

	})(jQuery,'smartresize');


	// usage:
	$(window).smartresize(function(){
	  _init();
	});

});
