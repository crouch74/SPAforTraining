(function(){

    'use strict';

    angular
        .module('app.posts')
        .config(routeConfig);


    routeConfig.$inject = ['$stateProvider']
    function routeConfig($stateProvider) {
        $stateProvider
            .state('posts', {
                url: '/posts',
                templateUrl: './app/posts/posts.template.html',
                controller: 'PostsController',
                controllerAs: 'vm'
            })
            .state('comments', {
                url: '/posts/{id:int}/comments',
                templateUrl: './app/posts/comments.template.html',
                controller: 'CommentsController',
                controllerAs: 'vm'
            });
    }

})();