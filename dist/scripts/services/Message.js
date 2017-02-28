(function() {
    /** 
    * @ function Message
    * @ desc Retrieve messages from firebase database, filter by roomId
    * @param {service} $firebaseArray
    */
    function Message ($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref.orderByChild("roomId"));
        
        return {
            all: messages,
            getByRoomId: function(roomId) {
                var test = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
                console.log(test);
                return test;
            }, 
            send: function (newMessage) {                
                ref.push(newMessage);
                console.log(ref);
                // takes a message object as an argument and submits it to your Firebase server
            }
    };
    }
    
    angular 
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();