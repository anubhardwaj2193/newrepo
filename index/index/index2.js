
function saveToLocalStorage(event) {
   
    event.preventDefault()
    const name=event.target.name.value;
    const mail=event.target.mail.value;
    
localStorage.setItem('name',name);

localStorage.setItem('mail',mail);

}
