/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let arr = new Array(rooms.length).fill(false);

    let queue = [rooms[0]]
    arr[0] = true
    while(queue.length>0){
        let v = queue.pop();
        for(let i =0; i<v.length; i++){
            if(v[i] == 0 || arr[v[i]]) continue;
            arr[v[i]] = true;
            queue.push(rooms[v[i]])
        }
    }

    for(let i =0; i<arr.length;i++){
        if(arr[i] == false) return false;
    }
    return true;
};