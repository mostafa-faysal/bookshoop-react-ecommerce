document.addEventListener('click', function(e) {
    if (e.target.closest('.see-pass')) {
        const seePass = e.target.closest('.see-pass');
        const input = seePass.previousElementSibling;
        if (input && input.type === 'password') {
