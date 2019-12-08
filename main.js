$(document).ready(function ()
{
    M.AutoInit();
    var styles = [
      new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'blue',
          width: 3
        }),
        fill: new ol.style.Fill({
          color: 'rgba(0, 0, 255, 0.1)'
        })
      }),
      new ol.style.Style({
        image: new ol.style.Circle({
          radius: 0,
          fill: new ol.style.Fill({
            color: 'orange'
          })
        }),
        geometry: function(feature) {
          // return the coordinates of the first ring of the polygon
          var coordinates = feature.getGeometry().getCoordinates()[0];
          return new ol.geom.MultiPoint(coordinates);
        }
      })
    ];

    var geojsonObject = {
      'type': 'FeatureCollection',
      'crs': {
        'type': 'name',
        'properties': {
          'name': 'EPSG:3857'
        }
      },
      'features': [{
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [[[-5e6, 6e6], [-5e6, 8e6], [-3e6, 8e6],
              [-3e6, 6e6], [-5e6, 6e6]], [[-5e6, 6e6], [-5e6, 8e6], [-3e6, 8e6],
                  [-3e6, 6e6], [-5e6, 6e6]]]
        }
      }]
    };

    var source = new ol.source.Vector({
      features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
    });

    var layer = new ol.layer.Vector({
      source: source,
      style: styles
    });

    var basic = new ol.layer.Tile({
      source: new ol.source.OSM()
    });

    var map = new ol.Map({
      layers: [basic, layer],
      target: 'map',
      view: new ol.View({
        center: [0, 3000000],
        zoom: 2
      })
    });

});
