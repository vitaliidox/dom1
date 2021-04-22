

btn.onclick = function(){
    let col = document.getElementById('color')
    col.style.backgroundColor = ''
    let inp = document.getElementById('input_text').value;
    document.getElementById('show').innerHTML = inp
    col.style.backgroundColor = inp
    if(col.style.backgroundColor == ''){
        alert("Write the correct color!")
    }
}