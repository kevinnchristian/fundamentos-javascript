const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = [];

// Adicionar item dentro do array, quando houver a ação de submit
newListForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const listName = newListInput.value;

  if (listName === null || listName === '') return;

  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  render();
});

// Renderizar o elemento em tela, abaixo do input
function render() {
  clearElement(listContainer);

  lists.forEach(function (list) {
    const iconDelete = document.createElement('img');
    iconDelete.id = list.id;
    iconDelete.classList.add('delete');
    iconDelete.setAttribute('src', '../assets/images/icons/delete.svg');
    iconDelete.onclick = function removeItem(e) {
      removeElement(this.id);
    }

    const item = document.createElement('li');
    item.id = list.id;
    item.classList.add('item-to-do-list');
    item.innerHTML = `<span>${list.name}</span>`;

    item.appendChild(iconDelete);
    listContainer.appendChild(item);
  });
}

// Com o valor recebido do input, retorne um objeto com id e name para criar item da lista
function createList(name) {
  return {
    id: Date.now().toString(),
    name: name
  }
}

// Limpar sempre o primeiro elemento para não haver repetições dentro do array
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Remover item da lista
function removeElement(id) {
  lists = lists.filter((item) => item.id !== id);
  render();
}