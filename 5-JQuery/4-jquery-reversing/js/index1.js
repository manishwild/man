$(document).ready(function () {
    $('#btn').click(function (e) { 
        e.preventDefault();
        console.log($('#ul1').children());
        
    });

    //set click event for all li childern of ul1 not active
    //find will go inside and search for element
    //find will go through element
    //find can go through the elements and check the children
    $('#ul1').find('li:not(.active)').click(function (e) { 
        e.preventDefault();
        alert('I am not active' +$(this).text())
    })
    //set click event for  li inside ul2 of ul1 not active
    //filter ul would only filter the one ul element. it cant go through the element

    $('#ul2 li').filter('li:not(.active)').click(function (e) { 
        e.preventDefault();
        alert('I am not active' +$(this).text())
    })

    $('#ul1').find('li:not(.active)').each(function (idx,element) { 
        console.log(idx,element)
    })

    //first()
    //last $('li).last()
    // eq( ) $('li).eq(3) return the fourth li
    //.not('.active)





});