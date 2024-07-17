// Hypothetical usage example
let flags = { active: true, visited: false };

pulse.visit(flags, t => {
    if (flags.active) {
        console.log("Item is active.");
    }
    if (!flags.visited) {
        console.log("Item has not been visited yet.");
    }
})(Math.SQRT2, 2, 4);
