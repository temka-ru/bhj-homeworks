const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');

function showLoader() {
    loader.classList.add('loader_active');
    itemsContainer.style.display = 'none';
}

function hideLoader() {
    loader.classList.remove('loader_active');
    itemsContainer.style.display = 'block';
}

function renderCurrency(currencyData) {
    itemsContainer.innerHTML = '';

    for (const currencyCode in currencyData) {
        const currency = currencyData[currencyCode];
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
          <div class="item__code">${currency.CharCode}</div>
          <div class="item__value">${currency.Value}</div>
          <div class="item__currency">руб.</div>
        `;
        itemsContainer.appendChild(item);
    }
}

function fetchCurrency() {
    return fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => response.json())
    .then(data => data.response.Valute)
    .catch(error => {
        console.error('Error fetching currency:', error);
        return null;
    });
}

function cacheCurrency(currencyData) {
    localStorage.setItem('currencyData', JSON.stringify(currencyData));
}

function getCachedCurrency() {
    const cachedData = localStorage.getItem('currencyData');
    return cachedData ? JSON.parse(cachedData) : null;
}

function loadCurrency() {
    const cachedCurrency = getCachedCurrency();

    if (cachedCurrency) {
      renderCurrency(cachedCurrency);
    }

    showLoader();

    fetchCurrency()
        .then(currencyData => {
          hideLoader();

        if (currencyData) {
          cacheCurrency(currencyData);
          renderCurrency(currencyData);
        }
      });
}

loadCurrency();