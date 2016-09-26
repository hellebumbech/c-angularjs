(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var maxSize = 3;
  var positiveAnswer = "Enjoy";
  var negativeAnswer = "Too much!";
  var emptyInputAnswer = "Please enter data first";
  $scope.lunchInput = "";
  $scope.lunchAnswer = "";
  $scope.lunchAnswerClass = "";
  $scope.textboxClass = "";

  $scope.checkLunch = function() {
    if($scope.lunchInput == "") {
      $scope.lunchAnswer = emptyInputAnswer;
      $scope.lunchAnswerClass = "redTextColor";
      $scope.textboxClass = "borderRed";
    }
    else {
      var listOfItems = $scope.lunchInput.split(',');
      var numberOfItems = 0;
      // ignore if there is no text between commas
      for(var i=0; i < listOfItems.length; i++) {
        if(listOfItems[i] != "") {
          numberOfItems += 1;
        }
      }
      // does not consider linebreaks in textarea
      $scope.lunchAnswer = (numberOfItems > 3 ? negativeAnswer : positiveAnswer);
      $scope.lunchAnswerClass = "greenTextColor";
      $scope.textboxClass = "borderGreen";
    };
  };
};
})();
