//initializ an empty list to hold shopping items
let shoppingList = [];
let editList = null // track items being edited

//Display list otems
function displayList(){
    const list = document.getElementById("shopping-list")
    list.innerHTML = ""// clear the current list


   // display each item in the shopping list array
    shoppingList.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("shopping-item");
        listItem.innerHTML = `
            <span class="${item.purchased ? 'purchased' : ''}">${item.name}</span>
            <button onclick="markPurchased(${index})">Mark as Purchased</button>
            <button onclick="clearList(${index})">Remove</button>
            <button onclick="editItem(${index})">Edit</button>
        `;
        list.appendChild(listItem);
    });
}

// Add item to shopping list
document.getElementById("add-item").addEventListener("click", function () {
    const inputItem = document.getElementById("new-item");
    const itemName = inputItem.value.trim();

    if (itemName) {
        if (editList === null) {
            // Add new item to the list
            shoppingList.push({ name: itemName, purchased: false });
        } 
        else{
            // Edit the existing item
            shoppingList[editList].name = itemName;
            editList = null; // Clear edit mode after saving the item
        }

        inputItem.value = ""; // Clear input field
        displayList(); // Re-render the list
    }
});

// Mark item as purchased
function markPurchased(index){
    shoppingList[index].purchased = true
    displayList()
}

// Clear item from shopping list
function clearList(index){
    shoppingList.splice(index, 1) // Removes an item from array
    displayList();
}

// Edit existing item
function editItem(index){
    const inputItem = document.getElementById("new-item")
    inputItem.value = shoppingList[index].name // set input field to current item
    inputItem = index
}

// Clear Entire shopping list
document.getElementById("clear-item").addEventListener("click", function () {
    shoppingList = [];
    displayList(); // Re-render list
});

displayList()