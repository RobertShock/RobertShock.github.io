'use strict';

app.controller("BlogCtrl", function ($scope, FireBaseService) {
    const getBlogs = () => {
        FireBaseService.getAllBlogs().then((results) => {
            $scope.blogs = results;
        }).catch((err) => {
            console.log("error in getAllBlogs", err);
        });
    };
    getBlogs();
});