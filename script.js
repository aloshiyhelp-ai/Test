let products = [
  {id:1, name:"Qirg'iz salat", price:300, cat:"salat"},
  {id:2, name:"Gnezdo", price:260, cat:"salat"},
  {id:3, name:"Lagman", price:350, cat:"hot"},
  {id:4, name:"Shorpo", price:280, cat:"sup"}
];

let cart = [];

function render(list){
  let box = document.getElementById("products");
  box.innerHTML = "";

  list.forEach(p=>{
    box.innerHTML += `
      <div class="card">
        <h4>${p.name}</h4>
        <p>${p.price} som</p>
        <button onclick="add(${p.id})">+ Qo‘shish</button>
      </div>
    `;
  });
}

function add(id){
  let item = products.find(p=>p.id===id);
  cart.push(item);
  updateCart();
}

function updateCart(){
  let box = document.getElementById("cartItems");
  box.innerHTML = "";

  let total = 0;

  cart.forEach(c=>{
    box.innerHTML += `<p>${c.name} - ${c.price}</p>`;
    total += c.price;
  });

  document.getElementById("total").innerText = total;
}

function filter(type){
  if(type=="all") render(products);
  else render(products.filter(p=>p.cat==type));
}

function checkout(){
  document.getElementById("checkout").classList.remove("hidden");
}

render(products);
