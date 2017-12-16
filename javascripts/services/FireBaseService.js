'use strict';

app.service("FireBaseService", function($http, $q, FIREBASE_CONFIG) {

    const getAllBlogs = () => {
        let blogs = [];
        return $q(( resolve, reject ) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs.json`).then(( results ) => {
                let fbBlogs = results.data;
                Object.keys(fbBlogs).forEach(( key ) => {
                    fbBlogs[key].id = key;
                    blogs.push(fbBlogs[key]);                    
                });
                resolve(blogs);
            }).catch((err) => {
                console.log('error in getAllBlogs:', err);
            });
        });
    };
    
    const getAllProjects = () => {
        let projects = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/projects.json`).then((results) => {
                let fbProjects = results.data;
                    Object.keys(fbProjects).forEach((key) => {
                        fbProjects[key].id = key;
                        projects.push(fbProjects[key]);
                    });
                resolve(projects);
            }).catch((err) => {
                console.log('error in fbProjects', err);
            });
        });
    };
    return {getAllBlogs, getAllProjects};
});