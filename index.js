import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js"
import { getDatabase, 
        ref,
        push } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js"


const firebaseConfig = {
    apiKey: "AIzaSyC_X2wPmjeckAe8aPCykwdZWf1ntbsuhCU",
    authDomain: "lead-tracker-app-ff773.firebaseapp.com",
    projectId: "lead-tracker-app-ff773",
    storageBucket: "lead-tracker-app-ff773.firebasestorage.app",
    messagingSenderId: "557867157698",
    appId: "1:557867157698:web:26966b665d96b7e29c935b",
    databaseURL: process.env.DATABASE_URL
}
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
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

deleteBtn.addEventListener("dblclick", function() {
    
})

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = ""

})