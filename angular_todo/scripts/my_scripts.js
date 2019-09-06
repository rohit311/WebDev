angular.module("todoApp",[])
.controller("todoCntrl",function($scope){
    $scope.todoLst = new Array();
    $scope.todoRec = new Object();
    $scope.showlist = false;

    this.submitData = function(){
        let cloneRec = Object.create($scope.todoRec); 
        $scope.todoLst.push(cloneRec);
        $scope.todoRec = new Object();
        console.log($scope.showlist);
        if(!$scope.showlist && $scope.todoLst.length >0){
            $scope.showlist = true;
        }
    }
    
});