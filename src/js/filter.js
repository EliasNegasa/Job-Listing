const filterContainer = document.getElementById('filterContainer');
const tabletContainer = document.getElementById('tabletContainer');

const filterKeys = new Set();

const filterJobs = (key, isKeyAdded = true) => {
  if (isKeyAdded) {
    if (!filterKeys.has(key)) {
      filterTablet(key);
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

