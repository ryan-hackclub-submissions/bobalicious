
function changeFlavor(element) {
    document.querySelectorAll('.flavor-item').forEach(item => {
        item.classList.remove('selected');
    });

    element.classList.add('selected');

    // Switcheroo
    var newImage = element.getAttribute('data-image');
    var bobaImage = document.getElementById('boba-image');
    // i guess think works
    // i hate web dev
    bobaImage.src = newImage;
    bobaImage.style.opacity = 0;
    bobaImage.onload = function() {
        bobaImage.style.opacity = 1;
    }
    

    document.getElementById('flavor-text').textContent = 'Flavor: ' + element.textContent;
}


function selectSweetness(element) {
    // ONE ONE DOSE OF ICE TO BE SLIGHTLY HEALTHY
    document.querySelectorAll('#sweetness-section .option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    element.classList.add('selected');
    document.getElementById('sweetness-text').textContent = 'Sweetness: ' + element.textContent;
}


function selectIce(element) {
    // WHO TF WANTS 2x SERVINGS OF ICE
    document.querySelectorAll('#ice-section .option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    element.classList.add('selected');
    document.getElementById('ice-text').textContent = 'Ice: ' + element.textContent;
}

// Menu Toggle
function toggleMenu() {
    var dropdown = document.getElementById('menu-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}