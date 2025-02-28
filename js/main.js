function werina(le_Type) {
  var tt = "";
  for (let i = 0; i <= data.length - 1; i++) {
    var leNom = data[i].name;
    var leType = data[i].type;
    var leImg = data[i].img;
    var leAudio = data[i].audio;
    var levideo = data[i].video;

    if (le_Type.toLowerCase() == leType.toLowerCase()) {
      tt = tt + "<div>";
      tt =
        tt +
        `<img class ="mesImage" onclick="sma3('${leAudio}')" src="${leImg}">`;
      tt += `<p> ${leNom} </p>`;
      tt += `</div>`;
    }
  }

  document.getElementById("afficher").innerHTML = tt;
}

function sma3(sawt) {
  var a = new Audio(sawt);
  a.play();
}
