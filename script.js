window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("sidebar").className = "sidebar-aside";
    } else {
        document.getElementById("sidebar").className = "sidebar-extended";
    }
}