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