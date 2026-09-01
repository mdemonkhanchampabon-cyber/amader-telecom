const USER_ID="user_123"; const API="https://YOUR-BACKEND.com";
let allOffers=[]; let currentFilter="all";
async function loadOffers(){
let res=await fetch(API+"/api/offers"); allOffers=await res.json(); renderOffers();
let n=await fetch(API+"/api/notice"); let notice=await n.text(); document.getElementById("notice").innerText=notice;
loadHistory();
}
function renderOffers(){
let list=document.getElementById("offerList"); list.innerHTML="";
let filtered=allOffers.filter(o=> currentFilter=="all" || o.operator==currentFilter);
filtered.forEach(o=>{
let div=document.createElement("div"); div.className="offer-card";
div.innerHTML=`<h4>${o.operator} - ${o.title}</h4><p>${o.description}</p><p><b>${o.price} TK</b></p><button onclick="buyOffer('${o._id}')">BUY NOW</button>`;
list.appendChild(div);
});
}
function filterOffers(op,btn){
currentFilter=op; document.querySelectorAll(".tabs button").forEach(b=>b.classList.remove("active")); btn.classList.add("active"); renderOffers();
}
async function buyOffer(offerId){
if(!confirm("Order Confirm?")) return;
let res=await fetch(API+"/api/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:USER_ID,offerId})});
let data=await res.json(); alert(data.message); loadHistory();
}
async function loadHistory(){
let res=await fetch(API+"/api/my-orders?userId="+USER_ID); let orders=await res.json();
let h=document.getElementById("history"); h.innerHTML="<h3>My Orders</h3>"+orders.map(o=>`<p>${o.title} - ${o.status}</p>`).join("");
}
loadOffers();
