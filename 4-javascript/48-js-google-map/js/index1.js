
var map;
// latitude & longitude for DCI Hamburg
var LatLng = {lat: 53.550270, lng: 10.025270};

// map-zooming with setInterval
let zoomCounter = 2;
let mapInterval = setInterval(function() {
    if (zoomCounter == 15) {
        clearInterval(mapInterval);
    } else {
        zoomCounter += 1;
        initMap();
    }
}, 2000);
//var
      function initMap() {
          //set the map
          map = new google.maps.Map(document.getElementById('map'), {
          center: LatLng ,
          zoom: zoomCounter,
          disableDefaultUI:true

        });
        //set the marker image
        var image = {
            url: './imgs/marker.gif',
            //size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(50, 100),
            scaledSize: new google.maps.Size(100, 100)
          };
        var marker = new google.maps.Marker({
            position: {lat: 53.550270, lng: 10.025270},
            map: map,
            icon:image,
            title: 'dci',
            draggable:true,
            animation: google.maps.Animation.DROP
          });
          //set up info window
          var infowindow = new google.maps.InfoWindow({
              content:document.querySelector('#windowContainer').innerHTML
          })

          marker.addListener('mouseover',()=>{
              infowindow.open(map,marker)
          } )
      }
      //set interval google map slowly zoom towads dci

// var LatLngList = new Array (new google.maps.LatLng (53.550270,10.025270), new google.maps.LatLng (53.550270,10.025270));
// //  Create a new viewpoint bound
// var bounds = new google.maps.LatLngBounds ();
// //  Go through each...
// for (var i = 0, LtLgLen = LatLngList.length; i < LtLgLen; i++) {
//   //  And increase the bounds to take this point
//   bounds.extend (LatLngList[i]);
// }

