// animateColumns.js
const animateColumns = () => {
    const leftColumn = document.querySelector('.customerLeftColumns');
    const rightColumn = document.querySelector('.customerRightColumns');

    if (isInView(leftColumn)) {
        leftColumn.classList.add('animate-left');
    }

    if (isInView(rightColumn)) {
        rightColumn.classList.add('animate-right');
    }
};

const isInView = (element) => {
    if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight;
    } else {
        console.log("error");
    }
};

export { animateColumns };
