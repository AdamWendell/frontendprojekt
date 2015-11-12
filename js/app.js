/**
 * Created by Adam Wendell on 2015-11-02.
 */


//Github ajax

function dryGetter(url, inputClass) {
  $.getJSON(url, function(data){
    $(inputClass).append('<div> Stars: ' + data.stargazers_count + '</div> <div> Forks: ' + data.forks + '</div> <div> Subscribers: ' + data.subscribers_count + '</div> <div> Updated: ' + data.updated_at.split('T')[0] +'</div>' )
  })
}

dryGetter("https://api.github.com/repos/emberjs/ember.js", ".embergit");
dryGetter("https://api.github.com/repos/angular/angular.js", ".angulargit");
dryGetter("https://api.github.com/repos/jashkenas/backbone", ".backbonegit");
dryGetter("https://api.github.com/repos/facebook/react", ".reactgit");


//Nav funktionalitet

//Fult men funkar. Testa att försöka göra en DRY funktion senare.

$(".ember").click(function () {
  $('.show').removeClass('show');
  $('#ember').addClass('show');
});

$(".websmith").click(function () {
  $('.show').removeClass('show');
  $('#websmith').addClass('show');
});

$(".angular").click(function () {
  $('.show').removeClass('show');
  $('#angular').addClass('show');
});
$(".backbone").click(function () {
  $('.show').removeClass('show');
  $('#backbone').addClass('show');
});
$(".react").click(function () {
  $('.show').removeClass('show');
  $('#react').addClass('show');
});


// Animation

$(".content").click(function () {
  $(this).animate({backgroundColor: "black", opacity: 3/4, color: "white"}, "slow");
});