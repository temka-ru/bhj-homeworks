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
    const hasTooltipElements = document.querySelectorAll('.has-tooltip');
    const activeTooltip = document.querySelector('.tooltip_active');
    
    if (activeTooltip && Array.from(hasTooltipElements).includes(activeTooltip.parentElement)) {
        activeTooltip.classList.remove('tooltip_active');
        activeTooltip.remove();
    } else {
        if (activeTooltip) {
            activeTooltip.classList.remove('tooltip_active');
            activeTooltip.remove();
        }
        tooltip.classList.add('tooltip_active');
        this.appendChild(tooltip);
    }
  }

tooltipElements.forEach(element => {
    element.addEventListener('click', displayTooltip);
});