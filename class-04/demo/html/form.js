document.getElementById('form').addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault()
  // defaul behavior is to reload the page
  let myStuff = e.target.name.value;
}