function display(node) {
    console.log('display called')
    const show = document.querySelector(`section.${node}`);
    show.classList.toggle('hidden');
    show.classList.toggle('right-block');
}
