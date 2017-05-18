
 var mainApp = angular.module("mainApp", ['ngAnimate']);
    mainApp.controller('studentController', function($scope,$http) {
	var url = "json/json-data.js";
	$http.get(url).success( function(response) {
	   $scope.students = response;
	});
 });
 
  //for tab controller

mainApp.controller('tabController', function($scope,$http) {
	//tab click event binding
	$scope.tabList = 1;
	$scope.selectTab  = function(newTab){
	  $scope.tabList = newTab;
	};
	$scope.isSelected = function(tabNum){
	  return $scope.tabList === tabNum;
	};

	//first tab list data
	var url = "json/json-tab-data.js";
	$http.get(url).success(function(resp){
		$scope.optsList = resp.records;
	});

	//second tab data
	var url = "json/json-tab-data.js";
	$http.get(url).success(function(resp){
		$scope.secondOptsList = resp.records;
	});

});

//shorting-tab data
mainApp.controller('tabSortController', function($scope,$http) {
	var url = "json/json-tab-data.js";
	$http.get(url).success(function(resp){
		$scope.optsList = resp.records;

		$scope.sortColumn = "heading";
		$scope.reverseSort = false;

		$scope.sortData = function(column){
			$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
			$scope.shortColumn = column;
		}

		
	});
});

//Navigation
mainApp.controller('navController', function($scope,$http) {
	var url = "json/json-nav-data.js";
	$http.get(url).success(function(resp){
	$scope.navdata = resp.navDaraRecord;                         
             
	});                
});

//Slider

mainApp.controller('homeController', function($scope,$http) {

    var url = "json/json-tab-data.js";
	$http.get(url).success(function(resp){
		$scope.slides = resp.records;
	});

    $scope.direction = 'left';
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
    //console.log(index);

    $scope.prevSlide = function () {
        $scope.direction = 'left';
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.direction = 'right';
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };

});
		


	


