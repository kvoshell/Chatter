(function () {
    function UsernameCtrl($uibModalInstance, $cookies) {
        
        // Assign local scope for reference in templates
        var modal = this;
        modal.name = undefined;
        // Set new username and close modal
        modal.open = function () {
            $cookies.put('blocChatCurrentUser', modal.name);
            if (modal.name !== undefined){
                $uibModalInstance.close();
            }   
           
        }

    }
    
    angular 
        .module('blocChat')
        .controller('UsernameCtrl',['$uibModalInstance', '$cookies', UsernameCtrl]);
})();