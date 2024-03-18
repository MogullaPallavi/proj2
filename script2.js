const onClick=()=>{
    const subtotal=Number(document.getElementById('subtotal').value);
    const percentage=Number(document.getElementById('tip').value);
    const total=subtotal+subtotal*(percentage/100);
    document.getElementById('output').value=total;
}
const reset=()=>{
    document.getElementById('subtotal').value="";
    document.getElementById('tip').value="";
    document.getElementById('output').value="";
}