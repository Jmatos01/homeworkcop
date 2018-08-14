//Linked List Class

function LinkedList() {
    this.head = null;
    //this.tail = null;
}


//Actual Node 

function Node(name, level, phone, value, next, prev) {
    this.name = name;
    this.level = level;
    this.phone = phone;
    this.value = value;
    this.next = next;
    this.prev = prev;
}

//Function that will add players to head 

LinkedList.prototype.addToHead = function(name, level, phone, value) {
    const newNode = new Node(name, level, phone, value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode; 
    this.head = newNode;
};

// Search by number 
LinkedList.prototype.search = function(phone) {
    let currentNode = this.head;
    
    while(currentNode) {
      if (currentNode.phone === phone) return currentNode.name;
      currentNode = currentNode.next; 
      //let x = currentNode.name;
      //document.getElementById("output").innerHTML += x;
    }
    return null;
}


// All players 
// LinkedList.prototype.allPlayers = function() {
//     let node = this.head;
//     if(node){
//         while(node.next){
//             node = node.next;
//             console.log(node.name);
//         }
//     }
// }

///Testing Testing
// myObj = linkedlist.allPlayers();
//     for (x in myObj) {
//     document.getElementById("output").innerHTML += x;
//     }

LinkedList.prototype.allPlayers = function() {
    let node = this.head;
    if(node){
        while(node.next){
        node = node.next;
        let x = node.name;
        document.getElementById("output").innerHTML += x;
        }
    }
}










// a constance is created. 
var linkedlist = new LinkedList();


// adding players into the linked list 

linkedlist.addToHead("Thanos", 10, 7862611851,"Alien");
linkedlist.addToHead("DR Strange", 8, 7868523698,"Wizard");
linkedlist.addToHead("Star Lord", 7, 7867845123,"Space Pirate");
linkedlist.addToHead("Thor", 9, 7869741223,"God");
linkedlist.addToHead("Penny", 5, 7868965412,"Next Level Human");
linkedlist.addToHead("Mantis", 4, 7868741236,"Space Pirate");
linkedlist.addToHead("DR Doom", 6, 7869874561,"Next Level Human");
linkedlist.addToHead("Black Panther", 8, 7863214568,"King");
linkedlist.addToHead("Winter Soldier", 7, 7868745369,"Next Level Human");
linkedlist.addToHead("Silver Surfer", 5, 7863218547,"Alien");
linkedlist.addToHead("Professor X", 5, 7863218547,"Next Level Human");
linkedlist.addToHead("Wolverine", 5, 7863218547,"Next Level Human");
linkedlist.addToHead("Mystique", 5, 7863218547,"Next Level Human");
linkedlist.addToHead("Dead Pool", 5, 7863218547,"Next Level Human");
linkedlist.addToHead("Trump", 5, 7863218547,"Evil Bastard");
linkedlist.addToHead("Rick Scot", 5, 7863218547,"Another Evil Bastard");
linkedlist.addToHead("Groot", 5, 7863218547,"Alien/God");
linkedlist.addToHead("Captain America", 5, 7863218547,"Next Level Human");
linkedlist.addToHead("Iron Man", 5, 7863218547,"Human");
linkedlist.addToHead("Hulk", 5, 7863218547,"Crazy Human");

/////////Connecting everything to the front end now. 

const topBtn = (document.getElementById("topten-btn").onclick = function() {
    topTenBtn();
});
let searchBtn = (document.getElementById("number_input_btn").onclick = function() { 
    var phone = document.getElementById("number_input").value;
    console.log(phone);
    searchBtn1(phone);
});
let playerBtn = (document.getElementById("all_players_btn").onclick = function() {
    allPlayersBtn();
});




// function topTenBtn(arr) {
//     document.getElementById("output").innerHTML = "YOU CLICKED ME!";
//     //Use recursion to get there top ten
//   }
  
function searchBtn1(phone) {
    //document.getElementById("output").innerHTML = "YOU CLICKED ME!";
    myObj = linkedlist.search(phone);
    for (x in myObj) {
    console.log(myObj)
    document.getElementById("output").innerHTML += x;
    }
}
  
function allPlayersBtn (arr){
    //document.getElementById("output").innerHTML = "YOU CLICKED ME!";
    myObj = linkedlist.allPlayers();
    for (x in myObj) {
    console.log(myObj)
    document.getElementById("output").innerHTML += x;
    }
}


// myObj = linkedlist.allPlayers();
// for (x in myObj) {
//     document.getElementById("output").innerHTML += x;
// }
