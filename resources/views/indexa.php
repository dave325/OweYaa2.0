<!DOCTYPE html>
<html>
    <head>
        <base href="/" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	    <link href="assets/stylesheets/style.css" rel="stylesheet"/>

    </head>
    <body >
    <div id="registerModal">
    <nav class="navbar navbar-fixed-top" id="header-nav">
      <div>
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
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
    <div class="form-group">
      <label form="password">New Password: </label>
      <input type="text" id="password" minlength="5" required="true" name="password" class="form-control" />
    </div> <!-- End of class form-group -->
    <div class="form-group">
      <label form="password">Confirm Password: </label>
      <input type="text" id="password" minlength="5" required="true" name="password" class="form-control" />
    </div> <!-- End of class form-group -->
    <div class="form-group">
      <input type="hidden" name="username" value="<?php echo $GET['username'] ?>" class="form-control" />
    </div> <!-- End of class form-group -->
  </form>
  <footer-base></footer-base>
</div> <!-- End of id registerModal -->
    </body>
</html>