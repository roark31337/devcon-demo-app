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
      bc.device.fetchContentsOfURL("http://api.flickr.com/services/feeds/photos_public.gne?tags=wildlife", handleFetchDataSuccess, function(msg) {alert('Unable to fetch flickr data.');});
    }

    /**
     * Upon successfully fetching the data we iterate over it and create a string of HTML.  This string of HTML is the series
     * of LI elements with images that will be injected into the HTML.  The _ object is from the underscore.js library and
     * contains a number of functions for working with collections.  
     */
    function handleFetchDataSuccess(data) {
      var images = $(data).find('entry link[rel="enclosure"]');
      var html = _.reduce(images, renderPhotoThumbnail, "");
      $(".photolist").append(html);
      registerImageEventListeners();
    }

    /**
     * Register for the doubletap and transform event.  Both of these events are fired by hammer.js.  We detect the type 
     * of event and will go fullscreen upon doubletap and rotate/skew the image upon a transform. 
     */
    function registerImageEventListeners() {
    }

    /**
     * Utility funtion to create our string of HTML for each photo.
     */
    function renderPhotoThumbnail(html, photo) {
      return html + "<li class='thumbContainer'><img src='" + photo.getAttribute('href') + "'/></li>";
    }
  });
  
})( jQuery )