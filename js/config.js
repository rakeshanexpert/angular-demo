var app = angular.module("mainApp", ['ngRoute'])
		.config(function($routeProvider){
  			$routeProvider.when("/home",{
  				templateUrl:"template/home.html",
  				controller:"homeController"
  			})
  			.when("/course",{
  				templateUrl:"template/course.html",
  				controller:"courseController"
  			})
  			.when("/student",{
  				templateUrl:"template/student.html",
  				controller:"studentController"
  			})
  			.otherwise({
  				redirectTo:"/home"
  			})
  			
		})
		.controller("homeController",function($scope){
		  	 $scope.message= "Home Page";
		  })
		.controller("courseController",function($scope){
		  	 $scope.course= ["C#","C++","Java","PHP"];
		  })
		.controller("studentController",function($scope,$http){
		  	var url = "json/json-tab-data.js";
			$http.get(url).success(function(resp){
				$scope.students = resp.records;
			});
		})
		.controller("navigationMenu",function($scope,$http){
		  	var url = "json/json-navigation.js";
			$http.get(url).success(function(resp){
				$scope.navList = resp.menu;
			});
		})
		
