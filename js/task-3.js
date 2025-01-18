const textInput = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');
textInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();
        output.textContent = inputValue.length>0 ? inputValue : "Anonymous"; });