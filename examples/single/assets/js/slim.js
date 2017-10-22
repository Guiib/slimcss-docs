$(document).ready(function(e) {
	var $popoverLink = $('[data-popover]'),
	    $document = $(document);

	$('.navbar-button').click(function(e) {
		$('.navbar-collapse').toggle(200);
	});

	function init() {
		$popoverLink.on('click', openPopover)
		$document.on('click', closePopover)
	}

	function openPopover(e) {
	  e.preventDefault()
	  closePopover();
	  var popover = $($(this).data('popover'));
	  popover.toggleClass('open')
	  e.stopImmediatePropagation();
	}

	function closePopover(e) {
	  if($('.popover.open').length > 0) {
	    $('.popover').removeClass('open')
	  }
	}

	init();
});
