document.querySelector('button').addEventListener('click', e => {
  const button = e.target.closest('button');
  const counter = button.querySelector('span');
  counter.innerHTML = +counter.innerHTML + 1;
  button.querySelector('i').innerHTML = '💙';
});

document.querySelector('button:last-child').addEventListener('click', e => {
  const commentText = prompt('Add comment');
  const commentName = prompt('Enter your name');
  if (!commentText || !commentName) {
    return;
  }

  const date = new Date();
  const isoDate = date.toISOString().slice(0, 10);
  const day = date.getDate();
  const month = date.toLocaleDateString('en', {month: 'long'}).slice(0, 3);
  const year = date.getFullYear();

  const comment = document.createElement('li');
  comment.innerHTML = `
    <img src="https://i.pravatar.cc/43?u=${commentName.replace(' ', '')}" alt="avatar">
    <header>
      <strong>${commentName}</strong>
      <time datetime="${isoDate}">${day}-${month}-${year}</time>
    </header>
    <p>${commentText}</p>
  `;
  document.querySelector('section > ul').prepend(comment);

  const counter = document.querySelector('button + span > span');
  counter.innerHTML = +counter.innerHTML + 1;
});
