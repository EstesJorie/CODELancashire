import React, {useState} from 'react'

export default function GitHubSearch() {

    const [error, setError] = useState("")
    const [user, setUser] = useState(null)

    function handleFormSubmit(event) {
            event.preventDefault()
            let formData = new FormData(event.target)
            let data = Object.fromEntries(formData.entries())
            getUserDetailsFromGithub(data)
    }
    
    function getUserDetailsFromGithub(userInput) {
        setError("") // clear the error state
        setUser(null) // clear the user state

        fetch(`https://api.github.com/users/${userInput.username}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    setError(data.message)
                    return
                }
                console.log("user", data)
                setUser(data)
            })
    }
  return (
    <>
        <form onSubmit={handleFormSubmit} action="" id="username-form" class="flex items-center w-full">
        <input type="text" name="username" id="" placeholder="Enter your Github username"
        class="border border-blue-800 rounded-l p-2 flex-grow" />
        <button class="bg-blue-500 text-white px-4 py-2.5 rounded-r">Search</button>
        </form>
        {
            user ? <div id="user-info">
            <div class="flex items-center gap-2">
                <img src={user.avatar_url} alt="user image" id="userimage" 
                class="w-16 h-16 rounded-full object-cover object-center" />
                <h3 id="username">{user.login}</h3>
            </div>
            
            <div>
                <span>Public repos</span>
                <span id="public_repos">{user.public_repos}</span>
            </div>

            <div>
                <span>Followers</span>
                <span id="followers">{user.followers}</span>
            </div>
        </div> : <p id="error" class="text-red-500 my-2">
            {error}
        </p>
        }
    </>
  )}
