function wel(){
    var getfn = localStorage.getItem("fn");
    var getln = localStorage.getItem("ln");

    document.getElementById("wel_first").innerHTML = getfn;
    document.getElementById("wel_last").innerHTML = getln;

}