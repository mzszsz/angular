// create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute']);
   
    scotchApp.config(function($routeProvider,$locationProvider){
    	$locationProvider.baseHref = "/angular";
    	$routeProvider
    	.when('/',{
            title:'Home',
            templateUrl:'pages/home.html',
            controller:'mainController'
        })
        .when('/about',{
            title:'Add Product',
            templateUrl:'pages/add.html',
            controller:'addController',
        })
        .when('/contact',{
            templateUrl:'pages/contact.html',
            controller:'contactController',
            title:'View Listing',
        })
        .when('/view/:id',{
            title:'VIEW PRODUCT',
            templateUrl:'pages/view.html',
            controller:'viewController'
        })
        .when('/about2',{
            title:'About Page',
            templateUrl:'pages/about2.html',
            controller:'about2Controller'
        });
    	$locationProvider.html5Mode(true);
    });

    scotchApp.run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    }]);


    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('addController',function($scope,$http){
    	$scope.message="Here we aRE ON ABOUT page";
    	$scope.addNewBook=function(bookData){
        $http({
            method: 'POST',
            url: "pages/insert.php",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: jQuery.param({'name': $scope.bookData.name,'price': $scope.bookData.price, 'author': $scope.bookData.author})
        }).success(function(data, status, headers, config){
                   
                    $scope.bookData=[];
                    $scope.success=data;
                });
    	}
		
    });

    scotchApp.controller('contactController',function($scope,$http) {
    	$scope.message="Please Contact Us.";
    	$http.post("pages/data.php",{}).success(function(data,status,headers,config){
    		$scope.books=data;
    	});
    });

    scotchApp.controller('viewController',function($scope,$http,$routeParams) {
    	id=$routeParams.id;
        $http({
            method: 'POST',
            url: "pages/data.php",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: jQuery.param({view: 'view', id: id})
        }).success(function(data,status,headers,config){
                $scope.books=data;
            });
    });

    scotchApp.controller('about2Controller',function($scope,$http){
        $scope.title = 'About Us';
        $http({
            url:'api/about.php',
            method:'POST',
            headers:{'Content-Type':"application/x-www-form-urlencoded"},
            data:$.param({id:'1'})
        }).success(function(data,status,headers,config){
            $scope.data=data;
        });
    });

