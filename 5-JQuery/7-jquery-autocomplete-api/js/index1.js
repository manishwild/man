$(document).ready(function () {
    $( "#par" ).datepicker();
    $('#btn').click(function (e) { 
        e.preventDefault();
       alert($('#par').val()) 
    });
});