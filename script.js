// When the user clicks on the CTA, show the brain section
document.querySelector('.cta').addEventListener('click', function() {
    // Create the "sucked into the pupil" effect
    document.querySelector('.landing-page').style.transition = 'transform 1s';
    document.querySelector('.landing-page').style.transform = 'scale(0)';

    // After animation, display the brain section
    setTimeout(function() {
        document.querySelector('.landing-page').style.display = 'none';
        document.getElementById('brain-section').style.display = 'block';
    }, 1000);
});
