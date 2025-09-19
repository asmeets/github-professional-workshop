// Description: This code fetches user data from a public API and logs the user's name to the console.
async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const userData = await response.json();
        console.log(`User Name: ${userData.name}`);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }   
}

// Example usage
fetchUserData(1);