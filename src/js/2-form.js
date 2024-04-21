const feedbackForm = document.querySelector(".feedback-form");
const inputEmail = document.querySelector('input[name="email"]');
const inputMessage = document.querySelector('textarea[name="message"]');

function getLocalStorage() {
    return JSON.parse(localStorage.getItem("feedback-form-state")); 
}

if (getLocalStorage()) {
    const parsedFormState = getLocalStorage();
    inputEmail.value = parsedFormState.email;
    inputMessage.value = parsedFormState.message
}

feedbackForm.addEventListener("input", (event) => {
    if (event.target.value) {
        const feedbackFormState = {
            email: inputEmail.value,
            message: inputMessage.value,
        }
        localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
    }
});

feedbackForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    if (inputEmail.value && inputMessage.value) {
        event.preventDefault();
        console.log(getLocalStorage());
        localStorage.removeItem("feedback-form-state");
        inputEmail.value = "";
        inputMessage.value = "";
    }
   }







