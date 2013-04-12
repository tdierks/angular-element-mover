function DemoController($scope) {
  $scope.panels = [
    { title: "Colors", file: "colors.html" },
    { title: "Numbers", file: "numbers.html" },
  ];
  $scope.panel = $scope.panels[0];
}