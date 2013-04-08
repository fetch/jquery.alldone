(function($){
  // Wait for all elements to trigger any of the supplied events
  $.fn.allDone = function(events, callback){
    var $this = this
      , len = $this.length;

    function triggerCallback() {
      callback.call( $this );
    }

    function itemLoaded(event){
      if ( --len <= 0 ){
        setTimeout( triggerCallback );
        $this.unbind('.allDone', itemLoaded);
      }
    };

    if(!len){
      return triggerCallback();
    }
    
    // append event namespace for correct unbinding
    events = events.replace(/ /g, '.allDone ') + '.allDone';
    $this.on(events, itemLoaded);
  };
}).call(this, jQuery);
