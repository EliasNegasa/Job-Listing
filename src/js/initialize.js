let jobs = [];
const jobContainer = document.getElementById('jobContainer');
const filterContainer = document.getElementById('filterContainer');
const tabletContainer = document.getElementById('tabletContainer');
const errorBox = document.querySelector('#error');
const errorStatus = document.querySelector('#error .status');
const errorMessage = document.querySelector('#error .message');
const clearButton = document.getElementById('clearButton');

const initializeDOM = () => {
  jobs = document.querySelectorAll('.job-card');

  const tablets = document.querySelectorAll('.tablets');

  for (const tablet of tablets) {
    tablet.addEventListener('click', () => filterJobs(tablet.textContent));
  }
};
