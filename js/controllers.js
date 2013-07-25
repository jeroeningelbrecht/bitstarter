function CustomerController($scope){
  $scope.testText = "hello";
}

function NavBarController($scope, $location){
    $scope.$location = $location;
    $scope.navBarItems = [
        {'url':'#/home', 'text':'Home'},
        {'url':'#/about', 'text':'About'},
        {'url':'#/suggestionlist', 'text':'Suggestion List'},
        {'url':'#/shops', 'text':'Shop Owners'},
        {'url':'#/contact', 'text':'Contact'}
    ];

    $scope.toggleStatus = function(navBarItem){
        angular.forEach($scope.navBarItems, function(navBarItem){
               navBarItem.status = 'notActive';
        });
        navBarItem.status = 'active';
    };
}