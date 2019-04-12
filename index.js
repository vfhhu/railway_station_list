

String.prototype.matchAll = function(regexp) {
    var matches = [];
    this.replace(regexp, function() {
        var arr = ([]).slice.call(arguments, 0);
        var extras = arr.splice(-2);
        arr.index = extras[0];
        arr.input = extras[1];
        matches.push(arr);
    });
    return matches.length ? matches : null;
};
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
var match =$('tbody').html().matchAll(/<td>(\S+)<\/td>\s+\S+\s+class="td-co1\">(\S+)<\/td>/g)
var jsonA1={};
var jsonA2={};
for(var key in match){
    //console.log(match[key][1]+":"+match[key][2]);
    jsonA1[match[key][1]]=match[key][2];
    jsonA2[match[key][2]]=match[key][1];
}
MyDownload(jsonA1,"data1.json");
MyDownload(jsonA2,"data2.json");