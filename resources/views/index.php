<!DOCTYPE html>
<html ng-app="oweyaa">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <base href="/" />
        <script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-route.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-mocks.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-sanitize.min.js"></script>
        <script src="assets/angularjs/ng-file-upload/ng-file-upload-shim.min.js"></script>
        <script src="assets/angularjs/ng-file-upload/ng-file-upload.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDIZ0z53CvLJ5szQiBvtOx2y4fyqghSAR8"></script>
        <script src="js/frontend/directives/google-places-autocomplete.js"></script>
        <script src="js/angularApp.js"></script>

        <!-- Company Controllers -->
        <script src="js/frontend/controllers/company/browse-interns.controller.js"></script>
        <script src="js/frontend/controllers/company/dashboard.controller.js"></script>
        <script src="js/frontend/controllers/company/favorite-interns.controller.js"></script>
        <script src="js/frontend/controllers/company/project-submission.controller.js"></script>
        <script src="js/frontend/controllers/company/project-dashboard.controller.js"></script>
        <script src="js/frontend/controllers/company/purchase-membership.controller.js"></script>
        <script src="js/frontend/controllers/company/addon.controller.js"></script>
        <script src="js/frontend/controllers/company/request-discount.controller.js"></script>

        <!-- Home Page controllers -->
        <script src="js/frontend/controllers/home/company.controller.js"></script>
        <script src="js/frontend/controllers/home/home.controller.js"></script>
        <script src="js/frontend/controllers/home/veteran.controller.js"></script>
        <script src="js/frontend/controllers/home/contact.controller.js"></script>
        <script src="js/frontend/controllers/home/register.controller.js"></script>
        <script src="js/frontend/controllers/home/forgotPassword.controller.js"></script>

        <!-- Veteran Controllers -->
        <script src="js/frontend/controllers/veteran/currentInternships.controller.js"></script>
        <script src="js/frontend/controllers/veteran/internship.controller.js"></script>
        <script src="js/frontend/controllers/veteran/profile.controller.js"></script>

        <!-- Admin Controllers -->
        <script src="js/frontend/controllers/admin/login.controller.js"></script>
        <script src="js/frontend/controllers/admin/dashboard.controller.js"></script>
        <script src="js/frontend/controllers/admin/match-project.controller.js"></script>

        <!-- Directive Controllers -->
        <script src="js/frontend/directives/footer/footer.directive.js"></script>
        <script src="js/frontend/directives/navbar/navbar.directive.js"></script>
        <script src="js/frontend/directives/footer/footer.controller.js"></script>
        <script src="js/frontend/directives/navbar/navbar.controller.js"></script>
        <script src="js/frontend/directives/file-upload.controller.js"></script>

        <!-- Services/Factories -->
        <script src="js/frontend/services/authentication.service.js"></script>
        <script src="js/frontend/services/user.service.js"></script>
        <script src="js/frontend/services/admin.service.js"></script>

        <!-- Filters -->
        <script src="js/frontend/filters/sortInterns.filter.js"></script>

        <!-- Veteran Modal Controllers -->
        <script src="js/frontend/modals/home/login/login.modal.controller.js"></script>
        <script src="js/frontend/modals/veteran/action/action.modal.controller.js"></script>
        <script src="js/frontend/modals/veteran/career/career.modal.controller.js"></script>
        <script src="js/frontend/modals/veteran/education/education.modal.controller.js"></script>
        <script src="js/frontend/modals/veteran/journal/journal.modal.controller.js"></script>
        <script src="js/frontend/modals/veteran/skill/skill.modal.controller.js"></script>
        <script src="js/frontend/modals/veteran/social/social.modal.controller.js"></script>
        <script src="js/frontend/modals/veteran/availibility/availibility.modal.controller.js"></script>
        <script src="js/frontend/modals/veteran/contact/contact.modal.controller.js"></script>
        <script src="js/frontend/modals/veteran/portfolio/portfolio.modal.controller.js"></script>
        <script src="js/frontend/modals/veteran/task/task.modal.controller.js"></script>

         <!-- Company Modal Controllers -->
        <script src="js/frontend/modals/company/purchaseMembership/purchaseMembership.modal.controller.js"></script>
        <script src="js/frontend/modals/company/companySettingsInfo/company-settings.modal.controller.js"></script>
        <script src="js/frontend/modals/company/companySettingsStats/company-settings-stats.modal.controller.js"></script>
        <script src="js/frontend/modals/company/selectIntern/select-intern.modal.controller.js"></script>
        <script src="js/frontend/modals/company/purchaseAddon/purchaseAddon.modal.controller.js"></script>

        <!-- Typography -->
        <!-- Roboto -->
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

		<!-- Font Awesome -->
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

        <script src="assets/scripts/script.js"></script>
		 <!--Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	    <link href="assets/stylesheets/style.css" rel="stylesheet"/>
        <link rel="stylesheet" href="js/frontend/directives/google-places-autocomplete.css">

    </head>
    <body>
        <div ng-view>
        </div>
    <script src="https://js.stripe.com/v3/"></script>

    </body>
</html>
