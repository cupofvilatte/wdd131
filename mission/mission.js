document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('theme');

    selectElement.addEventListener('change', function() {
        const selectedValue = this.value;
        if (selectedValue == 'dark') {
            document.body.classList.add('dark');
            const logo = document.getElementById('byui-logo');
            logo.src = './photos/byui-logo_white.png';
        } else {
            document.body.classList.remove('dark');
            const logo = document.getElementById('byui-logo');
            logo.src = './photos/byui-logo_blue.webp';
        }
    });
});