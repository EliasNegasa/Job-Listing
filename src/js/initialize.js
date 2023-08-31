let jobs = [];
const jobContainer = document.getElementById('jobContainer');
const errorBox = document.getElementById('error');

const initializeDOM = () => {
  jobs = document.querySelectorAll('.job-card');
  const clearButton = document.getElementById('clearButton');

  const tablets = document.querySelectorAll('.tablets');

  for (const tablet of tablets) {
    tablet.addEventListener('click', () => filterJobs(tablet.textContent));
  }

  clearButton.addEventListener('click', resetList);
};
