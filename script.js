document.getElementById("check-btn").addEventListener("click", () => {
const inputValue = document.getElementById("text-input").value;

const modifiedInputValue = inputValue.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
const isPalindrome = modifiedInputValue === modifiedInputValue.split('').reverse().join('');
    

if(inputValue === ""){
    alert("Please input a value");
}
else if(isPalindrome){
    document.getElementById("result").textContent = `${inputValue} is a palindrome!`;
}else{
    document.getElementById("result").textContent = `${inputValue} is not a palindrome!`;
}
});