




async function getUsers () {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)

    const users = await response.json()

    const result = users.map(function(ele){

        return `
        
        <div class="user" >

        <h1>${ele.name}</h1>
        <br/>
        <h2>${ele.username}</h2>
        <br/>
        <p>${ele.email}</p>
        <br/>
        <address>${ele.address.street} , ${ele.address.suite} , ${ele.address.city} , ${ele.address.zipcode} , ${ele.address.geo.lat} , ${ele.address.geo.lng}</address>
        <br/>
        <p>${ele.phone}</p>
        <br/>
        <p>${ele.website}</p>
        <br/>
        <p>${ele.company.name} , ${ele.company.catchPhrase} , ${ele.company.bs}</p>
        <br/>
    
    
        </div>

        `
    }).join("");


    document.querySelector(" .users").innerHTML=result


}


getUsers();


alert("The programmer was sick while working on this site. Please be understanding. The delay in uploading the project was due to illness.");
