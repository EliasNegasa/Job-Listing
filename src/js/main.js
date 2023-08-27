const filterContainer = document.getElementById('filterContainer');
const tabletContainer = document.getElementById('tabletContainer');
const tablets = document.querySelectorAll('.tablets');
const jobs = document.querySelectorAll('.job-card');
const clearButton = document.getElementById('clearButton');

const filterKeys = new Set();

const filterJobs = (key, isKeyAdded = true) => {
  if (isKeyAdded) {
    if (!filterKeys.has(key)) {
      createFilterTablet(key);
      filterKeys.add(key);
    } else {
      return;
    }
  } else {
    filterKeys.delete(key);
  }

  filterKeys.size === 0
    ? filterContainer.classList.replace('flex', 'hidden')
    : filterContainer.classList.replace('hidden', 'flex');

  for (const job of jobs) {
    const { role, level, languages, tools } = job.dataset;

    const jobTablets = [
      role,
      level,
      ...languages.split(','),
      ...tools.split(','),
    ];

    const containsAll = [...filterKeys].every((element) =>
      jobTablets.includes(element)
    );

    job.classList.toggle('hide-element', !containsAll);
  }
};

const createFilterTablet = (key) => {
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

const removeFilter = (tabletElement) => {
  tabletElement.remove();
  filterJobs(tabletElement.textContent, false);
};

const resetList = () => {
  filterKeys.clear();

  tabletContainer.innerHTML = '';
  filterContainer.classList.replace('flex', 'hidden');

  for (const job of jobs) {
    job.classList.remove('hide-element');
  }
};

for (const tablet of tablets) {
  tablet.addEventListener('click', () => filterJobs(tablet.textContent));
}

clearButton.addEventListener('click', resetList);
