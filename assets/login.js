function validatelgn() {
    var user_lgn = document.getElementById("u_name2");
    var pass_lgn = document.getElementById("pswd2");
    var lgn_err = document.getElementById("err");

    var user_err = document.getElementById("spn1");
    var pass_err = document.getElementById("spn2");

    var reg_user = localStorage.getItem("un");
    var reg_pass = localStorage.getItem("pd");

    // var x = localStorage.getItem("fn");
    //  var y = localStorage.getItem("ln");

    if (user_lgn.value == "") {
        user_err.innerHTML = "Please Enter User name";
        return false;
    } else {
        user_err.style.display = "none";
    }

    if (pass_lgn.value == "") {
        pass_err.innerHTML = "Please Enter Password";
        return false;
    } else {
        pass_err.style.display = "none";
    }

    if (reg_user == user_lgn.value && reg_pass == pass_lgn.value) {

        window.location.href = "welcome.html";
    } else {
        lgn_err.innerHTML = "Invalid Username and Password";
        // lgn_err.style.display="none";
    }



}