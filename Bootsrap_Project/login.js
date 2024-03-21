document.getElementById("form").addEventListener('submit', function(event)
{
    event.preventDefault();

    const username = document.getElementById('Username').value;

    const password = document.getElementById('Password').value;
    // console.log(username);
    // console.log(password);

    fetch('users.json').then(response => response.json()).then(data =>
        {
            // console.log(username);
            // console.log(password);
            const user = data.users.find(u => u.Username === username && u.Password===password);
            // console.log(user);
            if(user)
            {
                
                // console.log(user);
                if(user.isAdmin)
                {
                    window.location.href='registration.html';
                }
                else
                {
                    window.location.href='registration.html';
                }
            }
            else
            {
                alert('Invalid Username or Password');
            }
        }).catch(error => console.error('Error', error));
});