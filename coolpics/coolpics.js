// coolpics js
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector("#menu-button");

    function toggleMenu() {
        const menu = document.querySelector(".menu-nav");
        menu.classList.toggle("hide");
    }

    menuButton.addEventListener("click", toggleMenu);

    function viewHandler(event) {
        // create a variable to hold the element that was clicked on from event.target
        const modalImage = event.target;
        // get the src attribute from that element and 'split' it on the "-"
        const imgSrc = modalImage.getAttribute('src');
        const src = imgSrc.split('-');
    
        const imgAlt = modalImage.getAttribute('alt')
        // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
        const combinedSrc = `${src[0]}-full.jpeg`;
    
        // insert the viewerTemplate into the top of the body element
        // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
        const viewerHTML = viewerTemplate(combinedSrc, imgAlt)
        document.body.insertAdjacentHTML('afterbegin', viewerHTML);
    
        // add a listener to the close button (X) that calls a function called closeViewer when clicked
        // document.querySelector('close-viewer').addEventListener('click', closeViewer);
        const closeButton = document.querySelector('.close-viewer');
        if (closeButton) {
            console.log('Close button found, attaching event listener');
            closeButton.addEventListener('click', closeViewer);
        } else {
            console.error('Close button not found');
        }
    }
    
    function closeViewer() {
        const viewer = document.querySelector('.viewer');
        if (viewer) {
            viewer.parentNode.removeChild(viewer);
        }
    }
    
    document.querySelector('.gallery').addEventListener('click', viewHandler);


});

function handleResize() {
    const menu = document.querySelector(".menu-nav");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide")
    }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img class="viewer-img" src="${pic}" alt="${alt}">
      </div>`;
}

window.addEventListener("resize", handleResize);