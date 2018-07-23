<!DOCTYPE html>
<html>
    <head>
        <base href="/" />
	<!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	    <link href="assets/stylesheets/style.css" rel="stylesheet"/>

    </head>
    <body >
    <div id="registerModal" class="container col-xs-12">
  <nav class="navbar col-xs-12" id="header-nav" style="position:relative">
    <div>
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="glyphicon glyphicon-menu-hamburger" style="font-size:1.5em"></span>
          </button>

        <a href="/">
            <img alt="OweYaa" src="assets/images/logo.png" height="72" width="72" style="margin-left:25px">
          </a>
      </div>
    </div>
  </nav>

  <form novalidate method="post" name="registerModal" class="col-md-8 col-xs-12 col-md-offset-2">
    <h2 class="text-center"> Forgot password</h2>
    <div id="message"></div>
    <div class="form-group">
      <label form="password">New Password: </label>
      <input type="password" id="password" minlength="5" required="true" name="password" class="form-control" />
    </div>
    <!-- End of class form-group -->
    <div class="form-group">
      <label form="password">Confirm Password: </label>
      <input type="password" id="confirmPass" minlength="5" required="true" name="confirmPass" class="form-control" />
    </div>
    <!-- End of class form-group -->
    <button id="submit">Submit</button>
  </form>
  <footer-base></footer-base>
</div>
<!-- End of id registerModal -->
<script>
  function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }
  let submitBtn = document.getElementById('submit');

    function submit(ev) {

      ev.preventDefault();
      let password = document.getElementById('password').value;
  let confirmPass = document.getElementById('confirmPass').value;

  if (password === confirmPass) {
    let data = {
      "email": getQueryStringValue('email'),
      "password": password
    }
    if(document.getElementById('message').hasChildNodes()){
    document.getElementById('message').removeChild(document.getElementById('msg'));
    }
      fetch('/api/updatePass', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response){
        if(response.ok) {
          return response.blob();
        }
        throw new Error('Issue');
        }).then(function(res) {
        let message = document.createElement('h2');
        message.setAttribute('id','msg');
        message.textContent = "Successful! You are being redirected to the home page! ";
        document.getElementById('message').append(message);
        setTimeout(function(){
          //window.location = '/';
        },1000);
      }).catch(function(err) {
        let message = document.createElement('h2');
        message.setAttribute('id','msg');
        message.textContent = "An error occurred. Please try again.";
        document.getElementById('message').append(message);
      });
    }else{
    let message = document.createElement('h2');
    message.setAttribute('id','msg');
    message.textContent = "Passwords do not match";
    document.getElementById('message').append(message);
  }
    }
    submitBtn.addEventListener('click',submit);
</script>
  </body>
</html>
