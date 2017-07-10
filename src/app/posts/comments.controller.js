(function () {
    'use strict';

    angular
        .module('app.posts')
        .controller('CommentsController', CommentsController);

    CommentsController.$inject = ['PostsService', '$stateParams'];

    function CommentsController(PostsService, $stateParams) {
        var vm = this;


        activate();

        function activate() {
            PostsService
                .getPostComments($stateParams.id)
                .then(function(comments) {
                    vm.comments = comments;
                })
        }
    }
})();