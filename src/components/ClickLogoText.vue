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
        position: absolute;
        animation: bounce 1.8s ease-out 5s;
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
        0% { bottom: 50%; animation-timing-function: ease-in; scale: 0%; }
        14% { bottom: 5%; animation-timing-function: ease-out; scale: 1; }
        28% { bottom: 20%; animation-timing-function: ease-in; }
        42% { bottom: 5%; animation-timing-function: ease-out; }
        56% { bottom: 15%; animation-timing-function: ease-in; }
        70% { bottom: 5%; animation-timing-function: ease-out; }
        85% { bottom: 12%; animation-timing-function: ease-in; }
        100% { bottom: 5%; animation-timing-function: ease-out; }
    }

    @keyframes letter-bounce {
        0% { bottom: 0; }
        2.5% { bottom: 5px; }
        5% { bottom: 0; }
        100% { bottom: 0; }
    }
    
</style>
