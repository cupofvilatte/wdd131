const termsToExplicate = [
    "metaphor",
    "justice",
    "ecosystem",
    "democracy",
    "quantum mechanics",
    "freedom",
    "biodiversity",
    "artificial intelligence",
    "cultural heritage",
    "evolution",
    "ethics",
    "sustainability",
    "social media",
    "global warming",
    "theory of relativity",
    "entrepreneurship",
    "public health",
    "human rights",
    "economic inequality",
    "consciousness"
];

function getRandomTerm() {
    const randomIndex = Math.floor(Math.random() * termsToExplicate.length);
    return termsToExplicate[randomIndex];
}

function displayRandomTerm() {
    const randomTerm = getRandomTerm();
    document.getElementById('random-word').textContent = randomTerm;
    return randomTerm;
}

document.addEventListener('DOMContentLoaded', function() {
    const randomTerm = displayRandomTerm();

    const termElement = document.querySelector('.example-term');
    if (termElement) {
        termElement.innerText = getRandomTerm();
    }

    document.getElementById('explication-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form values
        const term = termElement ? termElement.innerText : 'Unknown Term';
        const state = document.getElementById('form-state').value;
        const elaborate = document.getElementById('form-elaborate').value;
        const exemplify = document.getElementById('form-exemplify').value;
        const illustrate = document.getElementById('form-illustrate').value;
        const compare = document.getElementById('form-compare').value;
        const divide = document.getElementById('form-divide').value;
        const apply = document.getElementById('form-apply').value;

        // Create a new window or a new section for printing
        let printContent = `
            <h1>${randomTerm}</h1>
            <p><strong>State:</strong> ${state}</p>
            <p><strong>Elaborate:</strong> ${elaborate}</p>
            <p><strong>Exemplify:</strong> ${exemplify}</p>
            <p><strong>Illustrate:</strong> ${illustrate}</p>
            <p><strong>Compare or Contrast:</strong> ${compare}</p>
            <p><strong>Divide and Make Distinctions:</strong> ${divide}</p>
            <p><strong>Apply:</strong> ${apply}</p>
        `;

        // Open a new window for printing
        let printWindow = window.open('', '_blank', 'width=800,height=600');
        printWindow.document.write('<html><head><title>Print</title></head><body>');
        printWindow.document.write(printContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();

        // Print the new window
        printWindow.print();
        printWindow.close();
    });
});