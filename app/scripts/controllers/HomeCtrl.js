(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        
        // Public attributes for Room data, array to contain related messages
        this.rooms = Room.all;
        this.activeRoomValue = null;        
        this.activeRoomId = null;
        this.username = $cookies.get('blocChatCurrentUser');
        this.message = {};
        this.input = undefined;
        this.selectMessages = [];
        
        // Activate current room, assign data to public attributes, retrieve relevant messages 
        this.selectRoom = function(index) {
            this.activeRoomValue = this.rooms[index].$value;
            this.activeRoomId = this.rooms[index].$id;
            this.selectMessages = Message.getByRoomId(this.activeRoomId);
        }        
        
        // Create message object, send to Firebase
        this.newMessage = function() {
            this.message = {
                name: this.username,
                time: this.getTime(),
                content: this.input,
                roomId: this.activeRoomId
            }
            Message.send(this.message);
            //this.selectMessages.push(this.message);
            this.input = null;
        }
        
        // Open a new modal window to create a new room
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
            });
        }
        
        // Retrieve current timestamp, adjust against 24 hour time
        this.getTime = function() {
            var date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            
            if (hours > 12) {hours -= 12;}
            if (hours == 0) {hours = 12;}
            if (minutes < 10) {minutes = '0' + minutes;}
            
            var time = hours + ':' + minutes;
            return time;
        };
        
    }
    angular 
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();