function orderPizza(flavor, callback) {
    console.log("Ordering a " + flavor + " pizza...");
    // Simulate pizza being made
    setTimeout(() => {
        console.log("Pizza is ready!");
        callback(); // Call you back when pizza is done
    }, 2000); // 2 seconds wait
}

function eatPizza() {
    console.log("Eating the pizza! Yum 😋");
}

orderPizza("Margherita", eatPizza);
0