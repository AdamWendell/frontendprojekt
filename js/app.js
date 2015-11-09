/**
 * Created by adam on 2015-11-02.
 */

function dryGetter(url, inputClass) {
  $.getJSON(url, function(data){
    $(inputClass).append('<div>' + data.stargazers_count + '</div> <div>' + data.forks + '</div> <div>' + data.subscribers_count + '</div> <div>' + data.updated_at.split('T')[0] +'</div>' )
  })
}

dryGetter("https://api.github.com/repos/facebook/react", ".embergit");