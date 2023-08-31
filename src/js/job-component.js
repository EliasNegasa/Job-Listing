const jobCard = ({
  company,
  logo,
  isNew,
  isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  const newTag = isNew ? '<span id="new" class="new-tag">New!</span>' : '';
  const featuredTag = isFeatured
    ? '<span id="featured" class="featured-tag">Featured</span>'
    : '';

  const jobFeaturedClass = isFeatured ? 'job-featured' : '';

  return `<div class='job-card ${jobFeaturedClass}' data-role='${role}' data-level='${level}' data-languages="${languages}" data-tools="${tools}"><div class="job-detail-box"><div class="image-container"><img src='${logo}' alt="Company Logo"></div><div class="space-y-2"><div class="space-x-1"><span class="text-cyan-dark font-bold mr-3">${company}</span>${newTag}${featuredTag}</div><h4 class="job-name">${position}</h4><ul class="flex list-disc list-inside space-x-4"><li class="text-grayish-cyan-medium list-none">${postedAt}</li><li class="text-grayish-cyan-medium">${contract}</li><li class="text-grayish-cyan-medium">${location}</li></ul></div></div><div class="tablets-container"><span class="tablets">${role}</span><span class="tablets">${level}</span>${Tablets(
    languages
  )}${Tablets(tools)}</div></div>`;
};
