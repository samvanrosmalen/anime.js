anime({
    targets: '.square',
    translateX: 250,
    rotate: 360,
    scale: 3,
    duration: 3000,
    loop: true,
    direction: 'alternate'

});

anime({
    targets: '.cirkel',
    keyframes: [
        {translateY: -40},
        {translateX: 250},
        {translateY: 40},
        {translateX: 0},
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
});

anime({
    targets: '#cirkel, #cirkel1, #cirkel2, .el',
    translateX: function(el) {
        return el.getAttribute('data-x');
      },
      translateY: function(el, i) {
        return 50 + (-50 * i);
      },
      scale: function(el, i, l) {
        return (l - i) + .25;
      },
      rotate: function() { return anime.random(-360, 360); },
      borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
      duration: function() { return anime.random(1200, 1800); },
      delay: function() { return anime.random(0, 400); },
      direction: 'alternate',
      loop: true
});

