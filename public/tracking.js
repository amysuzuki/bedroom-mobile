
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
            var sampleSeattleStr="-122.33164825039103,47.591402833998124,-122.31516875820353,47.59418125694164,-122.3021224935551,47.58955047008315,-122.24993743496142,47.588624263539735,-122.23826446132865,47.59325513235093,-122.20667876796931,47.5770452987674,-122.17165984707093,47.57889810523703,-122.18127288418027,47.603441601384844,-122.18951263027402,47.61686618958172,-122.18539275722715,47.634451813444045,-122.17165984707093,47.62889909769926,-122.17303313808654,47.61779189623237,-122.15586700039124,47.61686618958172";
            var sampleSanDiegoStr = "-117.16040710068495,32.71635628748923,-117.15903380966934,32.71288993806583,-117.14907744980606,32.7114455860492,-117.145644222267,32.71288993806583,-117.10272887802877,32.71895596115269,-117.09414580918111,32.70335678260539,-117.09517577744285,32.68804382567807,-117.07457641220851,32.656831935544645,-117.04127410507964,32.67041622781221,-117.01243499375157,32.69671185978829,-117.01792815781405,32.7466810978297,-117.01140502548984,32.753033560259894,-117.0151815757828,32.75707580047155,-117.02273467636871,32.75447723853994";
            var sampleRanchoPathStr = "-117.54733184433688,34.1141890653598,-117.5583181724619,34.1141890653598,-117.55763152695408,34.106514121657234,-117.53394225693455,34.10594557960891,-117.53359893418066,34.10594557960891,-117.4944601402354,34.13863054045183,-117.41892913437609,34.194307955508776,-117.40965942002062,34.2252555215393,-117.34683135605582,34.181244105286495,-117.33344176865347,34.16363310609393,-117.33138183213003,34.17584757671804,-117.31524566269644,34.17840387011694,-117.31455901718863,34.173291205878144,-117.30734923935661,34.173291205878144";
            var ranchoPath = stringToPath(sampleRanchoPathStr);
            var sanDiegoPath = stringToPath(sampleSanDiegoStr);
            var seattlePath = stringToPath(sampleSeattleStr);

            var sampleSeattlePoints = "47.58648398485127,-122.24293761497448,47.592967351573144,-122.32773833518921,47.61842994576939,-122.18079619651752";
            var sampleRanchoPoints = "34.11650978727171,-117.55478131404597,34.14180305014156,-117.46998059383122,34.17362201752975,-117.30587231746426";
            var sampleSanDiegoPoints= "32.71345802745813,-117.14814109637452,32.66780549039614,-117.0520107252809,32.73540915865544,-117.02660484149187";
            var ranchoLandMarks = stringToLandMarks(sampleRanchoPoints);
            var sanDiegoLandMarks = stringToLandMarks(sampleSanDiegoPoints);
            var seattleLandMarks = stringToLandMarks(sampleSeattlePoints);
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
                PlotRoute(ranchoPath,ranchoLandMarks);
                PlotRoute(sanDiegoPath,sanDiegoLandMarks);
                PlotRoute(seattlePath,seattleLandMarks);
            });
        });
    });
}

