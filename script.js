const profilePic = document.getElementById('profile-pic');
const nameElement = document.querySelector('.name');

let isMoving = false;

const showName = () => {
    if (isMoving) {
        nameElement.style.visibility = 'visible';
    }
};

const hideName = () => {
    nameElement.style.visibility = 'hidden';
};

profilePic.addEventListener('mouseenter', () => {
    setTimeout(showName, 2000); // Retraso de 5000 milisegundos (5 segundos)
});

profilePic.addEventListener('mouseleave', () => {
    hideName();
});

profilePic.addEventListener('mousemove', () => {
    isMoving = true;
    showName();
});

profilePic.addEventListener('mouseout', () => {
    isMoving = false;
    hideName();
});
