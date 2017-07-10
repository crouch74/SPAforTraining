(function () {
    'use strict';

    angular
        .module('app.posts')
        .service('PostsService', PostsService);

    PostsService.$inject = ['$http', 'API_URL'];

    function PostsService($http, API_URL) {

        return {
            getAll: getAll,
            getPost: getPost,
            getPostComments: getPostComments
        }

        function getAll() {
            return $http
                .get(API_URL + '/posts')
                .then(function(res){
                    return res.data;
                })
        }

        function getPost(id) {
            return $http
                .get(API_URL + '/posts/' + id)
                .then(function(res){
                    return res.data;
                })
        }

        function getPostComments(id) {
            return $http
                .get(API_URL + `/posts/${id}/comments`)
                .then(function(res){
                    return res.data;
                })
        }

    }
})();