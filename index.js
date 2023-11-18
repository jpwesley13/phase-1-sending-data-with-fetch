// const humans = {
//     name: "Username",
//     email: "User Email",
// }

// const postObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         name, email
//     }),
// }

function submitData(name, email) {
    return fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name, email
        })
    })
    //figure out how we learned document.body.innerHTML here
    .then(res => res.json())
    .then(obj => document.body.textContent = obj.id)
    //the below is a better way then the above. The above forces it to work but deletes stuff.
    .catch(function (problem) {
        alert("Unauthorized Access");
        const issue = document.createElement("p");
        issue.id = "error";
        issue.innerHTML = problem.message
        document.body.appendChild(issue)
    })
}

submitData()