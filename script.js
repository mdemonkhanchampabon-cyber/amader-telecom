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
    div.innerHTML = `<h4>${o.operator} - ${o.title}</h4><p>${o.desc}</p><p><b>${o.price} TK</b></p><button onclick="orderNow('${o.operator} ${o.title} - ${o.price}TK')" style="background:#065f46;color:white;padding:10px 15px;width:100%;border:none;border-radius:20px;font-size:16px">অর্ডার করুন</button>`;
    list.appendChild(div);
  });
}

function filterOffers(op, btn){
  currentFilter = op;
  // সব বাটনের কালার ঠিক করা
  document.querySelectorAll("button").forEach(b=>{
    if(b.textContent.trim()=='সব' || b.textContent.trim()=='GP' || b.textContent.trim()=='Robi' || b.textContent.trim()=='Airtel' || b.textContent.trim()=='BL'){
      b.style.background = "white";
      b.style.color = "#065f46";
    }
  });
  if(btn){
    btn.style.background = "#065f46";
    btn.style.color = "white";
  }
  renderOffers();
}

function orderNow(text){
  let number = prompt(text + "\nআপনার নাম্বার লিখুন:");
  if(number){
    alert("ধন্যবাদ! " + number + " নাম্বারে " + text + " পাঠানোর রিকোয়েস্ট নেওয়া হলো।");
    // পরে এখানে WhatsApp লিংক লাগাবো
    window.open("https://wa.me/8801789217854?text=Order: " + encodeURIComponent(text + " Number: " + number));
  }
}
renderOffers();

// প্রথম বাটন 'সব' কে সবুজ করে রাখো
setTimeout(()=>{
  let firstBtn = document.querySelector("button");
  if(firstBtn) { firstBtn.style.background="#065f46"; firstBtn.style.color="white"; }
},500);
