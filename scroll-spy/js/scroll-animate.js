;(function(){

    const animatedElements = document.querySelectorAll('.scroll-animate');

    function scrollHandler(event) {
        // console.log(window.pageYOffset);
        // console.log(window.innerHeight);
        // console.log(animatedElements[0].offsetTop)
        animatedElements.forEach( (element, key) => {
            let scrollY = window.pageYOffset;
            let vpHeight = window.innerHeight;
            let bottomY = element.offsetTop + element.clientHeight;
            if(bottomY + 1 < scrollY + vpHeight) {
                element.classList.add('animate-play');
            }
        } );
    }

    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('load', scrollHandler);

})();