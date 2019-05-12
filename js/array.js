//Array of text and style data for map page.  Text and style is used in click function of drop-down menu.
array = [
  {hoverData: function (props) {
  	this._div.innerHTML = '<h4>2018 Total Homelessness: 9,303</h4>' +  (props ?
  		'<b>' + props.name + ' County' + '</b><br />' + props.PIT_2018_THP
  		: 'Hover over a County for its specific count'+ '</b><br />'+ 'or' +'</b><br />'+'Select alternate data from Drop-Down menu on left');},
   style: function style(feature) {
   	return {
   		weight: 2,
   		opacity: 1,
   		color: 'NAVY',
   		dashArray: '3',
   		fillOpacity: 0.7,
   		fillColor: getColor(feature.properties.PIT_2018_THP)};}},
    {hoverData: function (props) {
    	this._div.innerHTML = '<h4>2018 Chronic Homelessness: 1,288</h4>' +  (props ?
    		'<b>' + props.name + ' County' + '</b><br />' + props.PIT_2018_CH
    		: 'Hover over a County for its specific count'+ '</b><br />'+ 'or' +'</b><br />'+'Select alternate data from Drop-Down menu on left');},
     style: function style(feature) {
     	return {
     		weight: 2,
     		opacity: 1,
     		color: 'NAVY',
     		dashArray: '3',
     		fillOpacity: 0.7,
     		fillColor: getColor(feature.properties.PIT_2018_CH)};}},
    {hoverData: function (props) {
    	this._div.innerHTML = '<h4>2018 Unsheltered Homelessness: 1,623</h4>' +  (props ?
    		'<b>' + props.name + ' County' + '</b><br />' + props.PIT_2018_USH
    		: 'Hover over a County for its specific count'+ '</b><br />'+ 'or' +'</b><br />'+'Select alternate data from Drop-Down menu on left');},
     style: function style(feature) {
     	return {
     		weight: 2,
     		opacity: 1,
     		color: 'NAVY',
     		dashArray: '3',
     		fillOpacity: 0.7,
     		fillColor: getColor(feature.properties.PIT_2018_USH)};}},
    {hoverData: function (props) {
    	this._div.innerHTML = '<h4>2017 Total Homelessness: 8,532</h4>' +  (props ?
    		'<b>' + props.name + ' County' + '</b><br />' + props.PIT_2017_THP
    		: 'Hover over a County for its specific count'+ '</b><br />'+ 'or' +'</b><br />'+'Select alternate data from Drop-Down menu on left');},
     style: function style(feature) {
     	return {
     		weight: 2,
     		opacity: 1,
     		color: 'NAVY',
     		dashArray: '3',
     		fillOpacity: 0.7,
     		fillColor: getColor(feature.properties.PIT_2017_THP)};}},
      {hoverData: function (props) {
      	this._div.innerHTML = '<h4>2017 Chronic Homelessness: 1,093</h4>' +  (props ?
      		'<b>' + props.name + ' County' + '</b><br />' + props.PIT_2017_CH
      		: 'Hover over a County for its specific count'+ '</b><br />'+ 'or' +'</b><br />'+'Select alternate data from Drop-Down menu on left');},
       style: function style(feature) {
       	return {
       		weight: 2,
       		opacity: 1,
       		color: 'NAVY',
       		dashArray: '3',
       		fillOpacity: 0.7,
       		fillColor: getColor(feature.properties.PIT_2017_CH)};}},
      {hoverData: function (props) {
      	this._div.innerHTML = '<h4>2017 Unsheltered Homelessness: 1,415</h4>' +  (props ?
      		'<b>' + props.name + ' County' + '</b><br />' + props.PIT_2017_USH
      		: 'Hover over a County for its specific count'+ '</b><br />'+ 'or' +'</b><br />'+'Select alternate data from Drop-Down menu on left');},
       style: function style(feature) {
       	return {
       		weight: 2,
       		opacity: 1,
       		color: 'NAVY',
       		dashArray: '3',
       		fillOpacity: 0.7,
       		fillColor: getColor(feature.properties.PIT_2017_USH)};}},
      {hoverData: function (props) {
      	this._div.innerHTML = '<h4>2016 Total Homelessness: 8,941</h4>' +  (props ?
      		'<b>' + props.name + ' County' + '</b><br />' + props.PIT_2016_THP
      		: 'Hover over a County for its specific count'+ '</b><br />'+ 'or' +'</b><br />'+'Select alternate data from Drop-Down menu on left');},
       style: function style(feature) {
       	return {
       		weight: 2,
       		opacity: 1,
       		color: 'NAVY',
       		dashArray: '3',
       		fillOpacity: 0.7,
       		fillColor: getColor(feature.properties.PIT_2016_THP)};}},
        {hoverData: function (props) {
        	this._div.innerHTML = '<h4>2016 Chronic Homelessness: 836</h4>' +  (props ?
        		'<b>' + props.name + ' County' + '</b><br />' + props.PIT_2016_CH
        		: 'Hover over a County for its specific count'+ '</b><br />'+ 'or' +'</b><br />'+'Select alternate data from Drop-Down menu on left');},
         style: function style(feature) {
         	return {
         		weight: 2,
         		opacity: 1,
         		color: 'NAVY',
         		dashArray: '3',
         		fillOpacity: 0.7,
         		fillColor: getColor(feature.properties.PIT_2016_CH)};}},
        {hoverData: function (props) {
        	this._div.innerHTML = '<h4>2016 Unsheltered Homelessness: 1,442</h4>' +  (props ?
        		'<b>' + props.name + ' County' + '</b><br />' + props.PIT_2016_USH
        		: 'Hover over a County for its specific count'+ '</b><br />'+ 'or' +'</b><br />'+'Select alternate data from Drop-Down menu on left');},
         style: function style(feature) {
         	return {
         		weight: 2,
         		opacity: 1,
         		color: 'NAVY',
         		dashArray: '3',
         		fillOpacity: 0.7,
         		fillColor: getColor(feature.properties.PIT_2016_USH)};}}
      ];
