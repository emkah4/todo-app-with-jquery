let memory = [];

$("svg").on("click", function(){
    var text = $("input[type='text']").val();
    if (text) {
        storageAdd(text);
    }
    $("input[type='text']").val("");
});

$("input[type='text']").on("keypress", function(e){
    if(e.which === 13) {
        var text = $(this).val();
        if (text) {
            storageAdd(text);
        }
        $(this).val("");
    }
})

function storageAdd(text) {
    memory.push(text);
    localStorage.setItem('todos', memory);
}

function storageRemove(index) {
    for(let i = 0; i < memory.length; i++) {
        if (i === index) {
            memory.splice(i, 1);
        }
    }
}

// $("li").on("click", "img", function(event){
//     event.stopPropagation();
//     var target = $(this);
//     var index = 0;

//     while (target.prev()) {
//         index++;
//         target = target.prev();
//         alert(index);
//     }

//     storageRemove(index);
// })    ///////TESTI

if (localStorage.getItem('todos')) {
	memory = localStorage.getItem('todos').split(',');
}

if (memory.length) {
    for(let i = 0; i < memory.length; i++){
        var text = memory[i];
        memoryActions();
    }
}

function memoryActions(){
    $("ul").append("<li><img></img>" + text + "</li>");
    $("img").attr("src", "cancel.png");

}