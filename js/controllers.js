function CustomerController($scope){
  $scope.testText = "hello";
}

function HelpController($scope){
    $scope.pledgeItems = [
        {'amount':'1,00', 'backers':0, 'text': 'It\'s a start'},
        {'amount':'5,00', 'backers':0, 'text': 'THANKS: your name is mentioned on the site\'s credits page'},
        {'amount':'10,00', 'backers':0, 'text': 'BIG THANKS: your name is mentioned in the top section of the site\'s credits page'},
        {'amount':'15,00', 'backers':0, 'text': 'HANG IT ON YOUR WALL THANKS: a MeTime poster'},
        {'amount':'25,00', 'backers':0, 'text': 'WEARABLE THANKS: a MeTime T-shirt'},
        {'amount':'35,00', 'backers':0, 'text': 'SIGNED THANKS: a signed poster and a T-shirt'},
        {'amount':'50,00', 'backers':0, 'text': 'SIGNED WEARABLE THANKS: a signed poster, a signed T-shirt and a T-shirt which you can actually wear'},
        {'amount':'100,00', 'backers':0, 'text': 'HOODED THANKS: a MeTime hoodie'},
        {'amount':'250,00', 'backers':0, 'text': 'THANK you voucher: of course all of the above plus a voucher for two to enjoy some me time together'}
    ];
}

function NavBarController($scope, $location){
    $scope.$location = $location;
    $scope.navBarItems = [
        {'url':'#/home', 'text':'Home'},
        {'url':'#/about', 'text':'About'},
        {'url': '#/help', 'text': 'Help out'},
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