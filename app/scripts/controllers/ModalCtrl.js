(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        
        // Assign local scope for reference in templates
        var modal = this;
        
        // Dismiss modal with new room added to Database/Home Page
        modal.open = function() {
            Room.addRoom(modal.room.name);
            $uibModalInstance.close();
        }
        // Dismiss modal without any changes
        modal.cancel = function() {
            $uibModalInstance.dismiss();
        }  
    }    
 
    angular
    .module('Chatter')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();