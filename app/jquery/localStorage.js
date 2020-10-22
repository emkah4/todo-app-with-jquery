let memory = [];

$("svg").on("click", function(){
    var text = $("input").value;
    if (text) {
        storageAdd(text);
    }
})

function storageAdd(text) {
    memory.push(text);
    localStorage.setItem("elements", memory);
}

if (localStorage.getItem('elements')) {
	memory = localStorage.getItem('elements').split(',');
}

if (memory.length) {
	for (let i = 0; i < memory.length; i++) {
        let text = memory[i];
	}
}