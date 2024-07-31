document.addEventListener("DOMContentLoaded", (event) => {
    let text = document.getElementById('slideshow_text');
    let image = document.getElementById('slideshow_image');
    let i = 0;

    var slideshow = [
        ['template1.png', 'template2.png'],
        ['sleek, simple design', 'another description']
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
        text.innerText = reference;
    }

    setSlide();
    setInterval(setSlide, 5000);
});