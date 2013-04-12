(function() {
  var app = angular.module('controlMover', []);
  console.log("here");
  app.directive('moveTo', [function() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        elem.appendTo(angular.element(attrs.moveTo));
        scope.$on("$destroy", function() {
          elem.remove();
        });
      }
    };
  }]);
})();
  console.log("yo");
