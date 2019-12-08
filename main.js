$(document).ready(function ()
{
    M.AutoInit();

    var center = ol.proj.transform([-11011971.24, 2332451.05], 'EPSG:3857', 'EPSG:3857');

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
          var coordinates = feature.getGeometry().getCoordinates()[0];
          return new ol.geom.MultiPoint(coordinates);
        }
      })
    ];

    var geojsonObject =
    {
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates':
          [[
            [2.014491e6,-9.84451239e6],
            [2e6, 4e6],
            [5e6, -5e6],
            [2.014491e6,-9.84451239e6],
          ]]
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
        center: center,
        zoom: 8
      })
    });




});
