(function($) {

  var timeout;

  $.fn.bar = function(options) {
    var opts = $.extend({}, $.fn.bar.defaults, options);
    return this.each(function() {
      $this = $(this);
      var o = $.meta ? $.extend({}, opts, $this.data()) : opts;

      if(!$('.jbar').length) {
        if (o.autoClose) timeout = setTimeout('jQuery.fn.bar.removebar()', o.closeDelay);
        var _message_span = $(document.createElement('span'))
          .addClass('jbar-content')
          .html(o.message)
          .css({"color": o.color})

        var _wrap_bar = $(document.createElement('div'))
          .addClass('jbar')
          .css({"background-color": o.background_color});

        if (o.position == 'bottom') {
          _wrap_bar.addClass('jbar-bottom')
        }
        else {
          _wrap_bar.addClass('jbar-top')
        }

        if(o.removebutton) {
          var _remove_cross = $(document.createElement('a'))
          _remove_cross
            .addClass('jbar-cross')
            .click(function(e){$.fn.bar.removebar();})
        }
        else{
          _wrap_bar
            .css({"cursor": "pointer"})
            .click(function(e){$.fn.bar.removebar();})
        }

        _wrap_bar
          .append(_message_span)
          .append(_remove_cross)
          .hide()
          .insertBefore($this)
          .fadeIn('fast');
      }

    });
  };

  $.fn.bar.removebar = function(txt) {
    if($('.jbar').length){
      clearTimeout(timeout)
      $('.jbar').fadeOut('fast',function() {
        $(this).remove()
      });
    }
  }

  $.fn.bar.defaults = {
    background_color: '#FFFFFF',
    color: '#000',
    position: 'top',
    removebutton: true,
    closeDelay: 5000
  };

})(jQuery);