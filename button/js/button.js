document.getElementById('btn').addEventListener('click', function() {
    let currentText = this.innerHTML;
    let currentCount = parseInt(currentText) || 0;  // Handle if the text is initially 'initial'
    currentCount++;
    this.innerHTML = currentCount;
});