// function seenreplace(a, b) {
//   return b.replace('Seen', 'Violently rejected');
// }


$("._li").bind("DOMSubtreeModified", function() {

    // $( "span", ".seen" ).text(seenreplace(index,currentcontent));

    // fuck it, copy achal's firefox stuff
    var seenElems = document.getElementsByClassName('seen');
    for (var i = 0; i < seenElems.length; ++i) {
        var seen = seenElems[i].firstChild.nextSibling.firstChild;
        seen.nodeValue = seen.nodeValue.replace('Seen', 'Violently rejected');
    }
});