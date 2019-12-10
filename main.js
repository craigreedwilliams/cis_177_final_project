let users = [];

const addUser = (ev)=>{
    ev.preventDefault();
    let user = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        psw: document.getElementById('psw').value,
        pswrepeat: document.getElementById('pswrepeat').value
    }
    users.push(user);
    document.forms[0].reset();

    console.warn('added' , {users} );

    localStorage.setItem('UserList', JSON.stringify(users) );
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('registerbtn').addEventListener('click', addUser);
});
