var bodyB = document.body,
        overlayB = document.querySelector('.overlayB'),
        overlayBttsB = document.querySelectorAll('img[class$="overlayB"]');

    [].forEach.call(overlayBttsB, function(bttB) {

      bttB.addEventListener('click', function() {

         /* Detect the button class name */
         var overlayOpenB = this.className === 'open-overlayB';

         /* Toggle the aria-hidden state on the overlay and the
            no-scroll class on the body */
         overlayB.setAttribute('aria-hidden', !overlayOpenB);
         bodyB.classList.toggle('noscroll', overlayOpenB);

         /* On some mobile browser when the overlay was previously
            opened and scrolled, if you open it again it doesn't
            reset its scrollTop property after the fadeout */
         setTimeout(function() {
             overlayB.scrollTop = 0;              }, 1000)

      }, false);

    });
