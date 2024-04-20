function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      return response.json();
    })
    .then(data => {
      document.body.innerHTML += `<p>New user ID: ${data.id}</p>`;
    })
    .catch(error => {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
  }