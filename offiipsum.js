const gestureArea = document.getElementById('gestureArea');

let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

gestureArea.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
}, false);

gestureArea.addEventListener('touchmove', function(event) {
    endX = event.touches[0].clientX;
    endY = event.touches[0].clientY;
}, false);

gestureArea.addEventListener('touchend', function(event) {
    handleGesture();
}, false);

function handleGesture() {
    const diffX = endX - startX;
    const diffY = endY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
            console.log('Swiped right');
        } else {
            console.log('Swiped left');
        }
    } else {
        if (diffY > 0) {
            console.log('Swiped down');
        } else {
            console.log('Swiped up');
        }
    }
}
