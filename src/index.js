const init = () => {
  //add event listeners to capture data & override a form's default behavior
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');
   // console.log(input.value);

  //fetch data based on what user types into form
  fetch(`http://localhost:3000/movies/${input.value}`)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
  });

  //display data on page
  fetch(`http://localhost:3000/movies/${input.value}`)
  .then(response => response.json())
  .then(data => {
    const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');
    title.innerText = data.title;
    summary.innerText = data.summary;
  });
});
}

document.addEventListener('DOMContentLoaded', init);