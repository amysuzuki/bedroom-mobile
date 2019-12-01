
var MapObject = {
    map :null,
    view:null
};

function EnableTrackingMap(mapContainerId){
    require([
        "esri/widgets/Track",
        "esri/views/SceneView",
        "esri/Map",
        "esri/Graphic",
        "dom"
    ], function (Track, SceneView, Map, Graphic) {
    
        $(function () {
            //on document rdy
            var map = new Map({
                basemap: "topo"
            });
    
            var view = new SceneView({
                map: map,
                container: mapContainerId,
                center: [-117.187038, 34.057322],
                zoom: 12,
            });
            //<img src="https://img.icons8.com/color/48/000000/mobile-home.png">
            MapObject.map=map;
            MapObject.view=view;
            view.when(function () {
                var markerSymbol = {
                    type: "picture-marker", // autocasts as new PictureMarkerSymbol()
                    url: "https://img.icons8.com/color/24/000000/mobile-home.png",
                    width: "24px",
                    height: "24px"
                };
                var track = new Track({
                    view: view,
                    goToLocationEnabled: true, // disable this since we want to control what happens after our location is acquired
                    graphic: new Graphic({
                        symbol: markerSymbol,
                        scale: 15000
                    }),
    
                });
                view.ui.add(track, "top-left");
                track.start();
                setUI();
            });
        });
    });
}

