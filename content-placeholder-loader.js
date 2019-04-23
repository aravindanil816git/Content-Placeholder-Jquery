(function ( $ ) {
    
    /**
     * Populates the selected element with loading placeholder
     */
       $.fn.loadWithPlaceHolderContent = function( options ) {
           // Default options
           var settings = $.extend({
               parentHeight: $(this).height(),
               elementHeight: 20,
               marginBottom: 20
           }, options );
    
           // Apply options
           var finalAppendedString = '';
           var placeHolderLoader = "<span class='content-placeholder m-b-2' style='margin-bottom:"+settings.marginBottom+"px;height:"+settings.elementHeight+"px'>&nbsp;</span>"
           for (let i = 0; i < ( settings.parentHeight/(settings.elementHeight+settings.marginBottom));i++){
               finalAppendedString+= placeHolderLoader;
               console.log(i);
           }
           
           return this.append(finalAppendedString);
    
       };
    
   }( jQuery ));