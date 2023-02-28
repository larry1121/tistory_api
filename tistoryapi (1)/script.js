



    function getAuthenticationCode() {
      var client_id = $('#client_id').val().trim();
      var redirect_uri = $('#redirect_uri').val().trim();
      var response_type = "code";
      var state = "anything";

      var url = "https://www.tistory.com/oauth/authorize?" +
        "client_id=" + client_id + "&" +
        "redirect_uri=" + redirect_uri + "&" +
        "response_type=" + response_type + "&" +
        "state=" + state;

        window.open(url);
    }

    function getCategoryID() {
      var access_token = $('#access_token').val().trim();
      var output = "json";
      var blogName = "inner-everest";

      var url = "https://www.tistory.com/apis/category/list?" +
        "access_token=" + access_token + "&" +
        "output=" + output + "&" +
        "blogName=" + blogName;

      $.ajax({
        url: url,
        type: "GET",
        success: function (data) {
            var categories = data.tistory.item.categories;
  var list = $("<ul></ul>");
  for (var i = 0; i < categories.length; i++) {
    var category = categories[i];
    var item = $("<li></li>").text(category.name +" --> id : "+category.id);
    list.append(item);
  }
  $('#response').html(list);
        },
        error: function (xhr, status, error) {
          $('#response').html('Error: ' + error);
        }
      });
    }



function getAccessTokenInCli() {
  
  
var functions = firebase.functions();
var getAccessToken = firebase.functions().httpsCallable('getAccessToken');

var client_id = $('#client_id').val().trim();
var client_secret = $('#client_secret').val().trim();
var redirect_uri = $('#redirect_uri').val().trim();
var code = $('#code').val().trim();

getAccessToken({client_id: client_id, client_secret: client_secret, redirect_uri: redirect_uri, code: code})
  .then((result) => {
    $('#response').html(result.data);
  })
  .catch((error) => {
    $('#response').html('Error: ' + error.message);
  });
}

    // function getAccessToken() {
    //   var client_id = $('#client_id').val();
    //   var client_secret = $('#client_secret').val().trim();
    //   var redirect_uri = $('#redirect_uri').val().trim();
    //   var code = $('#code').val().trim();

    //   var url = "https://www.tistory.com/oauth/access_token";
    //   var data = {
    //     client_id: client_id,
    //     client_secret: client_secret,
    //     redirect_uri: redirect_uri,
    //     code: code,
    //     grant_type: "authorization_code"
    //   };

    //   $.ajax({
    //     url: url,
    //     type: "POST",
    //     data: data,
    //     success: function (data) {
    //       $('#response').html(data);
    //     },
    //     error: function (xhr, status, error) {
    //       $('#response').html('Error: ' + error);
    //     }
    //   });
    // }


