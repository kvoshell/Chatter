(function () {
    function UsernameCtrl($uibModalInstance, $cookies, $rootScope) {
        
        // Assign local scope for reference in templates
        var modal = this;
        modal.name = undefined;
        $rootScope.name = modal.name;
        // Set new username and close modal
        modal.open = function () {
            $cookies.put('ChatterCurrentUser', modal.name);
            if (modal.name !== undefined){
                $uibModalInstance.close();
            }   
           
        }

    }
    
    angular 
        .module('Chatter')
        .controller('UsernameCtrl',['$uibModalInstance', '$cookies', '$rootScope', UsernameCtrl]);
})();