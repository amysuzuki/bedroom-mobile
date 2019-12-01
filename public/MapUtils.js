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