(function($) {  

  $(document).ready( function() {
    init();

    /**
     * Here we kick off fetching of our initial data feed from Flickr as well as register any event listeners for DOM
     * elements that already exist on the page.
     */
    function init() {
      fetchData();     
      registerEventListeners();
    }

    /**
     * Listen for the tap event and then invoke native functionality exposed via the App Cloud container.  NOTE: the 'tap' event
     * is added by the App Cloud SDK.  Tap will fire whenever a user taps an element in a touch environment or a click event when
     * in a desktop environment.
     */
    function registerEventListeners() {
    }

    /**
     * We can not use the built-in AJAX functionality of the browser/jquery because it violates the same domain security model.
     * Instead, we use a JavaScript API exposed by the container which does the HTTP calls for us through native code.  This 
     * allows us to access the Flickr feed.
     */
    function fetchData() {
    }

    /**
     * Register for the doubletap and transform event.  Both of these events are fired by hammer.js.  We detect the type 
     * of event and will go fullscreen upon doubletap and rotate/skew the image upon a transform. 
     */
    function registerImageEventListeners() {
    }
  });
  
})( jQuery )