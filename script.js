
const offers = [
  {operator:'GP', title:'30GB 30দিন', desc:'ইন্টারনেট প্যাক', price:399},
  {operator:'Robi', title:'20GB 30দিন', desc:'ইন্টারনেট প্যাক', price:298},
  {operator:'Airtel', title:'40GB 30দিন', desc:'ইন্টারনেট প্যাক', price:448},
  {operator:'BL', title:'1000 মিনিট', desc:'ভয়েস প্যাক', price:499},
  {operator:'GP', title:'1000 মিনিট + 1GB', desc:'কম্বো প্যাক', price:599}
];
let currentFilter = "all";
function renderOffers(){
  let list = document.getElementById("offerList") || document.getElementById("offer-list");
  if(!list) return;
  list.innerHTML = "";
  let filtered = offers.filter(o=> currentFilter==="all" || o.operator===currentFilter);
  filtered.forEach(o=>{
    let div = document.createElement("div");
    div.className = "offer-card";
    div.style = "background:white;padding:15px;margin:10px;border-radius:12px;box-shadow:0 2px 8px #0002";
    div.innerHTML = `<h4>${o.operator} - ${o.title}</h4><p>${o.desc}</p><p><b>${o.price} TK</b></p><button onclick="alert('অর্ডার নেওয়া হয়েছে: ${o.title}')" style="background:#065f46;color:white;padding:8px 15px;border:none;border-radius:20px">অর্ডার করুন</button>`;
    list.appendChild(div);
  });
}
function filterOffers(op, btn){
  currentFilter = op;
  document.querySelectorAll(".tabs button").forEach(b=>b.classList.remove("active"));
  if(btn) btn.classList.add("active");
  renderOffers();
}
renderOffers();
