$(document).ready(function() {

    $("#login").click(function() {
        var username = $("#username").val();
        var password = $("#password").val();

        if(username && password) {
            data = {"username": username, "password": password};
            simple_ajax_post("/login", data);
        } else {
            alert("Please enter username and password");
        }
    });

    $("#login_with_reload").click(function() {
        var username = $("#username_with_reload").val();
        var password = $("#password_with_reload").val();

        if(username && password) {
            data = {"username": username, "password": password};
            simple_ajax_post_reload("/login", data);
        } else {
            alert("Please enter username and password");
        }
    });

    $("#login_with_redirect").click(function() {
        var username = $("#username_with_redirect").val();
        var password = $("#password_with_redirect").val();

        if(username && password) {
            data = {"username": username, "password": password};
            simple_ajax_post_redirect("/login-with-redirect", data);
        } else {
            alert("Please enter username and password");
        }
    });

});