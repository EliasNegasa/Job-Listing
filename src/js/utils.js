const sortJobs = (jobs) => {
  jobs.sort((job1, job2) => {
    if (job1.isFeatured === job2.isFeatured) {
      if (job1.isNew === job2.isNew) {
        return 0;
      } else {
        return job1.isNew ? -1 : 1;
      }
    } else {
      return job1.isFeatured ? -1 : 1;
    }
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
    if (difference === 0) {
      return 'today';
    } else {
      return `${difference}d ago`;
    }
  } else if (difference < 30) {
    difference < 14 ? '1w ago' : difference < 21 ? '2w ago' : '3w ago';
  } else if (difference < 365) {
    const monthDifference = Math.floor(difference / 30);
    return `${monthDifference}m ago`;
  } else if (difference < 730) {
    return '1y ago';
  } else {
    const yearDifference = Math.floor(difference / 365);
    return `${yearDifference}y ago`;
  }
};
