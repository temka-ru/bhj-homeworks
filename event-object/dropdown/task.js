const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    function toggleDropdown() {
        listElement.classList.toggle('dropdown__list_active');
    }

    function selectItem(event) {
        event.preventDefault();
        const selectedItem = event.target.textContent;
        valueElement.textContent = selectedItem;
        listElement.classList.remove('dropdown__list_active');
    }

    valueElement.addEventListener('click', toggleDropdown);
    const dropdownItems = dropdown.querySelectorAll('.dropdown__item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', selectItem);
    });
});