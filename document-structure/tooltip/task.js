const tooltipElements = document.querySelectorAll('.has-tooltip'); 
let activeTooltip = null; 
 
function displayTooltip(event) { 
    event.preventDefault(); 
    const tooltipText = this.getAttribute('title'); 
    const tooltip = document.createElement('div'); 
    tooltip.classList.add('tooltip'); 
    tooltip.textContent = tooltipText; 
    const rect = this.getBoundingClientRect(); 
    tooltip.style.left = rect.left + 'px'; 
    tooltip.style.top = rect.bottom + 'px'; 
     
    if (activeTooltip) { 
        if (activeTooltip.textContent === tooltipText) { 
            activeTooltip.classList.toggle('tooltip_active'); 
            return; 
        } else { 
            activeTooltip.classList.remove('tooltip_active'); 
            activeTooltip.remove(); 
            activeTooltip = null; 
        } 
    } 
     
    tooltip.classList.add('tooltip_active'); 
    document.body.appendChild(tooltip); 
    activeTooltip = tooltip; 
} 
 
tooltipElements.forEach(element => { 
    element.addEventListener('click', displayTooltip); 
});