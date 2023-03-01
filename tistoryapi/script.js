function getAuthenticationCode() {
  var client_id = $('#client_id').val().trim();
  var redirect_uri = $('#redirect_uri').val().trim();
  var response_type = "code";
  var state = "anything";
  
  if (!client_id || !redirect_uri) {
  alert("client_id와 redirect_uri를 입력해주세요.");
  return;
  }
  
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
  var blogName = $('#blogName').val().trim();
  
  if (!access_token || !blogName) {
  alert("access_token과 blogName을 입력해주세요.");
  return;
  }
  
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
  var item = $("<li></li>").text(category.name + " --> id : " + category.id);
  list.append(item);
  }
  $('#response').html(list);
  },
  error: function (xhr, status, error) {
  $('#response').html('Error: ' + error);
  }
  });
  }
  
  async function getAccessTokenInCli() {
  var client_id = $('#client_id').val().trim();
  var client_secret = $('#client_secret').val().trim();
  var redirect_uri = $('#redirect_uri').val().trim();
  var code = $('#code').val().trim();
  
  if (!client_id || !client_secret || !redirect_uri || !code) {
  alert("client_id, client_secret, redirect_uri, code를 모두 입력해주세요.");
  return;
  }
  
  const response = await fetch("https://officialpractice-bfcfa.web.app/getAccessToken?client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&code=${code}", {
  method: 'GET',
  headers: {
  'Content-Type': 'application/json'
  }
  });
  
  const data = await response.text().then((result) => {
  console.log(result)
  $('#tokenresponse').html(result);
  })
  .catch((error) => {
  console.log(result)
  $('#tokenresponse').html('Error: ' + error.message);
  });
  }