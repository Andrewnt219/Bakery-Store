function display(node) {
    const show = document.querySelector(`section.${node}`);
    show.classList.toggle('hidden');
    show.classList.toggle('right-block');
}

function nav(e) {
    console.log(e);
}
