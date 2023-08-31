const Tablets = (tablets) => {
  return tablets
    .map((tablet) => {
      return `<span class="tablets">${tablet}</span>`;
    })
    .join('');
};
