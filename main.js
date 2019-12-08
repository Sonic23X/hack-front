$(document).ready(function ()
{
    M.AutoInit();
    var center = ol.proj.transform([-11011971.24, 2332451.05], 'EPSG:3857', 'EPSG:3857');

  	var map = new ol.Map({
  	   layers: [
  		 new ol.layer.Tile({
  			source: new ol.source.OSM()
  		 })
  	   ],
  	   target: 'map',
  	   view: new ol.View({
    		 center: center,
    		 zoom: 8
  	   })
  	});
});
