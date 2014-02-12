$("._li").bind("DOMSubtreeModified", HandleDOM_Change);
// $("._li").bind("DOMSubtreeModified", HandleDOM_ChangeWithDelay);

var zGbl_DOM_ChangeTimer = null;
function HandleDOM_ChangeWithDelay (zEvent) {
    if (typeof zGbl_DOM_ChangeTimer == "number") {
        clearTimeout(zGbl_DOM_ChangeTimer);
        zGbl_DOM_ChangeTimer = '';
    }
    zGbl_DOM_ChangeTimer = setTimeout(HandleDOM_Change, 5);
}
function HandleDOM_Change() {
    // // .text() must be used with delay
    // $("span", ".seen").text(function(index,currentcontent){
    //     return currentcontent.replace('Seen', 'Violently rejected');
    // });
    $(".seen").each(function(i, obj) {
        var seen = obj.firstChild.nextSibling.firstChild;
        seen.nodeValue = seen.nodeValue.replace('Seen', 'Violently rejected');
    });
}