function Validate() {
    console.log('hello');
    var FirstName = document.getElementById('txtFirstName').value;
    var LastName = document.getElementById('txtLastName').value;
    var Message = document.getElementById('txtMessage').value;
    if (FirstName == '' || LastName == '' || Message == '') {
        console.log(document.getElementById('errMsg'));
        document.getElementById('errMsg').innerHTML = "All fields are mandatory";
    }
    else {
        document.getElementById('errMsg').innerHTML = "Validated";
    }
}