document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.card');
    const logo = document.querySelector('.logo');
    const elementsToToggle = document.querySelectorAll('.card, .flex-con > h1');
    const logoText = document.querySelector('.logo-text');
    let elementsHidden = false;
    const contacts = document.querySelector('.contacts');
    const aboutButton = document.getElementById('about');
    const aboutElement = document.querySelector('.about');
    const aboutText = document.querySelector('.about-text');
    const contactToggleBtn = document.getElementById('contacts');
    const discordBtn = document.querySelector('.discord');
    const supportBtns = document.querySelector('.support');
    const supportToggleBtn = document.getElementById('support');
    supportBtns.classList.add('hidden');
    aboutElement.classList.add('hidden');
    contacts.classList.add('hidden');

    function changeLogoText(newText) {
        logoText.classList.add('text-fade');
        setTimeout(() => {
            logoText.textContent = newText;
            logoText.classList.remove('text-fade');
            logoText.classList.add('text-fade-reverse');
            logoText.classList.add('poppins-semibold');
            setTimeout(() => {
                logoText.classList.remove('text-fade-reverse');
            }, 250);
        }, 250);
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!elementsHidden) {
                elementsToToggle.forEach(element => {
                    element.classList.add('fade-out');
                    logo.classList.add('logo-click');
                });

                setTimeout(() => {
                    elementsToToggle.forEach(element => {
                        element.classList.add('hidden');
                    });
                    elementsHidden = true;
                }, 750);

                changeLogoText('Go back');
            }
        });
    });

    aboutButton.addEventListener('click', function() {
            // Показываем элемент
            supportBtns.classList.add('hidden');
            aboutText.classList.remove('hidden');
            contacts.classList.add('hidden');
            aboutElement.classList.remove('hidden');
            aboutElement.classList.remove('fade-out');
            aboutElement.classList.add('fade-in');
    });

    // discordBtn.addEventListener('click', function() {
    //         navigator.clipboard.writeText('@jumpcat_');
    //         alert('Discord nickname copied!');
    // });

    contactToggleBtn.addEventListener('click', function() {
        // Показываем элемент
        supportBtns.classList.add('hidden');
        aboutText.classList.add('hidden');
        contacts.classList.remove('hidden');
        aboutElement.classList.remove('hidden');
        aboutElement.classList.remove('fade-out');
        aboutElement.classList.add('fade-in');
    });

    supportToggleBtn.addEventListener('click', function() {
        // Показываем элемент
        aboutText.classList.add('hidden');
        supportBtns.classList.remove('hidden');
        contacts.classList.add('hidden');
        aboutElement.classList.remove('hidden');
        aboutElement.classList.remove('fade-out');
        aboutElement.classList.add('fade-in');
    });

    logo.addEventListener('click', function() {
        if (elementsHidden) {
            elementsToToggle.forEach(element => {
                element.classList.remove('hidden');
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
                logo.classList.remove('logo-click');
                aboutElement.classList.remove('fade-in');
                aboutElement.classList.add('fade-out');

            });

            setTimeout(() => {
                elementsToToggle.forEach(element => {
                    element.classList.remove('fade-in');
                    aboutElement.classList.add('hidden');
                });
                elementsHidden = false;
            }, 750);

            changeLogoText('Made by');
        }
    });
});