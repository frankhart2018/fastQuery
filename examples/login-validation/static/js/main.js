$(document).ready(function() {

    $("#login").click(function() {
        let data = {"username": ["empty", "email"], "password": ["empty"]};
        validate_and_post("/login", data, simple_ajax_post);
    });

    $("#login_with_reload").click(function() {
        let data = {"username_with_reload": ["empty", "mobile"], "password_with_reload": ["empty"]};
        validate_and_post("/login", data, simple_ajax_post_reload);
    });

    function is_correct_username(username) {
        return username.length >= 8;
    }

    $("#login_with_redirect").click(function() {
        register_check_function("username", is_correct_username, " is not in proper format!");
        let data = {"username_with_redirect": ["empty", "username"], "password_with_redirect": ["empty"]};
        validate_and_post("/login-with-redirect", data, simple_ajax_post_redirect);
    });

});