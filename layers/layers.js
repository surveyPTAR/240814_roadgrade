var wms_layers = [];

var lyr_240801_martabe_photo_2m_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "240801_martabe_photo_2m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/240801_martabe_photo_2m_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11025449.779860, 165195.557783, 11030313.571484, 170988.739848]
                            })
                        });
var format_240817_all_road_martabe_1 = new ol.format.GeoJSON();
var features_240817_all_road_martabe_1 = format_240817_all_road_martabe_1.readFeatures(json_240817_all_road_martabe_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240817_all_road_martabe_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240817_all_road_martabe_1.addFeatures(features_240817_all_road_martabe_1);
var lyr_240817_all_road_martabe_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240817_all_road_martabe_1, 
                style: style_240817_all_road_martabe_1,
                popuplayertitle: "240817_all_road_martabe",
                interactive: true,
    title: '240817_all_road_martabe<br />\
    <img src="styles/legend/240817_all_road_martabe_1_0.png" /> Grade <=12<br />\
    <img src="styles/legend/240817_all_road_martabe_1_1.png" /> Grade >12<br />'
        });

lyr_240801_martabe_photo_2m_0.setVisible(true);lyr_240817_all_road_martabe_1.setVisible(true);
var layersList = [lyr_240801_martabe_photo_2m_0,lyr_240817_all_road_martabe_1];
lyr_240817_all_road_martabe_1.set('fieldAliases', {'GM_LAYER': 'GM_LAYER', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'z_first': 'z_first', 'z_last': 'z_last', 'Length': 'Length', 'Slope_%': 'Slope_%', 'Kategori': 'Kategori', 'id': 'id', 'path': 'path', });
lyr_240817_all_road_martabe_1.set('fieldImages', {'GM_LAYER': 'TextEdit', 'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'z_first': 'TextEdit', 'z_last': 'TextEdit', 'Length': 'TextEdit', 'Slope_%': 'TextEdit', 'Kategori': 'TextEdit', 'id': 'TextEdit', 'path': 'TextEdit', });
lyr_240817_all_road_martabe_1.set('fieldLabels', {'GM_LAYER': 'no label', 'LAYER': 'no label', 'GM_TYPE': 'no label', 'z_first': 'no label', 'z_last': 'no label', 'Length': 'no label', 'Slope_%': 'no label', 'Kategori': 'no label', 'id': 'no label', 'path': 'no label', });
lyr_240817_all_road_martabe_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});