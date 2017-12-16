'use strict';

app.controller("ProjectsCtrl", function ($scope, FireBaseService) {
    const getProjects = () => {
        FireBaseService.getAllProjects().then((results) => {
            $scope.projects = results;
        }).catch((err) => {
            console.log("error in getAllProjects", err);
        });
    };
    getProjects();
});