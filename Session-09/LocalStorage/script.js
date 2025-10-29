function Save(){
    const name = document.getElementById('name').value;
    localStorage.setItem('studentName',name);
    alert("This Is From local Storage");
}
function load(){
    const n = localStorage.getItem('studentName');
    alert('Stored Name' + n);
}