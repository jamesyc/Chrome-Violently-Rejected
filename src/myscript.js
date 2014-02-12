$("._li").bind("DOMSubtreeModified", function() {

	// console.log($( "span", ".seen" ).html());

    // fuck it, copy achal's firefox stuff, jquery is annoying
    var seenElems = document.getElementsByClassName('seen');
    for (var i = 0; i < seenElems.length; ++i) {
        var seen = seenElems[i].firstChild.nextSibling.firstChild;
        seen.nodeValue = seen.nodeValue.replace('Seen', 'Violently rejected');
    }
});