const colorcode = document.getElementsByClassName("color");
let currentHour = parseInt(moment().format('H'));

// function for clock
// function displayTime() {
//     var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
//     timeDisplayEl.text(rightNow);
// }

$('#time-display').text(moment().format('MMM DD, YYYY [at] hh:mm:ss a'))
//displayTime();

//changing color of blocks that depend on time of day
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
$('.edit_btn').on('click', function() {
    console.log(typeof($(this).attr('value')))
    // $(this).children('.images').attr('src', './images/bluelock-unlocked.png')
    if ($(this).attr('value') === 'true') {
        console.log('Hello')
        $(this).attr('value', 'false')
        $(this).children('.images').attr('src', './images/bluelock-unlocked.png')
        $(this).siblings('#event-name-input').removeClass('hide')
    } 
    // if ($(this).attr('value') === 'false') {
    //     $(this).attr('value', 'true')
    //     $(this).children('.images').attr('src', './images/bluelock-locked.webp')
    // }


})
// enabling or disabling the event textbox: should be dissabled on default and enabled by clicking the lock img to unlock it
// $(document).ready(function() {
//     var disabled = false;
//     $('#submit').click(function() {
//         if (disabled) {
//             $("#name").prop('disabled', false);       // if disabled, enable
//         }
//         else {
//             $("#name").prop('disabled', true);        // if enabled, disable
//         }
//         disabled = !disabled;
//     })
// });

//changing the text
var placeHolderText = document.querySelector('#placeholder');

//saving the events on local storage
