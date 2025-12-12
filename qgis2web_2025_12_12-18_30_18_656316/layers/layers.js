var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_inundaciones_10deAgosto_1 = new ol.format.GeoJSON();
var features_inundaciones_10deAgosto_1 = format_inundaciones_10deAgosto_1.readFeatures(json_inundaciones_10deAgosto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inundaciones_10deAgosto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inundaciones_10deAgosto_1.addFeatures(features_inundaciones_10deAgosto_1);
var lyr_inundaciones_10deAgosto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_inundaciones_10deAgosto_1, 
                style: style_inundaciones_10deAgosto_1,
                popuplayertitle: 'inundaciones_10 de Agosto',
                interactive: true,
    title: 'inundaciones_10 de Agosto<br />\
    <img src="styles/legend/inundaciones_10deAgosto_1_0.png" /> Marcel Laniado<br />\
    <img src="styles/legend/inundaciones_10deAgosto_1_1.png" /> Prof. Kleber FrancoCruz<br />\
    <img src="styles/legend/inundaciones_10deAgosto_1_2.png" /> Avd. 10 de Agosto<br />\
    <img src="styles/legend/inundaciones_10deAgosto_1_3.png" /> Zaruma<br />\
    <img src="styles/legend/inundaciones_10deAgosto_1_4.png" /> 23 de Abril<br />\
    <img src="styles/legend/inundaciones_10deAgosto_1_5.png" /> Avd.10 de Agosto-<br />\
    <img src="styles/legend/inundaciones_10deAgosto_1_6.png" /> El Guabo<br />\
    <img src="styles/legend/inundaciones_10deAgosto_1_7.png" /> Enrique Reinoso Esquivel<br />\
    <img src="styles/legend/inundaciones_10deAgosto_1_8.png" /> Quinto Callejon<br />' });
var format_Areas_inundadas_10deAgosto_2 = new ol.format.GeoJSON();
var features_Areas_inundadas_10deAgosto_2 = format_Areas_inundadas_10deAgosto_2.readFeatures(json_Areas_inundadas_10deAgosto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_inundadas_10deAgosto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_inundadas_10deAgosto_2.addFeatures(features_Areas_inundadas_10deAgosto_2);
var lyr_Areas_inundadas_10deAgosto_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_inundadas_10deAgosto_2, 
                style: style_Areas_inundadas_10deAgosto_2,
                popuplayertitle: 'Areas_inundadas_10 de Agosto',
                interactive: true,
    title: 'Areas_inundadas_10 de Agosto<br />\
    <img src="styles/legend/Areas_inundadas_10deAgosto_2_0.png" /> Alto<br />\
    <img src="styles/legend/Areas_inundadas_10deAgosto_2_1.png" /> Bajo<br />\
    <img src="styles/legend/Areas_inundadas_10deAgosto_2_2.png" /> Medio<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_inundaciones_10deAgosto_1.setVisible(true);lyr_Areas_inundadas_10deAgosto_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_inundaciones_10deAgosto_1,lyr_Areas_inundadas_10deAgosto_2];
lyr_inundaciones_10deAgosto_1.set('fieldAliases', {'fid': 'fid', 'Calles': 'Calles', 'Riesgos': 'Riesgos', 'Longitud': 'Longitud', 'Evidencia de Inundaciones Pluviales': 'Evidencia de Inundaciones Pluviales', });
lyr_Areas_inundadas_10deAgosto_2.set('fieldAliases', {'fid': 'fid', 'Riesgos': 'Riesgos', 'area_ha': 'area_ha', 'Observaciones': 'Observaciones', 'Fecha': 'Fecha', 'Causas principales': 'Causas principales', 'Frecuencia Anual': 'Frecuencia Anual', });
lyr_inundaciones_10deAgosto_1.set('fieldImages', {'fid': 'TextEdit', 'Calles': 'TextEdit', 'Riesgos': 'TextEdit', 'Longitud': 'TextEdit', 'Evidencia de Inundaciones Pluviales': '', });
lyr_Areas_inundadas_10deAgosto_2.set('fieldImages', {'fid': 'TextEdit', 'Riesgos': 'TextEdit', 'area_ha': 'TextEdit', 'Observaciones': 'TextEdit', 'Fecha': 'DateTime', 'Causas principales': 'TextEdit', 'Frecuencia Anual': 'TextEdit', });
lyr_inundaciones_10deAgosto_1.set('fieldLabels', {'fid': 'no label', 'Calles': 'inline label - always visible', 'Riesgos': 'inline label - always visible', 'Longitud': 'inline label - always visible', 'Evidencia de Inundaciones Pluviales': 'no label', });
lyr_Areas_inundadas_10deAgosto_2.set('fieldLabels', {'fid': 'no label', 'Riesgos': 'inline label - always visible', 'area_ha': 'inline label - always visible', 'Observaciones': 'inline label - always visible', 'Fecha': 'inline label - always visible', 'Causas principales': 'inline label - always visible', 'Frecuencia Anual': 'inline label - always visible', });
lyr_Areas_inundadas_10deAgosto_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});