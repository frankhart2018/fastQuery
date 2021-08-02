$(document).ready(function() {

    $("#login").click(function() {
        let data = {"username": ["empty"], "password": ["empty"]};
        validate_and_post("/login", data, simple_ajax_post);
    });

    $("#login_with_reload").click(function() {
        let data = {"username_with_reload": ["empty"], "password_with_reload": ["empty"]};
        validate_and_post("/login", data, simple_ajax_post_reload);
    });

    $("#login_with_redirect").click(function() {
        let data = {"username_with_redirect": ["empty"], "password_with_redirect": ["empty"]};
        validate_and_post("/login-with-redirect", data, simple_ajax_post_redirect);
    });

});