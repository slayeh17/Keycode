window.addEventListener('keydown',(e) => {
    const key = document.getElementById('key');
    const keyCode = document.getElementById('keyCode');
    keyCode.innerText = "Key Code: "+e.keyCode;
    if(e.keyCode === 32)
    key.innerText = "Key: "+"Space";
    else
    key.innerText = "Key: "+e.key;
})