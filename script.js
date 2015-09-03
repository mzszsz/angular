// create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

   
    scotchApp.config(function($routeProvider,$locationProvider){
    	$locationProvider.baseHref = "/angular";
        $locationProvider.hashPrefix = '!';
    	$routeProvider
    	.when('/',{
    		templateUrl:'pages/home.html',
    		controller:'mainController'
    	})
    	.when('/about',{
    		templateUrl:'pages/add.html',
    		controller:'addController'
    	})
    	.when('/contact',{
    		templateUrl:'pages/contact.html',
    		controller:'contactController'
    	})
    	.when('/view/:id',{
    		templateUrl:'pages/view.html',
    		controller:'viewController'
    	});
    	$locationProvider.html5Mode(true);
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('addController',function($scope,$http){
    	$scope.message="Here we aRE ON ABOUT page";
    	$scope.addNewBook=function(bookData){
    		$http.post("pages/insert.php",{'name': $scope.bookData.name,'price': $scope.bookData.price, 'author': $scope.bookData.author})
		        .success(function(data, status, headers, config){
		            console.log("inserted Successfully");
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

    	$scope.viewBook=function(id){
    		$http.post("pages/data.php",{view:'view',id:id}).success(function(data,status,headers,config){
	    		console.log(data+$routeParams);
	    		$scope.books=data;
    		});
    	}
    	//$scope.products=
    });

    scotchApp.controller('viewController',function($scope,$http,$routeParams) {
    	id=$routeParams.id;
    	//$scope.products=
    	$http.post("pages/data.php",{view:'view',id:id}).success(function(data,status,headers,config){
	    		console.log(data+$routeParams);
	    		$scope.books=data;
    		});
    });
