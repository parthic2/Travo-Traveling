const animateColumn = () => {
    const leftColumn = document.querySelector('.customerLeftColumn');
    const rightColumn = document.querySelector('.customerRightColumn');

    if (isInView(leftColumn)) {
        leftColumn.classList.add('animate-left');
    }

    if (isInView(rightColumn)) {
        rightColumn.classList.add('animate-right');
    }
};

const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight;
};

export { animateColumn };