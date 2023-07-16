document.addEventListener("contextmenu", function(konteksMenu){
    konteksMenu.preventDefault();
});

document.addEventListener('keydown',(event)=> {
    let konteks = event.key === "shift" || event.key === "ctrl" || event.key === "i"
    let isKonteksKey = event.konteksKey;
    if( isKonteksKey && konteks){
        alert("Done")
    }
})