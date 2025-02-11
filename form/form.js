//Cache the form elments
const emailInput = document.getElementById("email");
const quoteSelection = document.getElementById("qouteSelection");
const descriptionInput = document.getElementById("description");
const submitButton = document.querySelector("button[type='submit']");

//Add an event listener for the submit button 
submitButton.addEventListener('click', (e) => {
    //prevent the form from refreshing the page 
    e.preventDefault()

    //cache the values from the form fields 
    const email = emailInput.value.trim();
    const quoteLevel = quoteSelection.value;
    const description = descriptionInput.value.trim();

    //validate input
    if (!email || !description || quoteLevel === "Select a the level") {
        alert("Please fill in all fields correctly.");
        email.focus()
        return;
    }

    emailInput.value = "";
    quoteSelection.value = "Select a the level";
    descriptionInput.value = "";

    alert("Quote submitted successfully!");
})