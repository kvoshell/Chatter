(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        console.log(this.rooms);
    }
    
    angular 
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();