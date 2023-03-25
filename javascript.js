function sendMsg(){

    // Extract the data from form
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var msg=document.getElementById('msg').value;

    var templateParams={
        name:name,
        message:msg,
        email:email
    }

    emailjs.send('', '', '', '')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById("form").reset();
    }, function(error) {
      console.log('FAILED...', error);
    });

}
