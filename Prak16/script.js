const con1 = document.getElementById("container1")
const con2 = document.getElementById("container2")

con1.style.backgroundColor = "Lightgreen"
con2.style.backgroundColor = "Lightblue"

const link = document.querySelector('a[href="#"]');

if (link) {
    link.setAttribute('href', 'https://www.google.com');
}


const listItems = document.querySelectorAll(".list");

listItems.forEach((item, index) => {
    item.textContent = `List Baru ${index + 1}`;  
    item.style.backgroundColor = "Coral"; 
    item.style.color = "white"; 
    item.style.fontSize = "15px"; 
    item.style.fontWeight = "bold"; 
    item.style.padding = "10px"; 
    item.style.marginBottom = "10px"; 
    item.style.textAlign = "center"; 
});
