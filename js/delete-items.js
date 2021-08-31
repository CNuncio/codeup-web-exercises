"use strict";

function productsAdd() {
    $("#productTable tbody").append("<tr>" +
        "<td>My First Video</td>" +
        "<td>6/11/2015</td>" +
        "<td>www.pluralsight.com</td>" +
        "</tr>");
}
if ($("#productTable tbody").length == 0) {
    $("#productTable").append("<tbody></tbody>");
}

    // Add products to <table>
    function productsAdd() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#productTable tbody").length == 0) {
    $("#productTable").append("<tbody></tbody>");
}

    // Append product to the table
    $("#productTable tbody").append("<tr>" +
    "<td>Extending Bootstrap with CSS, JavaScript and jQuery</td>" +
    "<td>6/11/2015</td>" +
    "<td>http://bit.ly/1SNzc0i</td>" +
    "</tr>");

    $("#productTable tbody").append("<tr>" +
    "<td>Build your own Bootstrap Business Application Template in MVC</td>" +
    "<td>1/29/2015</td>" +
    "<td>http://bit.ly/1I8ZqZg</td>" +
    "</tr>");
}
$(document).ready(function () {
    productsAdd();
});
function productUpdate() {
    if ($("#productname").val() != null && $("#productname").val() != '') {
        // Add product to Table
        productAddToTable();

        // Clear form fields
        formClear();

        // Focus to product name field
        $("#productname").focus();
    }
}
function formClear() {
    $("#productname").val("");
    $("#introdate").val("");
    $("#url").val("");
}
function formClear() {
    $("#productname").val("");
    $("#introdate").val("");
    $("#url").val("");
}
//from stackflow


$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();
        $('#content').html('put your loading html here').load('/ajax_html_echo/',function(response, status, xhr) {
            //This is the callback. You can check for error here.
            //For example if (status == 'error') alertTheMedia();
        });
    });
});​



