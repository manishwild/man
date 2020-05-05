var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 53.550270, lng:  10.025270 },
          zoom: 100
        });
      }