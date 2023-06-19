const menuItems = [
    { //index 0 //data as object
    id : 1,
    item:"Food Item1",
    oneliner: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, qui.",
    img  : "food1.jpg",
    hotel:"Hotel Name1",
    desc: "One Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo dolores eveniet provident, eum praesentium. Lorem ipsum dolor sit amet."
 },
 { 
    id : 2,
    item:"Food Item2",
    oneliner: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, qui.eveniet provident, eum praesentiu",
    img  : "food2.jpg",
    hotel:"Hotel2 Name2",
    desc: "Two Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo dolores eveniet provident, eum praesentium. Lorem ipsum dolor sit amet. eveniet provident, eum praesentiu",
 },
 {
    id : 3,
    item:"Food Item3",
    oneliner: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, qui. adipisicing elit. Maxime, qui. dol",
    img  : "food3.jpg",
    hotel:"Hotel3 Name3",
    desc: "Third Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo dolores eveniet provident, um praesentiu"
 },
 {
    id : 4,
    item:"Food Item4",
    oneliner: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, qui. dolor  sit amet con adipisicing elit. Maxime, qui. dolor  sit amet con",
    img  : "food4.jpg",
    hotel:"Hotel4 Name4",
    desc: "Two Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo dolores eveniet t.eveniet provident, eum praesentiu"
 },
 {
    id : 5,
    item: "Food Item5",
    oneliner:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, qui.",
    img  : "food5.jpg",
    hotel:"Hotel5 Name5",
    desc: "Two Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo dolores ever sit amet. these foods are better"
 }
];

//need to create variables to access my data I'll got this using by DOM

const  item = document.getElementById('item');
const  oneLiner = document.getElementById('onLiner');
const  img = document.getElementById('img');
const  hotel = document.getElementById('hotel');
const  desc = document.getElementById('desc');
const  prev = document.getElementById('prev');
const  random = document.getElementById('random');
const  next = document.getElementById('next');

let CurrentMenu = 0;


window.addEventListener('DOMContentLoaded', function(){
    // let menu = menuItems[CurrentMenu];
    // item.textContent=menu.item;
    // oneLiner.textContent=menu.oneliner;///
    // img.src=menu.img;
    // hotel.textContent =menu.hotel;
    // desc.textContent=menu.desc;
    allMenu(CurrentMenu);
});

const allMenu = ()=>{
    let menu = menuItems[CurrentMenu];
    item.textContent=menu.item;
    oneLiner.textContent=menu.oneliner;///
    img.src=menu.img;
    hotel.textContent =menu.hotel;
    desc.textContent=menu.desc;
}

//random menu 
random.addEventListener('click',()=>{
    CurrentMenu=Math.floor(Math.random()*menuItems.length);
    allMenu(CurrentMenu);
})

//prev
prev.addEventListener('click',()=>{
    CurrentMenu--;
    if(CurrentMenu < 0){
        CurrentMenu=menuItems.length-1;
    }
    allMenu(CurrentMenu);
})

//next
next.addEventListener('click',()=>{
    CurrentMenu++;
    if(CurrentMenu>menuItems.length-1){
        CurrentMenu=0;
    }
    allMenu(CurrentMenu);
})
