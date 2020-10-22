$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "img", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("svg").on("click", function(){
    var todoText = $("input[type='text']").val();
    $("input[type='text']").val("");
    $("ul").append("<li><img></img>" + todoText + "</li>")
    $("img").attr("src", "cancel.png")
})

$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><img></img>" + todoText + "</li>");
        $("img").attr("src", "cancel.png")
    }
})