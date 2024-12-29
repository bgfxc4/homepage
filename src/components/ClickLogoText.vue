<template>
    <span id="ClickLogoText">
        <span class="letter">C</span>
        <span class="letter">l</span>
        <span class="letter">i</span>
        <span class="letter">c</span>
        <span class="letter">k</span>
        <span class="letter after-space">t</span>
        <span class="letter">h</span>
        <span class="letter">e</span>
        <span class="letter after-space">l</span>
        <span class="letter">o</span>
        <span class="letter">g</span>
        <span class="letter">o</span>
        <span class="letter">.</span>
        <span class="letter">.</span>
        <span class="letter">.</span>
    </span>
</template>

<script>
export default { 
	name: "ClickLogoText",
}
</script>

<style>
    #ClickLogoText {
        --bounce-easing: linear(
            0, 0.004, 0.016, 0.035, 0.063, 0.098, 0.141, 0.191, 0.25, 0.317, 0.391 22.7%,
            0.563, 0.765, 1 36.4%, 0.941, 0.891, 0.848, 0.813, 0.785, 0.766, 0.754, 0.75,
            0.754, 0.766, 0.785, 0.813, 0.848, 0.891, 0.941, 1, 0.973, 0.953, 0.941,
            0.938, 0.941, 0.953, 0.973, 1, 0.988, 0.984, 0.988, 1
        );

        position: absolute;
        animation: bounce 1.8s 5s;
        animation-timing-function: var(--bounce-easing);
        bottom: 50%;
        left: 50%;
        translate: -50% 0;
        z-index: -20;
        animation-fill-mode: both;
    }

    .letter {
        font-size: 3vh;
        font-weight: bold;
        animation: letter-bounce 5s cubic-bezier(0.4, 0, 1, 1) infinite;
    }

    .letter.after-space {
        margin-left: .19em;
    }

    .letter:nth-child(1) { animation-delay: .0s; }
    .letter:nth-child(2) { animation-delay: .05s; }
    .letter:nth-child(3) { animation-delay: .1s; }
    .letter:nth-child(4) { animation-delay: .15s; }
    .letter:nth-child(5) { animation-delay: .2s; }
    .letter:nth-child(6) { animation-delay: .25s; }
    .letter:nth-child(7) { animation-delay: .3s; }
    .letter:nth-child(8) { animation-delay: .35s; }
    .letter:nth-child(9) { animation-delay: .4s; }
    .letter:nth-child(10) { animation-delay: .45s; }
    .letter:nth-child(11) { animation-delay: .5s; }
    .letter:nth-child(12) { animation-delay: .55s; }
    .letter:nth-child(13) { animation-delay: .6s; }
    .letter:nth-child(14) { animation-delay: .65s; }
    .letter:nth-child(15) { animation-delay: .7s; }

    @keyframes bounce {
        0% { bottom: 50%; scale: 0; }
        1% { scale: 1 }
        100% { bottom: 5%; }
    }

    @keyframes letter-bounce {
        0% { bottom: 0; }
        2.5% { bottom: 5px; }
        5% { bottom: 0; }
        100% { bottom: 0; }
    }
    
</style>
