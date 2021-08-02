///////////////////////////////////////////////////////
// Ajax Post Request
///////////////////////////////////////////////////////

/*
    Without SweetAlert
*/

// Core ajax post 
function ajax_request(url, data, result_func) {
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        data: data,
        success: function(result) {
            result_func(result);
        },
    });
}

// Simple ajax post
function simple_ajax_result_handler(result) {
    alert(result.status);
}

function simple_ajax_post(url, data) {
    ajax_request(url, data, simple_ajax_result_handler);
}

// Ajax post and reload
function simple_ajax_reload_result_handler(result) {
    alert(result.status);
    window.location.reload();
}

function simple_ajax_post_reload(url, data) {
    ajax_request(url, data, simple_ajax_reload_result_handler);
}

// Ajax post and redirect
function simple_ajax_redirect_result_handler(result) {
    alert(result.status);
    window.location.href = result.url;
}

function simple_ajax_post_redirect(url, data) {
    ajax_request(url, data, simple_ajax_redirect_result_handler);
}

/*
    With SweetAlert
*/

// Swal ajax post
function swal_ajax_result_handler(result) {
    Swal.fire({
        icon: result.icon,
        title: result.title,
        text: result.text,
    });
}

function swal_ajax_post(url, data) {
    ajax_request(url, data, swal_ajax_result_handler);
}

// Ajax post and reload
function swal_ajax_reload_result_handler(result) {
    Swal.fire({
        icon: result.icon,
        title: result.title,
        text: result.text,
    }).then(function() {
        window.location.reload();
    });
}

function swal_ajax_post_reload(url, data) {
    ajax_request(url, data, swal_ajax_reload_result_handler);
}

// Ajax post and redirect
function swal_ajax_redirect_result_handler(result) {
    Swal.fire({
        icon: result.icon,
        title: result.title,
        text: result.text,
    }).then(function() {
        window.location.href = result.url;
    });
}

function swal_ajax_post_redirect(url, data) {
    ajax_request(url, data, swal_ajax_redirect_result_handler);
}

///////////////////////////////////////////////////////
// Validation and ajax post
///////////////////////////////////////////////////////

/*
    Validation and ajax post
*/

function is_not_empty(val) {
    if(val) 
        return true;
    return false;
}

let check_metadata = {
    "empty": [is_not_empty, " cannot be empty!"],
};


function run_check(check_str, value) {
    return check_metadata[check_str][0](value);
}

function validate_and_post(url, data, ajax_post_function) {
    var error_string = "";
    var data_to_pass = {};
    let ajax_post_function_name = ajax_post_function.name;
    var start_line_token;
    var end_line_token;
    if(ajax_post_function_name.startsWith("simple")) {
        start_line_token = "";
        end_line_token = "\n";
    } else if(ajax_post_function_name.startsWith("swal")) {
        start_line_token = "<p>";
        end_line_token = "</p>";
    }

    for(var field in data) {
        let field_checks = data[field];
        let value = $("#" + field).val();
        field_checks.forEach(function(check, _) {
            if(!run_check(check, value))
                error_string += start_line_token + field + check_metadata[check][1] + end_line_token;
            else
                data_to_pass[field] = value;
        });
    }

    if(is_not_empty(error_string)) {
        if(ajax_post_function_name.startsWith("simple")) {
            alert(error_string);
        } else if(ajax_post_function_name.startsWith("swal")) {
            Swal.fire({
                icon: "error",
                title: "Error",
                html: error_string,
            });
        }
    } else {
        ajax_post_function(url, data_to_pass);
    }
}