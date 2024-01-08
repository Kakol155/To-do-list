var add_task = document.getElementById('add');

var shouldDisplayForm = sessionStorage.getItem('shouldDisplayForm');
console.log('shouldDisplayForm:', shouldDisplayForm);

if (!shouldDisplayForm) {
  console.log('Adding event listener...');
  add_task.addEventListener('click', function(event){
    event.preventDefault();
    linkClicked();
  });
}

function linkClicked() {
  console.log('linkClicked...');
  var nowyTekst = prompt('Enter your task:');

  if (nowyTekst !== null) {
    var NewElement = document.createElement('p');
    NewElement.textContent = nowyTekst;

    var container = document.getElementById('taskContainer');

    container.appendChild(NewElement);

    var ButtonDelete = document.createElement('button');
    ButtonDelete.textContent = 'Delete';
    ButtonDelete.className = 'button deleteButton';
    ButtonDelete.addEventListener('click', function() {
      container.removeChild(NewElement);
      container.removeChild(ButtonDelete);
    });

    container.appendChild(ButtonDelete);
  }
}
