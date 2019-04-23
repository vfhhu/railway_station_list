//https://tip.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/goTH41

var areaA=new Array();
var tipCity=$(".btn.tipCity");
var index=0;
for(var i=0;i<tipCity.length;i++){
    var city=$(tipCity[i]);
    if(city.attr("data-type")=="cityHot")continue;
    var stn=new Array();
    var code=new Array();
    var areacode=city.attr("data-type");
    var stations=$("#"+areacode+" button");
    for(var k=0;k<stations.length;k++){
        var station=$(stations[k]).attr("title");
        var stationA=station.split("-");
        var stationCode=stationA[0];
        var stationName=stationA[1];
        stn.push(stationName);
        code.push(stationCode);
    }
    var area={id:index,cname:city.html(),ename:city.html(),stn:stn,code:code};
    areaA[index]=area;
    index++;
}

var tipLine=$(".btn.tipLine");
for(var i=0;i<tipLine.length;i++){
    var city=$(tipLine[i]);
    var stn=new Array();
    var code=new Array();
    var areacode=city.attr("data-type");
    var stations=$("#"+areacode+" button");
    for(var k=0;k<stations.length;k++){
        var station=$(stations[k]).attr("title");
        var stationA=station.split("-");
        var stationCode=stationA[0];
        var stationName=stationA[1];
        stn.push(stationName)
        code.push(stationCode)
    }
    var area={id:index,cname:city.html(),ename:city.html(),stn:stn,code:code};
    areaA[index]=area;
    index++;
}
function MyDownload(storageObj,downloadName) {
    var data=JSON.stringify(storageObj);
    //data = data.replaceAll(/\\\\/,"\\");

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(data);
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    if(dlAnchorElem==null){
        $( "body" ).append( "<a id=\"downloadAnchorElem\" style=\"display:none\"></a>" );
        dlAnchorElem = document.getElementById('downloadAnchorElem');
    }
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", downloadName);
    dlAnchorElem.click();
}
MyDownload(areaA,"area.json");