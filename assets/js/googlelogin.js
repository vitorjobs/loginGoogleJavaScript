  
  function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
    console.log(data)
    fullName.textContent = data.name
    // email.textContent = data.email
    // identificador.textContent = data.sub
    img_profile.setAttribute("src", data.picture)   
    
  }

  window.onload = function () {

    google.accounts.id.initialize({
      client_id: "1037825820350-jlqsmm05galnihbj76tdcu7s5tuc867o.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { 
         theme: "outline", 
          size: "large" 
      }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }