// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
   getDatabase,
   set,
   get,
   update,
   remove,
   ref,
 } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYY5lkzj-t1oG7cYPYDRXvrlj8Z4sn42k",
  authDomain: "fire-base-1-659bb.firebaseapp.com",
  databaseURL: "https://fire-base-1-659bb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fire-base-1-659bb",
  storageBucket: "fire-base-1-659bb.appspot.com",
  messagingSenderId: "568709789219",
  appId: "1:568709789219:web:01dcb5877060e9a1a56396",
  measurementId: "G-GVRBT0PWYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const buttonInsert = document.getElementById("submitUser");

buttonInsert.addEventListener("click", insetStudent);

function insetStudent() {
    // tạo mới dữ liệu
    set(ref(database, "Student/" + inputIdUser.value), {
      email: inputEmail.value,
      full_name: inputFullName.value,
      age: inputAge.value,
      address: inputAddress.value,
    })
      .then(() => {
        alert("inset Student success !");
      })
      .catch((error) => console.log(error));
  }





const AdvisorTable = document.getElementById("table-advisor")

const Advisor = [
    {
        id: 1,
        name: 'John Smith',
        email: 'john@smith.com',
        company: 'Labbit Pte Ltd',
        role: 'Director',
        fluffle: 'Bishan Fluffle',
        customer: 222,
        wallet: 250
    },
    {
        id: 2,
        name: 'Deal Name',
        email: 'Email',
        company: 'Labbit Inc.',
        role: 'Manager',
        fluffle: 'Bishan Fluffle',
        customer: 312,
        wallet: 250
    },
    {
        id: 3,
        name: 'Quiz Name',
        email: 'Email',
        company: 'Fluffle Inc.',
        role: 'Director',
        fluffle: 'Bishan Fluffle',
        customer: 214,
        wallet: 100
    },
]

Advisor.forEach(item => {
    let Row = ``;
    
    Row = `
        <tr class="worker">
            <th><img src="../../../assets/icon/Square.svg" alt=""></th>
            <th>${item.id}</th>
            <th>${item.name}</th>
            <th>${item.email}</th>
            <th>${item.company}</th>
            <th>${item.role}</th>
            <th>${item.fluffle}</th>
            <th>${item.customer}</th>
            <th>${item.wallet} <img src="../../../assets/icon/Carrot.svg" alt=""></th>
            <th>
                <img src="../../../assets/icon/Eye.svg" style="cursor: pointer;" alt="">
                <img src="../../../assets/icon/edit.svg" alt="">
                <img src="../../../assets/icon/icontrash.svg" alt="">
            </th>
        </tr>
    `
    if(item.id % 2 == 0){
        Row = `
        <tr class="worker" style="background: #f1f1f1">
            <th><img src="../../../assets/icon/Square.svg" alt=""></th>
            <th>${item.id}</th>
            <th>${item.name}</th>
            <th>${item.email}</th>
            <th>${item.company}</th>
            <th>${item.role}</th>
            <th>${item.fluffle}</th>
            <th>${item.customer}</th>
            <th>${item.wallet} <img src="../../../assets/icon/Carrot.svg" alt=""></th>
            <th>
                <img src="../../../assets/icon/Eye.svg" onclick="detail()" style="cursor: pointer;" alt="">
                <img src="../../../assets/icon/edit.svg" alt="">
                <img src="../../../assets/icon/icontrash.svg" alt="">
            </th>
        </tr>
    `
    }

    AdvisorTable.innerHTML += Row
})


function detail(){
    location.replace('../AdvisorDetail/index.html')
}
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("th");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


