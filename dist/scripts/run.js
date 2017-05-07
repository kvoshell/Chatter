(function() {
    function ChatterCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('ChatterCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/username.html',
                controller: 'UsernameCtrl as username',
            })
        }
    }

    angular
        .module('Chatter')
        .run(['$cookies', '$uibModal', ChatterCookies]);
 })();