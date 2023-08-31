const filterTablet = (key) => {
  const tabletElement = document.createElement('div');
  const keySpan = document.createElement('span');
  const removeButton = document.createElement('button');
  const removeIcon = document.createElement('img');

  keySpan.textContent = key;
  keySpan.className = 'key-span';

  removeIcon.src = './images/times-icon.png';

  removeButton.className = 'remove-button';
  removeButton.appendChild(removeIcon);

  removeButton.addEventListener('click', () => removeFilter(tabletElement));

  tabletElement.className = 'filters';
  tabletElement.append(keySpan, removeButton);

  tabletContainer.appendChild(tabletElement);
};
