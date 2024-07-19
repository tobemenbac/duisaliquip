var boundsStream = {
    width: 800,
    height: 600,
    color: 'blue',
    getPosition: function() {
        return { x: 100, y: 200 };
    }
};

// Accessing properties of the object
console.log(boundsStream.width); // Outputs: 800
console.log(boundsStream.color); // Outputs: 'blue'

// Calling a method defined in the object
var position = boundsStream.getPosition();
console.log(position); // Outputs: { x: 100, y: 200 }
