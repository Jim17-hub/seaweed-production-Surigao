var wms_layers = [];


        var lyr_OpenStreetMapHOT_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap H.O.T.',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });
var format_MUNICIPALWATERS_1 = new ol.format.GeoJSON();
var features_MUNICIPALWATERS_1 = format_MUNICIPALWATERS_1.readFeatures(json_MUNICIPALWATERS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPALWATERS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPALWATERS_1.addFeatures(features_MUNICIPALWATERS_1);
var lyr_MUNICIPALWATERS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPALWATERS_1, 
                style: style_MUNICIPALWATERS_1,
                popuplayertitle: "MUNICIPAL WATERS",
                interactive: true,
                title: '<img src="styles/legend/MUNICIPALWATERS_1.png" /> MUNICIPAL WATERS'
            });
var format_SANPEDROSEAWEEDSAREA_2 = new ol.format.GeoJSON();
var features_SANPEDROSEAWEEDSAREA_2 = format_SANPEDROSEAWEEDSAREA_2.readFeatures(json_SANPEDROSEAWEEDSAREA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SANPEDROSEAWEEDSAREA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SANPEDROSEAWEEDSAREA_2.addFeatures(features_SANPEDROSEAWEEDSAREA_2);
var lyr_SANPEDROSEAWEEDSAREA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SANPEDROSEAWEEDSAREA_2, 
                style: style_SANPEDROSEAWEEDSAREA_2,
                popuplayertitle: "SAN PEDRO SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/SANPEDROSEAWEEDSAREA_2.png" /> SAN PEDRO SEAWEEDS AREA'
            });
var format_SUGBAYSEAWEEDSAREA_3 = new ol.format.GeoJSON();
var features_SUGBAYSEAWEEDSAREA_3 = format_SUGBAYSEAWEEDSAREA_3.readFeatures(json_SUGBAYSEAWEEDSAREA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUGBAYSEAWEEDSAREA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUGBAYSEAWEEDSAREA_3.addFeatures(features_SUGBAYSEAWEEDSAREA_3);
var lyr_SUGBAYSEAWEEDSAREA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUGBAYSEAWEEDSAREA_3, 
                style: style_SUGBAYSEAWEEDSAREA_3,
                popuplayertitle: "SUGBAY SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/SUGBAYSEAWEEDSAREA_3.png" /> SUGBAY SEAWEEDS AREA'
            });
var format_DANAWANSEAWEEDSAREA_4 = new ol.format.GeoJSON();
var features_DANAWANSEAWEEDSAREA_4 = format_DANAWANSEAWEEDSAREA_4.readFeatures(json_DANAWANSEAWEEDSAREA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAWANSEAWEEDSAREA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAWANSEAWEEDSAREA_4.addFeatures(features_DANAWANSEAWEEDSAREA_4);
var lyr_DANAWANSEAWEEDSAREA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANAWANSEAWEEDSAREA_4, 
                style: style_DANAWANSEAWEEDSAREA_4,
                popuplayertitle: "DANAWAN SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/DANAWANSEAWEEDSAREA_4.png" /> DANAWAN SEAWEEDS AREA'
            });
var format_BAYBAYSEAWEEDSAREA_5 = new ol.format.GeoJSON();
var features_BAYBAYSEAWEEDSAREA_5 = format_BAYBAYSEAWEEDSAREA_5.readFeatures(json_BAYBAYSEAWEEDSAREA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAYBAYSEAWEEDSAREA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAYBAYSEAWEEDSAREA_5.addFeatures(features_BAYBAYSEAWEEDSAREA_5);
var lyr_BAYBAYSEAWEEDSAREA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAYBAYSEAWEEDSAREA_5, 
                style: style_BAYBAYSEAWEEDSAREA_5,
                popuplayertitle: "BAYBAY SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/BAYBAYSEAWEEDSAREA_5.png" /> BAYBAY SEAWEEDS AREA'
            });
var format_BITAUGANSEAWEEDSAREA_6 = new ol.format.GeoJSON();
var features_BITAUGANSEAWEEDSAREA_6 = format_BITAUGANSEAWEEDSAREA_6.readFeatures(json_BITAUGANSEAWEEDSAREA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BITAUGANSEAWEEDSAREA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BITAUGANSEAWEEDSAREA_6.addFeatures(features_BITAUGANSEAWEEDSAREA_6);
var lyr_BITAUGANSEAWEEDSAREA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BITAUGANSEAWEEDSAREA_6, 
                style: style_BITAUGANSEAWEEDSAREA_6,
                popuplayertitle: "BITAUGAN SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/BITAUGANSEAWEEDSAREA_6.png" /> BITAUGAN SEAWEEDS AREA'
            });
var format_CAGUTSANSEAWWEEDSAREA_7 = new ol.format.GeoJSON();
var features_CAGUTSANSEAWWEEDSAREA_7 = format_CAGUTSANSEAWWEEDSAREA_7.readFeatures(json_CAGUTSANSEAWWEEDSAREA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAGUTSANSEAWWEEDSAREA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAGUTSANSEAWWEEDSAREA_7.addFeatures(features_CAGUTSANSEAWWEEDSAREA_7);
var lyr_CAGUTSANSEAWWEEDSAREA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAGUTSANSEAWWEEDSAREA_7, 
                style: style_CAGUTSANSEAWWEEDSAREA_7,
                popuplayertitle: "CAGUTSAN SEAWWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/CAGUTSANSEAWWEEDSAREA_7.png" /> CAGUTSAN SEAWWEEDS AREA'
            });
var format_SANJOSESEAWEEDSAREA_8 = new ol.format.GeoJSON();
var features_SANJOSESEAWEEDSAREA_8 = format_SANJOSESEAWEEDSAREA_8.readFeatures(json_SANJOSESEAWEEDSAREA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SANJOSESEAWEEDSAREA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SANJOSESEAWEEDSAREA_8.addFeatures(features_SANJOSESEAWEEDSAREA_8);
var lyr_SANJOSESEAWEEDSAREA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SANJOSESEAWEEDSAREA_8, 
                style: style_SANJOSESEAWEEDSAREA_8,
                popuplayertitle: "SAN JOSE SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/SANJOSESEAWEEDSAREA_8.png" /> SAN JOSE SEAWEEDS AREA'
            });
var format_SABANGSEAWEEDSAREA_9 = new ol.format.GeoJSON();
var features_SABANGSEAWEEDSAREA_9 = format_SABANGSEAWEEDSAREA_9.readFeatures(json_SABANGSEAWEEDSAREA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SABANGSEAWEEDSAREA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SABANGSEAWEEDSAREA_9.addFeatures(features_SABANGSEAWEEDSAREA_9);
var lyr_SABANGSEAWEEDSAREA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SABANGSEAWEEDSAREA_9, 
                style: style_SABANGSEAWEEDSAREA_9,
                popuplayertitle: "SABANG SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/SABANGSEAWEEDSAREA_9.png" /> SABANG SEAWEEDS AREA'
            });
var format_BILABIDSEAWEEDSAREA_10 = new ol.format.GeoJSON();
var features_BILABIDSEAWEEDSAREA_10 = format_BILABIDSEAWEEDSAREA_10.readFeatures(json_BILABIDSEAWEEDSAREA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BILABIDSEAWEEDSAREA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BILABIDSEAWEEDSAREA_10.addFeatures(features_BILABIDSEAWEEDSAREA_10);
var lyr_BILABIDSEAWEEDSAREA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BILABIDSEAWEEDSAREA_10, 
                style: style_BILABIDSEAWEEDSAREA_10,
                popuplayertitle: "BILABID SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/BILABIDSEAWEEDSAREA_10.png" /> BILABID SEAWEEDS AREA'
            });
var format_ALEGRIASEAWEEDSAREA_11 = new ol.format.GeoJSON();
var features_ALEGRIASEAWEEDSAREA_11 = format_ALEGRIASEAWEEDSAREA_11.readFeatures(json_ALEGRIASEAWEEDSAREA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALEGRIASEAWEEDSAREA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALEGRIASEAWEEDSAREA_11.addFeatures(features_ALEGRIASEAWEEDSAREA_11);
var lyr_ALEGRIASEAWEEDSAREA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALEGRIASEAWEEDSAREA_11, 
                style: style_ALEGRIASEAWEEDSAREA_11,
                popuplayertitle: "ALEGRIA SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/ALEGRIASEAWEEDSAREA_11.png" /> ALEGRIA SEAWEEDS AREA'
            });
var format_NONOCSEAWEEDSAREA_12 = new ol.format.GeoJSON();
var features_NONOCSEAWEEDSAREA_12 = format_NONOCSEAWEEDSAREA_12.readFeatures(json_NONOCSEAWEEDSAREA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NONOCSEAWEEDSAREA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONOCSEAWEEDSAREA_12.addFeatures(features_NONOCSEAWEEDSAREA_12);
var lyr_NONOCSEAWEEDSAREA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONOCSEAWEEDSAREA_12, 
                style: style_NONOCSEAWEEDSAREA_12,
                popuplayertitle: "NONOC SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/NONOCSEAWEEDSAREA_12.png" /> NONOC SEAWEEDS AREA'
            });
var format_MANJAGAOSEAWEEDSAREA_13 = new ol.format.GeoJSON();
var features_MANJAGAOSEAWEEDSAREA_13 = format_MANJAGAOSEAWEEDSAREA_13.readFeatures(json_MANJAGAOSEAWEEDSAREA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANJAGAOSEAWEEDSAREA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANJAGAOSEAWEEDSAREA_13.addFeatures(features_MANJAGAOSEAWEEDSAREA_13);
var lyr_MANJAGAOSEAWEEDSAREA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANJAGAOSEAWEEDSAREA_13, 
                style: style_MANJAGAOSEAWEEDSAREA_13,
                popuplayertitle: "MANJAGAO SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/MANJAGAOSEAWEEDSAREA_13.png" /> MANJAGAO SEAWEEDS AREA'
            });
var format_AURORASEAWEEDSAREA_14 = new ol.format.GeoJSON();
var features_AURORASEAWEEDSAREA_14 = format_AURORASEAWEEDSAREA_14.readFeatures(json_AURORASEAWEEDSAREA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AURORASEAWEEDSAREA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AURORASEAWEEDSAREA_14.addFeatures(features_AURORASEAWEEDSAREA_14);
var lyr_AURORASEAWEEDSAREA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AURORASEAWEEDSAREA_14, 
                style: style_AURORASEAWEEDSAREA_14,
                popuplayertitle: "AURORA SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/AURORASEAWEEDSAREA_14.png" /> AURORA SEAWEEDS AREA'
            });
var format_LISONDRASEAWEEDSAREA_15 = new ol.format.GeoJSON();
var features_LISONDRASEAWEEDSAREA_15 = format_LISONDRASEAWEEDSAREA_15.readFeatures(json_LISONDRASEAWEEDSAREA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LISONDRASEAWEEDSAREA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LISONDRASEAWEEDSAREA_15.addFeatures(features_LISONDRASEAWEEDSAREA_15);
var lyr_LISONDRASEAWEEDSAREA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LISONDRASEAWEEDSAREA_15, 
                style: style_LISONDRASEAWEEDSAREA_15,
                popuplayertitle: "LISONDRA SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/LISONDRASEAWEEDSAREA_15.png" /> LISONDRA SEAWEEDS AREA'
            });
var format_NABAGOSEAWEEDSAREA_16 = new ol.format.GeoJSON();
var features_NABAGOSEAWEEDSAREA_16 = format_NABAGOSEAWEEDSAREA_16.readFeatures(json_NABAGOSEAWEEDSAREA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NABAGOSEAWEEDSAREA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NABAGOSEAWEEDSAREA_16.addFeatures(features_NABAGOSEAWEEDSAREA_16);
var lyr_NABAGOSEAWEEDSAREA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NABAGOSEAWEEDSAREA_16, 
                style: style_NABAGOSEAWEEDSAREA_16,
                popuplayertitle: "NABAGO SEAWEEDS AREA",
                interactive: true,
                title: '<img src="styles/legend/NABAGOSEAWEEDSAREA_16.png" /> NABAGO SEAWEEDS AREA'
            });
var lyr_DEMSCWGS84copy_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM-SC-WGS84 copy",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEMSCWGS84copy_17.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13962262.593791, 1081088.997682, 13997390.077553, 1110931.162393]
                            })
                        });
var lyr_DEMSCWGS84_18 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM-SC-WGS84",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEMSCWGS84_18.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13962262.593791, 1081088.997682, 13997390.077553, 1110931.162393]
                            })
                        });
var format_POLITICALBDRY_19 = new ol.format.GeoJSON();
var features_POLITICALBDRY_19 = format_POLITICALBDRY_19.readFeatures(json_POLITICALBDRY_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLITICALBDRY_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLITICALBDRY_19.addFeatures(features_POLITICALBDRY_19);
var lyr_POLITICALBDRY_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLITICALBDRY_19, 
                style: style_POLITICALBDRY_19,
                popuplayertitle: "POLITICAL BDRY.",
                interactive: true,
                title: '<img src="styles/legend/POLITICALBDRY_19.png" /> POLITICAL BDRY.'
            });

lyr_OpenStreetMapHOT_0.setVisible(true);lyr_MUNICIPALWATERS_1.setVisible(true);lyr_SANPEDROSEAWEEDSAREA_2.setVisible(true);lyr_SUGBAYSEAWEEDSAREA_3.setVisible(true);lyr_DANAWANSEAWEEDSAREA_4.setVisible(true);lyr_BAYBAYSEAWEEDSAREA_5.setVisible(true);lyr_BITAUGANSEAWEEDSAREA_6.setVisible(true);lyr_CAGUTSANSEAWWEEDSAREA_7.setVisible(true);lyr_SANJOSESEAWEEDSAREA_8.setVisible(true);lyr_SABANGSEAWEEDSAREA_9.setVisible(true);lyr_BILABIDSEAWEEDSAREA_10.setVisible(true);lyr_ALEGRIASEAWEEDSAREA_11.setVisible(true);lyr_NONOCSEAWEEDSAREA_12.setVisible(true);lyr_MANJAGAOSEAWEEDSAREA_13.setVisible(true);lyr_AURORASEAWEEDSAREA_14.setVisible(true);lyr_LISONDRASEAWEEDSAREA_15.setVisible(true);lyr_NABAGOSEAWEEDSAREA_16.setVisible(true);lyr_DEMSCWGS84copy_17.setVisible(true);lyr_DEMSCWGS84_18.setVisible(true);lyr_POLITICALBDRY_19.setVisible(true);
var layersList = [lyr_OpenStreetMapHOT_0,lyr_MUNICIPALWATERS_1,lyr_SANPEDROSEAWEEDSAREA_2,lyr_SUGBAYSEAWEEDSAREA_3,lyr_DANAWANSEAWEEDSAREA_4,lyr_BAYBAYSEAWEEDSAREA_5,lyr_BITAUGANSEAWEEDSAREA_6,lyr_CAGUTSANSEAWWEEDSAREA_7,lyr_SANJOSESEAWEEDSAREA_8,lyr_SABANGSEAWEEDSAREA_9,lyr_BILABIDSEAWEEDSAREA_10,lyr_ALEGRIASEAWEEDSAREA_11,lyr_NONOCSEAWEEDSAREA_12,lyr_MANJAGAOSEAWEEDSAREA_13,lyr_AURORASEAWEEDSAREA_14,lyr_LISONDRASEAWEEDSAREA_15,lyr_NABAGOSEAWEEDSAREA_16,lyr_DEMSCWGS84copy_17,lyr_DEMSCWGS84_18,lyr_POLITICALBDRY_19];
lyr_MUNICIPALWATERS_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SANPEDROSEAWEEDSAREA_2.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', });
lyr_SUGBAYSEAWEEDSAREA_3.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', });
lyr_DANAWANSEAWEEDSAREA_4.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', });
lyr_BAYBAYSEAWEEDSAREA_5.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', 'AREA (HA)': 'AREA (HA)', });
lyr_BITAUGANSEAWEEDSAREA_6.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', });
lyr_CAGUTSANSEAWWEEDSAREA_7.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', 'AREA (HA)': 'AREA (HA)', });
lyr_SANJOSESEAWEEDSAREA_8.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', });
lyr_SABANGSEAWEEDSAREA_9.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', });
lyr_BILABIDSEAWEEDSAREA_10.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', });
lyr_ALEGRIASEAWEEDSAREA_11.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', });
lyr_NONOCSEAWEEDSAREA_12.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', });
lyr_MANJAGAOSEAWEEDSAREA_13.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', });
lyr_AURORASEAWEEDSAREA_14.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', });
lyr_LISONDRASEAWEEDSAREA_15.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', });
lyr_NABAGOSEAWEEDSAREA_16.set('fieldAliases', {'id': 'id', 'BARANGAY': 'BARANGAY', 'COMMODITY': 'COMMODITY', });
lyr_POLITICALBDRY_19.set('fieldAliases', {'ID': 'ID', 'ID2': 'ID2', 'Barangays': 'Barangays', 'Areaha': 'Areaha', 'Population': 'Population', 'peopleperh': 'peopleperh', });
lyr_MUNICIPALWATERS_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SANPEDROSEAWEEDSAREA_2.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', });
lyr_SUGBAYSEAWEEDSAREA_3.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', });
lyr_DANAWANSEAWEEDSAREA_4.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', });
lyr_BAYBAYSEAWEEDSAREA_5.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', 'AREA (HA)': 'Range', });
lyr_BITAUGANSEAWEEDSAREA_6.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', });
lyr_CAGUTSANSEAWWEEDSAREA_7.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', 'AREA (HA)': 'Range', });
lyr_SANJOSESEAWEEDSAREA_8.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', });
lyr_SABANGSEAWEEDSAREA_9.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', });
lyr_BILABIDSEAWEEDSAREA_10.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', });
lyr_ALEGRIASEAWEEDSAREA_11.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', });
lyr_NONOCSEAWEEDSAREA_12.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', });
lyr_MANJAGAOSEAWEEDSAREA_13.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', });
lyr_AURORASEAWEEDSAREA_14.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', });
lyr_LISONDRASEAWEEDSAREA_15.set('fieldImages', {'id': 'TextEdit', 'BARANGAY': 'TextEdit', 'COMMODITY': 'TextEdit', });
lyr_NABAGOSEAWEEDSAREA_16.set('fieldImages', {'id': '', 'BARANGAY': '', 'COMMODITY': '', });
lyr_POLITICALBDRY_19.set('fieldImages', {'ID': 'TextEdit', 'ID2': 'TextEdit', 'Barangays': 'TextEdit', 'Areaha': 'TextEdit', 'Population': 'TextEdit', 'peopleperh': 'TextEdit', });
lyr_MUNICIPALWATERS_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SANPEDROSEAWEEDSAREA_2.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', });
lyr_SUGBAYSEAWEEDSAREA_3.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', });
lyr_DANAWANSEAWEEDSAREA_4.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', });
lyr_BAYBAYSEAWEEDSAREA_5.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', 'AREA (HA)': 'no label', });
lyr_BITAUGANSEAWEEDSAREA_6.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', });
lyr_CAGUTSANSEAWWEEDSAREA_7.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', 'AREA (HA)': 'no label', });
lyr_SANJOSESEAWEEDSAREA_8.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', });
lyr_SABANGSEAWEEDSAREA_9.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', });
lyr_BILABIDSEAWEEDSAREA_10.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', });
lyr_ALEGRIASEAWEEDSAREA_11.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', });
lyr_NONOCSEAWEEDSAREA_12.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', });
lyr_MANJAGAOSEAWEEDSAREA_13.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', });
lyr_AURORASEAWEEDSAREA_14.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', });
lyr_LISONDRASEAWEEDSAREA_15.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', });
lyr_NABAGOSEAWEEDSAREA_16.set('fieldLabels', {'id': 'no label', 'BARANGAY': 'no label', 'COMMODITY': 'no label', });
lyr_POLITICALBDRY_19.set('fieldLabels', {'ID': 'no label', 'ID2': 'no label', 'Barangays': 'no label', 'Areaha': 'no label', 'Population': 'no label', 'peopleperh': 'no label', });
lyr_POLITICALBDRY_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'overlay';
});