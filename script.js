document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', () => {
            const paragraph = button.previousElementSibling;
            paragraph.classList.toggle('expanded');
            button.textContent = paragraph.classList.contains('expanded') ? 'Read less' : 'Read more';
        });
    });
});