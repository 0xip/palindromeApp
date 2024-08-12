document.getElementById("check-btn").addEventListener("click", () => {
const inputValue = document.getElementById("text-input").value;
if(inputValue === ""){
    alert("Please input a value");
}    
});