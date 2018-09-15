setTimeout(function(){
    document.getElementById("slider").src = "gif/test2.gif";
    setTimeout(function(){
        document.getElementById("slider").src = "gif/test1.gif";
        setTimeout(function(){document.getElementById("slider").src = "gif/test3.gif"}, 5000);
    }, 5000);
}, 5000);


