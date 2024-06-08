const inputs = document.querySelectorAll('.css-controller input');
inputs.forEach((input) => {
    input.addEventListener('input', update);
    updateValueDisplay(input); // Initialize display values on load
});

function update() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    updateValueDisplay(this); // Update the displayed value
}

function updateValueDisplay(input) {
    const suffix = input.dataset.sizing || '';
    const valueDisplay = document.getElementById(`${input.name}-value`);
    if (valueDisplay) {
        valueDisplay.textContent = input.value + suffix;
    }
}
