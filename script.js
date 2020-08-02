// online script for chrome bookmark (make sure the bookmark including "javascript:(", bcuz sometimes Chrome may eat it lol)
javascript:( function main (){var data="";for(var i=0;i<document.getElementsByClassName("sub-tit").length;i++){data+=document.getElementsByClassName("sub-tit")[i].innerText.split(" ")[0]+"\t";data+=document.getElementsByClassName("sub-tit")[i].innerText.split(" ")[2]+"\t";data+=document.getElementsByClassName("blod")[i].innerText+"\t";data+=document.getElementsByClassName("sub-info")[i].children[3].innerText.substring(5)+"\t";data+=document.getElementsByClassName("time")[i].innerText+"\n";}var el = document.createElement('textarea');el.value = data;el.setAttribute('readonly', '');el.style = {position: 'absolute', left: '-9999px'};document.body.appendChild(el);el.select();document.execCommand('copy');document.bÒody.removeChild(el);})();




// all script
javascript:(function main() {
    var data = "";
    for (var i = 0; i < document.getElementsByClassName("sub-tit").length; i++) {
        data += document.getElementsByClassName("sub-tit")[i].innerText.split(" ")[0] + "\t";
        data += document.getElementsByClassName("sub-tit")[i].innerText.split(" ")[2] + "\t";
        data += document.getElementsByClassName("blod")[i].innerText + "\t";
        data += document.getElementsByClassName("sub-info")[i].children[3].innerText.substring(5) + "\t";
        data += document.getElementsByClassName("time")[i].innerText + "\n";
    }

    // save records into clipboard
    var el = document.createElement('textarea');
    el.value = data;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
})();
