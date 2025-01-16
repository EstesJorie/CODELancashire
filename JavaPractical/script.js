window.addEventListener("load", function () {
    handleFormSubmit()
})

function handleFormSubmit(){
   let form = document.getElementById("user_name-form") //get the form element using ID 
   form.addEventListener("submit", (event)=>{
        event.preventDefault() //prevent default behaviour
        let formData = new FormData(form) //create a formData object
        let data = Object.fromEntries(formData.entries()) //convert to useable Object

        getUserDetails(data)
        form.reset() //reset the form
   })
   console.log("form", form) 
}

async function getUserDetails(userInput) { //userInput = data from handleFormSubmit
    try {
        const response = await fetch(`https://api.github.com/users/${userInput.user_name}`); //fetch data from the API
        if (response.status === 403) {
            alert("Rate limit exceeded");
            console.log("Rate limit exceeded"); 
            // Handle rate limit exceeded response
        } else if (!response.ok && response.status !== 404) {
            alert("Request failed with status:", response.status);
            console.log("Request failed with status:", response.status);
        } else if (response.status === 404) {
            alert("User not found");
            console.log("User not found");
        } else {
            const data = await response.json();
            console.log("Data received:", data);

            let userImage = document.querySelector("#userimage");
            let publicRepos = document.querySelector("#public_repos");
            let followers = document.querySelector("#followers");
            let userName = document.querySelector("#username");
            let following = document.querySelector("#following");

            userName.innerHTML = data.login;
            followers.innerHTML = data.followers;
            publicRepos.innerHTML = data.public_repos;
            following.innerHTML = data.following;
            userImage.setAttribute("src", data.avatar_url);
            //userImage.src = data.avatar_url

            console.log('data', data);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

