
const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }

    function getCandy(candyStore, id) { 
        return candyStore.candies.find(p => p.id == id);
    }
    console.log(getCandy(candyStore, "as12f"));
    console.log(getCandy(candyStore, "5hd7y"));
    
    function getPrice(candyStore, id) { 
        const mycandy = candyStore.candies.find(p => p.id == id);
        return mycandy.price;
    }
    console.log(`The price is : ${getPrice(candyStore, "as12f")}`);
    console.log(`The price is : ${getPrice(candyStore, "5hd7y")}`);
    
    function addCandy(candyStore, id, name, price) {
        candyStore.candies.push({name: name, id: id, price: price, amount: 1});
    }
    addCandy(candyStore, "1000b", "Milka", 5);
    console.log(candyStore.candies);
    
    function buy(candyStore, id) {
        candyStore.cashRegister += candyStore.candies.find(p => p.id == id).price;
        candyStore.candies.find(p => p.id == id).amount--;
    }
    buy(candyStore, "as12f");
    console.log(getCandy(candyStore, "as12f"));

    
    