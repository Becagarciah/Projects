const number=document.querySelectorAll('.number')
const speed=100;
number.forEach(Element => {
    incNumber(Element)
});

function incNumber(elem) {
    let text =+elem.innerText;
    const value=+elem.getAttribute('data-target');
    const inc=Math.floor(value/speed)
    if(text<value){
        elem.innerText=inc+text;
        setTimeout(() => {
            incNumber(elem)
        },20);
    }else{
        elem.innerText=value;
    }
}