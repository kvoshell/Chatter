(function() {
    function Message ($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref.orderByChild("roomId"));
        
        return {
            all: messages,
            getByRoomId: function(roomId) {
                var test = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
                //var test =  messages; /*$firebaseArray(ref.orderByChild("roomId").equalTo(roomId));*/
                console.log(test);
                return test;
            }
        
      
    };
    }
    
    angular 
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();