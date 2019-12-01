function PlotRoute(routePoints, landMarks) {
    var map = MapObject.map;
    var view = MapObject.view;

    if (Array.isArray(routePoints) && routePoints.length > 0) {
        var routeRenderer = {
            type: "simple", // autocasts as new SimpleRenderer()
            symbol: {
                type: "simple-line", // autocasts as SimpleLineSymbol()
                color: [226, 119, 40, 1],
                width: 3
            }
        };
        var route = [];
        route.push(routePoints);
        var geometry = {
                paths: route,
                type: "polyline",
            };
        
        
        var polyline = {geometry:geometry};
        var RouteLayer = map.findLayerById("RouteLayer");
            if (!RouteLayer) {
                require([
                    "esri/layers/FeatureLayer"
                ], function (FeatureLayer) {

                    RouteLayer = new FeatureLayer({
                        fields: [{
                            name: "ObjectID",
                            alias: "ObjectID",
                            type: "oid"
                        }],
                        objectIdField: "ObjectID",
                        spatialReference: {
                            wkid: 4326
                        },
                        outFields: ["*"],
                        source: [polyline],
                        geometryType: "polyline",
                        id: "RouteLayer",
                        title: "RouteLayer",
                        renderer: routeRenderer
                    });
                });
                map.add(RouteLayer);
            } else {
                RouteLayer.applyEdits({
                    addFeatures: [polyline]
                });
            }



    }
    if (Array.isArray(landMarks) && landMarks.length > 0) {
        var landMarkRenderer = {
            type: "simple", // autocasts as new SimpleRenderer()
            symbol: {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [207, 0, 15, 1],
                outline: {
                    // autocasts as new SimpleLineSymbol()
                    color: [255, 255, 255],
                    width: 1
                }
            }
        };
        var LandMarkLayer = map.findLayerById("LandMarkLayer");
        landMarks = landMarks.map((mark, i) => {
            return {
                geometry: mark,
                attributes: {
                    //ObjectID: i
                }
            };
        });
        if (!LandMarkLayer) {
            require([
                "esri/layers/FeatureLayer"
            ], function (FeatureLayer) {
                LandMarkLayer = new FeatureLayer({
                    fields: [{
                        name: "ObjectID",
                        alias: "ObjectID",
                        type: "oid"
                    }],
                    outFields: ["*"],
                    objectIdField: "ObjectID",
                    spatialReference: {
                        wkid: 4326
                    },
                    source: landMarks,
                    geometryType: "point",
                    id: "LandMarkLayer",
                    title: "LandMarkLayer",
                    renderer: landMarkRenderer
                });
            });

            map.add(LandMarkLayer);
        } else {
            LandMarkLayer.applyEdits({
                addFeatures: landMarks
            });
        }

    }
}