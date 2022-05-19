jQuery( document ).ready(function($) {

	// map
	var ApusThemerMap = {

		init: function() {
			$('.google-map-wrapper').each(function(){
				var $item = $(this);
				var id = $item.attr('id');
				var lat = $item.data('latitude');
				var lng = $item.data('longitude');
				var map = null;
                var fenway = new google.maps.LatLng(lat, lng);
                var mapOptions = {
                    center: fenway,
                    zoom: $item.data('zoom'),
                    scrollwheel: false
                };

                map = new google.maps.Map(document.getElementById(id), mapOptions);
                
                map.setOptions({styles: $item.data('style')});
                ApusThemerMap.addMarkers($item, map);
			});
		},
        // add makers
		addMarkers: function( $item, map ) {
			var lat = $item.data('latitude');
			var lng = $item.data('longitude');
            var latlng = new google.maps.LatLng(lat, lng);
            
            var marker_obj = {
                position: latlng,
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP
            };
            if ($item.data('marker_icon')) {
            	marker_obj.icon = $item.data('marker_icon');
            }
            var marker = new google.maps.Marker(marker_obj);

            //markers.push(marker);
        },

	}

	ApusThemerMap.init();
});