// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
  initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures
function initGestures() {
	// add gestures listener here
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
  $('#rsvpForm').submit(function(e) {

    //prevent default submit + reload(we only want to submit part)
    e.preventDefault();
    console.log("submitting form...");
    var rsvpEmail = $('#rsvpEmail').val();
    //send the post request
    $.post('addRSVP', {rsvpEmail: rsvpEmail}, postCallback);
  });

  function postCallback(res) {
    alert("RSVP form successfully submitted!");
    $('#rsvpEmail').val('');//clear form
  }
}
