$(document).ready(function(){

    $('#catform').on('submit', submitCats);

});

function submitCats(event){
    event.preventDefault();

    var catObject = {};
    catObject.username = $('#username').val();

    $.ajax({
        type: "POST",
        data: catObject,
        url: "/cat",
        success: function(data){
            console.log(data);
        }
    });
}

function fetchCats(){
    $.ajax({
        type: "GET",
        data: "/cat",
        success: function(data){
            appendDom(data);
        }
    });
}

function appendDom(data){
    $('#container').empty();
    for(var i=0; i < data.length; i++) {
        $("#container").append("<div></div>");

        var $el = $("#container").children().last();
        $el.append("<p>" + data[i].username + "</p>");
    }
}

