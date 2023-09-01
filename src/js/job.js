const loadJobs = async () => {
  let jobCards;

  try {
    const response = await getJobs();

    const { data: jobs } = response;

    sortJobs(jobs);

    jobCards = jobs.map((job) => jobCard(job)).join('');
  } catch (error) {
    const { response } = error;

    if (response) {
      const { status, data } = response;

      errorStatus.textContent = status;
      errorMessage.textContent = data.error;
    } else {
      errorMessage.textContent = error.message;
    }

    errorBox.classList.replace('hidden', 'flex');
    jobContainer.innerHTML = '';
    return;
  }

  jobContainer.innerHTML = jobCards;

  initializeDOM();

  return jobCards;
};

loadJobs();
