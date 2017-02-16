(function() {
    
    /** 
    * @ function Room
    * @ desc Retrieve rooms from firebase database, return as property on Room object
    * @param {service} $firebaseArray
    */
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
            
        return {
            all: rooms,
            addRoom: function(roomName) {
                rooms.$add(roomName);              
            },
            removeRoom: function(roomName) {
                rooms.$remove(roomName);
            }
        }
    }
        
    angular 
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();