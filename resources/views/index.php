<!DOCTYPE html>
<html ng-app="oweyaa">
    <head>
        <base href="/" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-route.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-mocks.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-sanitize.min.js"></script>
        <script src="/public/views/app.js"></script>

        <!-- Company Controllers -->
        <script src="/views/frontend/controllers/company/browse-interns.controller.js"></script>
        <script src="/views/frontend/controllers/company/dashboard.controller.js"></script>
        <script src="/views/frontend/controllers/company/favorite-interns.controller.js"></script>
        <script src="/views/frontend/controllers/company/project-submission.controller.js"></script>

        <!-- Home Page controllers -->
        <script src="/views/frontend/controllers/home/company.controller.js"></script>
        <script src="/views/frontend/controllers/home/home.controller.js"></script>
        <script src="/views/frontend/controllers/home/veteran.controller.js"></script>
        <script src="/views/frontend/controllers/home/contact.controller.js"></script>
        <script src="/views/frontend/controllers/home/register.controller.js"></script>

        <!-- Veteran Controllers -->
        <script src="/views/frontend/controllers/veteran/career.controller.js"></script>
        <script src="/views/frontend/controllers/veteran/internship.controller.js"></script>
        <script src="/views/frontend/controllers/veteran/profile.controller.js"></script>

        <!-- Directive Controllers -->
        <script src="/views/frontend/directives/footer/footer.directive.js"></script>
        <script src="/views/frontend/directives/navbar/navbar.directive.js"></script>
        <script src="/views/frontend/directives/footer/footer.controller.js"></script>
        <script src="/views/frontend/directives/navbar/navbar.controller.js"></script>

        <!-- Services/Factories -->
        <script src="/views/frontend/services/authentication.service.js"></script>
        <script src="/views/frontend/services/user.service.js"></script>

        <!-- Modal Controllers -->
        <script src="/views/frontend/modals/home/login/login.modal.controller.js"></script>
        <script src="/views/frontend/modals/veteran/action/action.modal.controller.js"></script>
        <script src="/views/frontend/modals/veteran/career/career.modal.controller.js"></script>
        <script src="/views/frontend/modals/veteran/education/education.modal.controller.js"></script>
        <script src="/views/frontend/modals/veteran/journal/journal.modal.controller.js"></script>
        <script src="/views/frontend/modals/veteran/skill/skill.modal.controller.js"></script>
        <script src="/views/frontend/modals/veteran/social/social.modal.controller.js"></script>

		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

		<!-- Font Awesome -->
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

        <script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>

		 <!--Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	    <link href="/assets/stylesheets/style.css" rel="stylesheet"/>

    </head>
    <body ng-view>

    </body>
</html>