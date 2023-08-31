const sortJobs = (jobs) => {
  jobs.sort((job1, job2) => {
    return job1.postedAt > job2.postedAt
      ? -1
      : job1.postedAt < job2.postedAt
      ? 1
      : 0;
  });

  return jobs;
};

const daysDifference = (date) => {
  const millisecondsInADay = 24 * 60 * 60 * 1000;
  const currentDate = new Date();
  const timeDifference = Math.abs(currentDate - new Date(date));

  return Math.floor(timeDifference / millisecondsInADay);
};

const convertDate = (date) => {
  const difference = daysDifference(date);

  if (difference < 7) {
    return difference === 0 ? 'Today' : `${difference}d ago`;
  } else if (difference < 30) {
    return difference < 14 ? '1w ago' : difference < 21 ? '2w ago' : '3w ago';
  } else if (difference < 365) {
    const monthDifference = Math.floor(difference / 30);
    return `${monthDifference}mo ago`;
  } else if (difference < 730) {
    return '1yr ago';
  } else {
    const yearDifference = Math.floor(difference / 365);
    return `${yearDifference}yr ago`;
  }
};
