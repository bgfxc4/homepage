<template>
    <div id="logo-container">
        <h1>bgfxc4</h1>
        <img src="/logo.svg" id="logo">
    </div>

    <svg id="paths">
    </svg>
</template>

<script>
export default {
    name: "LogoAnimation",
    data () {
        return {
            
        }
    },
    methods: {
        generateAntPaths () {
            console.log("generate")
            $(".path").remove()
            for (var i = 0; i < 4; i++) {
                var el = this.generatePath()
                $("#paths")[0].innerHTML += el
            }
        },
        generatePath () {
            var w = window.innerWidth
            var h = window.innerHeight

            var goVertical = Math.random() > .5
            var startLeftOrTop = Math.random() > .5

            var d = ""

            if (goVertical) {
                d = `M${Math.floor(Math.random() * w)} ${startLeftOrTop ? 0 : h} `
            } else {
                d = `M${startLeftOrTop ? 0 : w} ${Math.floor(Math.random() * h)} `
            }

            while (Math.random() > .2) {
                if (goVertical) {
                    d += `V${Math.floor(Math.random() * h)} `
                } else {
                    d += `H${Math.floor(Math.random() * w)} `
                }
                goVertical = !goVertical
            }
            d += goVertical ? `V${(Math.random() > .5) ? h : 0}` : `H${(Math.random() > .5) ? w : 0}`

            var p = `<path d="${d}" class="path"/>`
            return p
        }
    },
    created () {
        document.addEventListener("DOMContentLoaded", this.generateAntPaths)
        window.addEventListener("resize", this.generateAntPaths)
    }
}
</script>

<style>
    h1 {
        font-weight: 500;
        font-size: 5vw;
    }

    #logo-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    #logo {
        max-height: 50vh;
        width: 30vw;
        height: auto;
    }

    #app, html {
        margin: 0;
        padding: 0;
        height: 100vh !important;
        width: 100vw !important;
        overflow: hidden
    }

    #paths {
        height: 100vh;
        width: 100vw;
    }

    .path {
        fill: none;
        stroke: black;
        stroke-dasharray: 6% 500%;
        stroke-width: 0.6%;
        stroke-dashoffset: 0%;
        stroke-linecap: round;
        stroke-linejoin: round;
        animation: stroke-offset 20s infinite linear;
    }

    .a {
        fill: black !important;
    }

    @keyframes stroke-offset{
        100% {stroke-dashoffset: -506%;}
    }
</style>