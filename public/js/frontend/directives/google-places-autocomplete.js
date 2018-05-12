angular.module('oweyaa').directive('googleplace', [ function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
                };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
            google.maps.event.addListener(scope.gPlace, 'place_changed', function (e) {
                scope.$apply(function () {
                    model.$setViewValue(element.val());
                    var countrycode = "na";
                    var latitude = 0;
                    var longitude = 0;
                    scope.secondplacebox = scope.chosenPlace;
                    for (var i = 0; i < scope.gPlace.getPlace().address_components.length; i++) {
                        if (scope.gPlace.getPlace().address_components[i].types[0] == 'country') {
                            countrycode = scope.gPlace.getPlace().address_components[i].short_name;
                        }
                    }
                    latitude = scope.gPlace.getPlace().geometry.location.lat().toFixed(6);
                    longitude = scope.gPlace.getPlace().geometry.location.lng().toFixed(6);
                    console.log(scope.gPlace);
                });
            });
        }
    };
}
]);