 let bandNames = ['The Rolling Stones', 'Aerosmith', 'Led Zeppelin', 'The Beatles'];
function sortBandNames(names) {
      const articles = ['a', 'an', 'the'];
      return names.sort((a, b) => {
        const name1 = a.toLowerCase().replace(/^(the|an|a)\s+/, '');
        const name2 = b.toLowerCase().replace(/^(the|an|a)\s+/, '');
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