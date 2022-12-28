
        const coursesWrapper = document.querySelector('#courses-wrapper');
        const projectWrapper = document.querySelector('#project-wrapper');
        const homeWrapper = document.querySelector('#home-wrapper');
        const xpWrapper =document.querySelector('#xp-initial');
        const menuItems = document.querySelectorAll('.menu-item');
        const p_card = document.querySelectorAll('.p-card');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                console.log(entry.target.id);
                if (entry.isIntersecting) {
                    menuItems.forEach(item => {
                        item.classList.remove('active');
                        document.querySelector('.wp-wrapper').classList.remove('wp-active');
    
                    })
                    if (entry.target.id === 'courses-wrapper') {
                        document.querySelector('.cources').classList.add('active');
                        document.querySelector('.wp-wrapper').classList.add('wp-active');
       

                        console.log('courses');
                    } else if (entry.target.id === 'project-wrapper') {
                        document.querySelector('.project').classList.add('active');
         

                    } else if (entry.target.id === 'home-wrapper') {
                        document.querySelector('.home').classList.add('active');
                        console.log('nada');
                    } else if(entry.target.id === 'xp-initial'){
                        document.querySelector('.xp').classList.add('active');
           
                    }

                }
            })
        }, options)

        observer.observe(xpWrapper);
        observer.observe(coursesWrapper);
        observer.observe(projectWrapper);
        observer.observe(homeWrapper);
        observer.observe(p_card);

        $('.carousel').on('touchstart', function (event) {
            const xClick = event.originalEvent.touches[0].pageX;
            $(this).one('touchmove', function (event) {
                const xMove = event.originalEvent.touches[0].pageX;
                const sensitivityInPx = 5;

                if (Math.floor(xClick - xMove) > sensitivityInPx) {
                    $(this).carousel('next');
                }
                else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
                    $(this).carousel('prev');
                }
            });
            $(this).on('touchend', function () {
                $(this).off('touchmove');
            });
        });

        $('.carousel').carousel({
            interval: 10000
        })

        function hide() {
            document.getElementById("myLinks").style.display = "none";
        }

        function myFunction() {
            console.log("xsax");
            var x = document.getElementById("myLinks");
            if (x.style.display === "flex") {
                x.style.display = "none";
            } else {
                x.style.display = "flex";
            }
        }
