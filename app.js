document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const header = document.querySelector('.header');


    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log(link.textContent);
    });
    });


    // const demoBtn = document.querySelector('.demo-btn');

    demoBtn.addEventListener('click', () => {
    alert('Demo button басылды!');
    });


    /////////

    const miniature = document.querySelector('.miniature');
    const bgImage = document.querySelector('.miniature .images img');

    bgImage.style.opacity = '0.8';

    const subtitle = document.querySelector('.subtitle');
    const title = document.querySelector('.title');
    const desc = document.querySelector('.desc');


    const emailInput = document.querySelector('.form input');
    const demoBtn = document.querySelector('.form .demo-btn');

    demoBtn.addEventListener('click', () => {
        const emailValue = emailInput.value;

        if (emailValue === '') {
            alert('Email киргизиңиз');
        } else {
            console.log('Email:', emailValue);
        }
    });

    emailInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            demoBtn.click();
        }
    });


})


