//Script uses similar strategy as mid-term slide program.
//Current data is set to zero but alternate value of current data is set by user using drop-down menu that triggers click function at bottom of script
var currentData = 0

//Establishes fixed map by disableing various zoom and drag features
var map = L.map('map', { zoomControl:false });
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data: <a href="https://monarchhousing.org/endinghomelessness/njcounts/">Monarch Housing</a>',
  subdomains: 'abcd',
}).addTo(map);
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
if (map.tap) map.tap.disable();
var njMap = L.geoJson(njData).addTo(map);
map.fitBounds(njMap.getBounds());

//Establizes hover function to display specified text and values
var info = L.control();
info.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;};
info.update = array[currentData].hoverData;
info.addTo(map);

//Establishes color and style for polygons and legend
function getColor(d) {
	return d > 500  ? '#084594' :
			d > 200  ? '#2171b5' :
			d > 100  ? '#4292c6' :
			d > 50   ? '#6baed6' :
			d > 20   ? '#9ecae1' :
			d > 10   ? '#c6dbef' :
						'#F0F0F0';};
var style = array[currentData].style;

//Establishes mouseover/mouseout features to highlight polygon and generate data for hoverwindow
function highlightFeature(e) {
	var layer = e.target;
	layer.setStyle({
		weight: 5,
		color: '#666',
		dashArray: '',
		fillOpacity: 0.7
	});
if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
	layer.bringToFront();};
info.update(layer.feature.properties);};

var geojson;

function resetHighlight(e) {
	geojson.resetStyle(e.target);
	info.update();	};

function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
	});	};

geojson = L.geoJson(njData, {
	style: style,
	onEachFeature: onEachFeature
}).addTo(map);

//Establishes legend based on color and polygon data
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend'),
		grades = [0, 10, 20, 50, 100, 200, 500],
		labels = [],
		from, to;
	for (var i = 0; i < grades.length; i++) {
		from = grades[i];
		to = grades[i + 1];
		labels.push(
			'<i style="background:' + getColor(from + 1) + '"></i> ' +
			from + (to ? '&ndash;' + to : '+'));	};
	div.innerHTML = labels.join('<br>');
	return div;	};
legend.addTo(map);

//Establishes click function on drop-down menu where user selects the data that appears on the map
  $(".dropdown-menu li a").click(function(){
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    currentData = $(this).data('value');
    console.log(currentData);
    map.eachLayer(function (layer) {map.removeLayer(layer)});//removes all layers
    var addMap = Stamen_TonerLite.addTo(map);//adds back main map later
    style = array[currentData].style;
    geojson = L.geoJson(njData, {
    	style: style,
    	onEachFeature: onEachFeature
    }).addTo(map);
    info.remove();
    info.update = array[currentData].hoverData;
    info.addTo(map);
  });


//Helpful code resources
//Storing functions in arrays...https://stackoverflow.com/questions/3592468/can-i-store-javascript-functions-in-arrays
//Extracting values (my functions) from array...https://stackoverflow.com/questions/14083524/how-to-extract-values-from-an-array-of-arrays-in-javascript
//Hover...https://www.w3schools.com/jquery/event_hover.asp
//Hiding a button...https://stackoverflow.com/questions/1992114/how-do-you-create-a-hidden-div-that-doesnt-create-a-line-break-or-horizontal-sp
//Hiding a button...http://api.jquery.com/hide/
//Buttons overlapping...https://stackoverflow.com/questions/30101484/prevent-buttons-overlapping
//Positioning...https://medium.freecodecamp.org/how-to-use-the-position-property-in-css-to-align-elements-d8f49c403a26
//Click event get ID...https://gis.stackexchange.com/questions/172508/add-an-event-listener-on-a-marker-in-leaflet/172586
//Getting data from array from specific keys...https://javascript.info/array-methods
//Remove each layer...https://leafletjs.com/reference-1.4.0.html#map-eachlayer
//Creating legend by categories...https://gis.stackexchange.com/questions/133630/adding-leaflet-legend
//Creating legend by ranges...https://stackoverflow.com/questions/37701211/custom-legend-image-as-legend-in-leaflet-map
//Adding line break to popup...https://gis.stackexchange.com/questions/31859/how-to-insert-new-line-text-in-popup
//Add buttons over map...https://stackoverflow.com/questions/48665675/adding-custom-buttons-to-leaflet-map
//Removed zoom toogle from map...https://stackoverflow.com/questions/16537326/leafletjs-how-to-remove-the-zoom-control
//Get dropdown value...https://stackoverflow.com/questions/31294815/js-to-get-the-value-of-bootstrap-dropdown
