import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js"

const firebaseConfig = {
    databaseUrl: "https://leads-app-tracker-d8ef0-default-rtdb.firebaseio.com"
}
const app = initializeApp(firebaseConfig);
const database = getDatabase

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")


deleteBtn.addEventListener("dblClick", function() {
    myLeads = []
    renderLeads(myLeads)

})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads(myLeads)
})

function renderLeads(leads){
    let listItems = ""
for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

