function PlotRoute(routePoints,landMarks) {
    var map = MapObject.map;
    var view = MapObject.view;

    if (Array.isArray(routePoints) && routePoints.length > 0) {
        var route = [];
        route.push(routePoints);
        var geometry = {
            paths: route,
            type: "polyline"
        };
        var symbol = {
            type: "simple-line", // autocasts as SimpleLineSymbol()
            color: [226, 0, 40, 0.6],
            width: 5
        };
        
        var RouteLayer = map.findLayerById("RouteLayer");
        if (RouteLayer) {
            map.remove(RouteLayer);
        }
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
                source: [{
                    geometry: geometry,
                    symbol: symbol,
                    attributes: {
                        ObjectID: 1
                    }
                }],
                geometryType: "polyline",
                id: "RouteLayer",
                title: "RouteLayer"
            });
        });
        
        map.add(RouteLayer);

    }
    if(Array.isArray(landMarks) && landMarks.length>0){
        var LandMarkLayer = map.findLayerById("LandMarkLayer");
        if (LandMarkLayer) {
            map.remove(LandMarkLayer);
        }
        landMarks=landMarks.map((mark,i)=>{
            return {
                geometry:mark.geometry,
                symbol:mark.symbol,
                attributes: {
                    ObjectID: i
                }
            };
        });
        require([
            "esri/layers/FeatureLayer"
        ], function (FeatureLayer) {
            LandMarkLayer = new FeatureLayer({
                fields: [{
                    name: "ObjectID",
                    alias: "ObjectID",
                    type: "oid"
                }],
                objectIdField: "ObjectID",
                spatialReference: {
                    wkid: 4326
                },
                source: landMarks,
                geometryType: "points",
                id: "LandMarkLayer",
                title: "LandMarkLayer"
            });
        });
        
        map.add(LandMarkLayer);
    }
}