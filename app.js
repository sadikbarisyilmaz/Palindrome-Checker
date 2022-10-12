function palindrome() {
    let inputDOM = document.querySelector("#input")
    let resultDOM = document.querySelector("#result")
    inputDOM.value = inputDOM.value.toLowerCase().replace(/[^a-z0-9]/g, "")
    let arr = inputDOM.value.split("")
    let mirrored = []
   
   for (let i = 0; i < arr.length; i++) {
     mirrored.unshift(arr[i])
   }
   
     if(inputDOM.value === mirrored.join("")){
       resultDOM.innerHTML = `"${inputDOM.value}" is a palindrome!`
     }else{
        resultDOM.innerHTML = `"${inputDOM.value}" is a not palindrome`
     }
   }