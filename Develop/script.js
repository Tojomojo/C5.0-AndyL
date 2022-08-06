const colorcode = document.getElementsByClassName("color");
let currentHour = parseInt(moment().format('H'));

// function for clock
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

Array.from(colorcode).forEach(colorcode => {
  let
    colorcodeIdString = colorcode.id,
    colorcodeHour;
  if (colorcodeIdString) {
    colorcodeHour = parseInt(colorcodeIdString);
  }
  if (colorcodeHour) {
    if (currentHour === colorcodeHour) {
      setColor(green);
    } else if ((currentHour < colorcodeHour) && (currentHour > colorcodeHour - 6)) {
      setColor(color, "blue");
    } else if ((currentHour > colorcodeHour) && (currentHour < colorcodeHour + 6)) {
      setColor(color, "red");
    } else {
      setColor(color, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

//changing the text
var placeHolderText = document.querySelector('#placeholder');