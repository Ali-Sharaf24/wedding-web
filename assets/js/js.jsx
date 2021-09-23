/*--------------home-start------------------*/
window.onscroll = function scrollFunction() {
    if (document.getElementById("body").scrollTop > 20) {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("navbar").style.backgroundColor = "#fff";
        document.getElementById("head").style.color = "black";
        document.getElementById("link").style.color = "black";
        document.getElementById("link-two").style.color = "black";
        document.getElementById("link-three").style.color = "black";
        document.getElementById("link-four").style.color = "black";
        document.getElementById("link-five").style.color = "black";
        document.getElementById("link-six").style.color = "black";
        document.getElementById("dropdownMenuLink").style.color = "black";
        document.getElementById("btn-two").style.color = "black";
        document.getElementById("btn-three").style.color = "black";
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("navbar").style.backgroundColor = "rgb(255,255,255,0.0)";
        document.getElementById("logo-spn").style.color = "#fca6b1";
        document.getElementById("head").style.color = "#fff";
        document.getElementById("link").style.color = "#fff";
        document.getElementById("link-two").style.color = "#fff";
        document.getElementById("link-three").style.color = "#fff";
        document.getElementById("link-four").style.color = "#fff";
        document.getElementById("link-five").style.color = "#fff";
        document.getElementById("link-six").style.color = "#fff";
        document.getElementById("dropdownMenuLink").style.color = "#fff";
        document.getElementById("btn-two").style.color = "#fff";
        document.getElementById("btn-three").style.color = "#fff";
        document.getElementById("myBtn").style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*----------------profile-start-----------------*/