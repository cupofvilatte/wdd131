import exampleTerms from "./objects.mjs";

console.log(exampleTerms);

function exampleTemplate(term) {
    let html = `
    <section class="example">
            <div class="explication-text">
                <h2 class="example-term">${term.term}</h2>
                <h3>State</h3>
                <p class="state-term">${term.stated}</p>
                <h3>Elaborate</h3>
                <p class="elaborate-term">${term.elaborated}</p>
                <h3>Exemplify</h3>
                <p class="exemplify-term">${term.exemplifed}</p>
                <h3>Illustrate</h3>
                <p class="illustrate-term">${term.illustrated}</p>
                <h3>Compare or Contrast</h3>
                <p class="compare-term">${term.compared}</p>
                <h3>Divide or Make a Distinction</h3>
                <p class="divide-term">${term.divided}</p>
                <h3>Apply</h3>
                <p class="apply-term">${term.applied}</p>
            </div>
        `;

    if (term.image) {
        html += `
        <div class="explication-image">
            <img src="${term.image}" alt="${term.term} illustration">
        </div>
            `
    } else {
        html += `
        <div class="explication-image">
            <div class="image-placeholder"></div>
        </div>
            `
    };

    html += `
    </section>
    `;

    return html;
}

function pageSetUp() {
    let html = '';
    exampleTerms.forEach(term => {
        html += exampleTemplate(term);
    });
    document.getElementById('examples-content').innerHTML += html;
}

document.addEventListener('DOMContentLoaded', pageSetUp);