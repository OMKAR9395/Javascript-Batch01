//Closures with Event Listeners
function setupButton() {
  let click = 0;
  document.getElementById('btn').addEventListener('click', () => {
    click++;
    document.getElementById('show').innerText = 'Clicked ' + click;
  });
}
setupButton();
