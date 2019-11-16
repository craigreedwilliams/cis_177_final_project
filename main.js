let users = [];

const addUser = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let user = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        psw: document.getElementById('psw').value,
        pswrepeat: document.getElementById('pswrepeat').value
    }
    users.push(user);
    // clear form for the next entry
    document.forms[0].reset();

    //for display purposes
    console.warn('added' , {users} );

    //saving to localStorage
    localStorage.setItem('UserList', JSON.stringify(users) );
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('registerbtn').addEventListener('click', addUser);
});
