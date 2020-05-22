$(function () {
    $('#loginBtn').click(function (e) { 
        e.preventDefault();
        let checkData = true;
        
        // check username inpute is not empty
        let userName = $('#usernameInput').val();
        if (!userName.trim()) {
            $('#usernameAlert').removeClass('d-none');
            checkData = false;
        }

        // check password inpute is not empty
        let password = $('#passwordInput').val();
        if (!password.trim()) {
            $('#passwordAlert').removeClass('d-none');
            checkData = false;
        }
        // if ($('#usernameInput').val().trim() &&$('#usernameInput').val().trim()){
           //ajax request
        // }
        if (checkData) {
            //prepare data to be sent to the server
            //if the object key or property name are equal are same as variable name you can write only the variable name
            let sentDataObj = {
                userName,//userName,
                password//password
            }
            //ajax request
            //if url is/usercheck.json
            $.ajax({
                type: "GET",
                url: "/usercheck.json",
                data: JSON.stringify(sentDataObj),
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    //show login error modal
                    //$('#errorbtn').click()
                    if (!response.result) {
                        $('#loginerrorModal').modal('show')
                    }else{
                        //login success
                        alert('success')
                    }
                    
                }

            });
        }


    });
});