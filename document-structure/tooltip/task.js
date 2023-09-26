const tooltipElements = document.querySelectorAll('.has-tooltip');

function displayTooltip(event) {
    event.preventDefault();
    const tooltipText = this.getAttribute('title');
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = tooltipText;

    const rect = this.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = rect.bottom + 'px';

    const activeTooltip = document.querySelector('.tooltip_active');
    if (activeTooltip && activeTooltip !== tooltip) {
        activeTooltip.classList.remove('tooltip_active');
        activeTooltip.remove();
    }
    if (tooltip.classList.contains('tooltip_active')) {
        tooltip.classList.remove('tooltip_active');
        tooltip.remove();
    } else {
        tooltip.classList.add('tooltip_active');
        document.body.appendChild(tooltip);
    }
  }
  
tooltipElements.forEach(element => {
    element.addEventListener('click', displayTooltip);
});