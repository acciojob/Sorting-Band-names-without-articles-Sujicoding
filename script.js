// script.js
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function sortBandNames(names) {
  const articles = ['a', 'an', 'the'];
  return names.sort((a, b) => {
    const name1 = a.toLowerCase().split(' ').filter(word => !articles.includes(word)).join(' ');
    const name2 = b.toLowerCase().split(' ').filter(word => !articles.includes(word)).join(' ');
    return name1.localeCompare(name2);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const sortedBandNames = sortBandNames(bandNames);
  const bandList = document.getElementById('band');

  sortedBandNames.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    bandList.appendChild(li);
  });
});


