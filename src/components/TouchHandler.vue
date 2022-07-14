<template>
  
</template>

<script>
export default {
    name: "TouchHandler",
    emits: [
        "swipeLeft",
        "swipeRight",
        "swipeUp",
        "swipeDown",
    ],
    data () {
        return {
            xDown: null,                                                        
            yDown: null  
        }
    },
    methods: {
        handleTouchMove(evt) {
            if ( ! this.xDown || ! this.yDown ) {
                return;
            }

            var xUp = evt.touches[0].clientX;                                    
            var yUp = evt.touches[0].clientY;

            var xDiff = this.xDown - xUp;
            var yDiff = this.yDown - yUp;
                                                                                
            if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                if ( xDiff > 0 ) {
                    this.$emit("swipeRight")
                } else {
                    this.$emit("swipeLeft")
                }                       
            } else {
                if ( yDiff > 0 ) {
                    this.$emit("swipeDown")
                } else {
                    this.$emit("swipeUp")
                }                                                                 
            }
            /* reset values */
            this.xDown = null;
            this.yDown = null;                                             
        },
        handleTouchStart(evt) {
            const firstTouch = this.getTouches(evt)[0];                                      
            this.xDown = firstTouch.clientX;                                      
            this.yDown = firstTouch.clientY;                                      
        },
        getTouches(evt) {
            return evt.touches || evt.originalEvent.touches;
        }  
    },
    mounted () {
        document.addEventListener('touchstart', this.handleTouchStart, false);        
        document.addEventListener('touchmove', this.handleTouchMove, false);                                                                                                                                                            
    }
}
</script>

<style>

</style>