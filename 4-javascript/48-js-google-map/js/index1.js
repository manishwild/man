
var map;
//var
      function initMap() {
          //set the map
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 53.550270, lng: 10.025270},
          zoom: 1,
          //disableDefaultUI:true

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

// var LatLngList = new Array (new google.maps.LatLng (52.537,-2.061), new google.maps.LatLng (52.564,-2.017));
// //  Create a new viewpoint bound
// var bounds = new google.maps.LatLngBounds ();
// //  Go through each...
// for (var i = 0, LtLgLen = LatLngList.length; i < LtLgLen; i++) {
//   //  And increase the bounds to take this point
//   bounds.extend (LatLngList[i]);
// }
// //  Fit these bounds to the map
// map.fitBounds (bounds);
// @cbdelavenne
