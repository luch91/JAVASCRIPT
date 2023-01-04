

// let count = 0
//console.log(count)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

console.log(countEl)


let count = 0

function increment(){
    count += 1 
    countEl.textContent = count //changed .innerText to textContent for better readability

}
// create a function, save() which logs out the count when it's clicked.

function save() {
   let countStr = count + " - " // creates a variable that contains both the count and the dash operator, i.e, "5 - 10 -11"
   
   //render the variable in the saveEl using innerText
   saveEl.textContent += countStr // countStr +countStr, to ensure it doesn't delete the previouscontent 

   //to set back to zero everytime we save
   countEl.textContent = 0
   count = 0
}


