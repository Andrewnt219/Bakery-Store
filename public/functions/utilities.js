function display(e, hiddenSection) {
        const hidden = document.querySelector(`section.${hiddenSection}`) || null;
        const navA = document.querySelectorAll('nav a');
        navA.forEach(a => {
            a.classList.toggle('unfocus');
        })
        if (hidden) {
            hidden.classList.toggle('hidden');
            hidden.classList.toggle('right-block');
        }
        e.classList.toggle('active');
}