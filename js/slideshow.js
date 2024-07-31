document.addEventListener("DOMContentLoaded", (event) => {
    let text = document.getElementById('slideshow_text');
    let image = document.getElementById('slideshow_image');
    let i = 0;
    let j = 0;

    var slideshow = [
        ['template1.png', 'template2.png'],
        ['discover the simplicity and effectiveness of our clothing, a perfect blend of comfort and style', 'embrace effortless style with our clothing and accessories']
    ];

    function setSlide() {
        if (i < slideshow[0].length) {
            setImage(slideshow[0][i]);
            setText(slideshow[1][i]);
            i++;
        } else {
            i = 0;
            setImage(slideshow[0][i]);
            setText(slideshow[1][i]);
            i++;
        }
    }

    function setImage(reference) {
        image.src = "img/spotlight/" + reference;
    }

    function setText(reference) {
        text.innerText = ""; // Clear previous text
        j = 0; // Reset j for the new text
        typeWriter(reference);
    }

    function typeWriter(reference) {
        if (j < reference.length) {
            let char = reference.charAt(j);
            let renderTime = 2000 / reference.length;
            if (char === ' ') {
                text.innerHTML += '&emsp;' + char;
            } else {
                text.innerText += char;
            }
            j++;
            setTimeout(() => typeWriter(reference), renderTime); // Adjust typing speed as needed
        }
    }

    setSlide();
    setInterval(setSlide, 5000);
});