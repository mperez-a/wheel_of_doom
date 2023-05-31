const modalAdd = document.querySelector('#modalAdd');

const openModal = () => {
    modalAdd.style.display = 'flex';
}

const closeModal = () => {
    modalAdd.style.display = 'none';
}

modalAdd.onclik = (event) => {
    if(event.target == modalAdd) {
        closeModal();
    }
}