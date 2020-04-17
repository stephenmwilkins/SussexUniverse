function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      xmlDoc = this.responseXML;
      make_talk_list();
    }
  };
  xmlhttp.open("GET", "talks.xml", true);
  xmlhttp.send();
}

function make_talk_list() {

  chosen_subject = 'astronomy';
  console.log(x)
  x = xmlDoc.getElementsByTagName("title");

  for (i = 0; i< x.length; i++) {
    subject = xmlDoc.getElementsByTagName('talk')[i].getAttribute('subject');
    if (chosen_subject==subject) {
      txt += '<div class="talk">'+x[i].childNodes[0].nodeValue;+'</div>';
    }
  }
  document.getElementById("talks").innerHTML += txt;

}
