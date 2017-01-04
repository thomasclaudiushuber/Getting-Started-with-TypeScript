var Friend = (function () {
    function Friend() {
        Friend.friendCounter++;
    }
    return Friend;
}());
Friend.friendCounter = 0;
new Friend();
new Friend();
new Friend();
console.log(Friend.friendCounter); // Logs 3
