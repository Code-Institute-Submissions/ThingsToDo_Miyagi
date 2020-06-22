// Nav bar dropdown 
		var header = document.getElementById("navbarNavDropdown");
        var btns = header.getElementsByClassName("nav-link");
        for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
        });
        }

// taken from https://stackoverflow.com/questions/19469705/bootstrap-carousel-as-website-background-->
       $(document).ready(function() {
       $('.carousel').carousel({interval: 5000});
     });
