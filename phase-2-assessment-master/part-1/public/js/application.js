$(document).ready(function() {
  $('#new_post_link').on('click', function(event) {
    event.preventDefault()

    $.ajax({
      method: "get",
      url: "/posts/new"
    })
    .done(function(data) {
      $("#new_post_link").hide();
      $('#sidebar').append(data)
      bindClick();
    })
    .fail(function() {
      console.log("fail")
    })
  })
})

var bindClick = function() {
  $('#post_form input[type="submit"]').on('click', function(event) {
    event.preventDefault()

    $.ajax({
      method: "post",
      url: "/posts",
      data: $('#post_form').serialize()
    })
    .done(function(data) {
      $('#new_post_link').show();
      $("#post_form").remove();
      $('#posts').prepend(data)
    })
    .fail(function() {
      console.log("fail")
    })
  })
}
