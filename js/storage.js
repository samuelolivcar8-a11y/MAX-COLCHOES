const DB_KEY="max_colchoes_db_v1";
const seedProducts=[
{id:"mc-001",name:"Colchão Premium Casal",category:"Colchões",measure:"Casal",type:"Molas ensacadas",price:1899.90,promo:1599.90,stock:8,minStock:2,featured:true,offer:true,image:"assets/hero-cama.jpg",description:"Conforto e suporte para noites mais tranquilas."},
{id:"mc-002",name:"Colchão Queen Confort",category:"Colchões",measure:"Queen",type:"Espuma",price:1699.90,promo:1499.90,stock:5,minStock:2,featured:true,offer:true,image:"assets/loja-1.jpg",description:"Uma opção equilibrada para conforto no dia a dia."},
{id:"mc-003",name:"Cama Box Casal",category:"Camas Box",measure:"Casal",type:"Box",price:1299.90,promo:0,stock:4,minStock:1,featured:true,offer:false,image:"assets/loja-2.jpg",description:"Base prática e resistente para seu colchão."},
{id:"mc-004",name:"Cabeceira Premium",category:"Cabeceiras",measure:"Casal",type:"Estofada",price:799.90,promo:699.90,stock:3,minStock:1,featured:false,offer:true,image:"assets/loja-3.jpg",description:"Acabamento elegante para transformar o quarto."}
];
function defaultDB(){return {products:seedProducts,sales:[],customers:[],settings:{whatsapp:"5561981706523",phone1:"(61) 98170-6523",phone2:"(61) 98289-6927",store:"Max Colchões"},user:{email:"admin@maxcolchoes.com",password:"123456"}}}
function getDB(){try{const d=JSON.parse(localStorage.getItem(DB_KEY));if(d)return d}catch(e){} const d=defaultDB();saveDB(d);return d}
function saveDB(db){localStorage.setItem(DB_KEY,JSON.stringify(db))}
function money(v){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(v)||0)}
function uid(prefix="id"){return prefix+"-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7)}
function toast(msg){const el=document.createElement("div");el.className="toast";el.textContent=msg;document.body.appendChild(el);setTimeout(()=>el.remove(),2600)}
function waLink(message="Olá! Gostaria de saber mais sobre os produtos da Max Colchões."){const db=getDB();return `https://wa.me/${db.settings.whatsapp}?text=${encodeURIComponent(message)}`}
