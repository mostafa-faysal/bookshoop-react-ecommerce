// No password fields, toggle ready if added
document.addEventListener('click', function(e) {
    if (e.target.closest('.see-pass')) {
        const seePass = e.target.closest('.see-pass');
        const input = seePass.previousElementSibling;
        if (input && input.type === 'password') {
            input.type = input.type === 'password' ? 'text' : 'password';
        }
    }
});
