function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      xmlDoc = this.responseXML;
      make_ALL_talk_list();
    }
  };
  xmlhttp.open("GET", "./talks.xml", true);
  xmlhttp.send();
}

function make_talk_list(chosen_subject) {

  var colors = {"astronomy": "#682CBF", "quantum": "#3E49BB"};

  x = xmlDoc.getElementsByTagName("title");
  txt = "";
  for (i = 0; i< x.length; i++) {
    subject = xmlDoc.getElementsByTagName('talk')[i].getAttribute('subject');
    if (chosen_subject==subject) {
      txt += '<div class="talk">';
      txt += '<div class="talk_subject" style="background-color: '+colors[subject]+';"></div>';
      txt += '<br><br><br><br><br><br><br>';
      txt += '<span class="talk_title">'+x[i].childNodes[0].nodeValue+'</span><br>';
      txt += '<span class="talk_speaker">'+xmlDoc.getElementsByTagName('speaker')[i].childNodes[0].nodeValue+'</span><br>';
      txt += '<span class="talk_date">'+xmlDoc.getElementsByTagName('date')[i].childNodes[0].nodeValue+'</span>';
      txt += '</div>';
    }
  }
  document.getElementById("talks").innerHTML = txt;

}



function make_ALL_talk_list() {

  var colors = {"astronomy": "#682CBF", "quantum": "#3E49BB"};

  x = xmlDoc.getElementsByTagName("title");
  txt = "";
  for (i = 0; i< x.length; i++) {
    subject = xmlDoc.getElementsByTagName('talk')[i].getAttribute('subject');
    txt += '<div class="talk">';
    txt += '<div class="talk_subject" style="background-color: '+colors[subject]+';"></div>';
    txt += '<br><br><br><br><br><br><br>';
    txt += '<span class="talk_title">'+x[i].childNodes[0].nodeValue+'</span><br>';
    txt += '<span class="talk_speaker">'+xmlDoc.getElementsByTagName('speaker')[i].childNodes[0].nodeValue+'</span><br>';
    txt += '<span class="talk_date">'+xmlDoc.getElementsByTagName('date')[i].childNodes[0].nodeValue+'</span>';
    txt += '</div>';
  }
  document.getElementById("talks").innerHTML = txt;

}
