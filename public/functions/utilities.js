function display(e, hiddenSection) {
        const hidden = document.querySelector(`section.${hiddenSection}`) || null;
        const navA = document.querySelectorAll('nav a');
        navA.forEach(a => {
            a.classList.toggle('unfocus');
        })
        if (hidden) {
            hidden.classList.toggle('hidden');
        }
        e.classList.toggle('active');
}

(function rating() {
    const p = document.querySelector('p.rating');
    if (Number(p.textContent) > 4.0)
        p.classList.add('good');
    else
        p.classList.add('bad');
})();