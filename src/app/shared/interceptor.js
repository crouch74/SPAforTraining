(function() {
    angular
        .module('app.shared')
        .service('APIInterceptor', function() {
            return {
                request: request,
                responseError: responseError
            };

            function request(config) {
                config.headers.language = "en";
                return config;
            }

            function responseError(response) {
                console.log(response.status);
                return response;
            }
        });
})();