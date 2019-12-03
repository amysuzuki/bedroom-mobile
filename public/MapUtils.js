function setUI(){
    var view = MapObject.view;
    var map = MapObject.map;
    require(["esri/widgets/LayerList","esri/widgets/Expand"], function(LayerList,Expand) {
        var layList = new LayerList({
            view: view
        });
        var expand = new Expand({
            expandIconClass: "esri-icon-layer-list",
            view: view,
            content: layList,
            title:"LayerList Expand"
        });
        view.ui.add(expand,"top-right");
    });
}
function stringToPath(pathStr){
    var path=[];
    var pathStrArr =pathStr.split(",");
    for(var i = 0; i<pathStrArr.length;i+=2){
        path.push([parseFloat(pathStrArr[i]),parseFloat(pathStrArr[i+1])]);
    }
    return path;
}
function stringToLandMarks(pointsStr){
    var landMarks=[];
    var pointStrArr =pointsStr.split(",");
    for(var i = 0; i<pointStrArr.length;i+=2){
        landMarks.push(
            {
                y: pointStrArr[i],
                x: pointStrArr[i+1],
                type:"point"
            });
    }
    return landMarks;
}