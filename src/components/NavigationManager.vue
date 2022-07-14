<template>
        <link-arrow v-if="arrowLeft" :direction="'left'" :routerLink="linkLeft" :onClick="() => $emit('onLeft')"/>
        <link-arrow v-if="arrowRight" :direction="'right'" :routerLink="linkRight" :onClick="() => $emit('onRight')"/>
        <link-arrow v-if="arrowTop" :direction="'up'" :routerLink="linkTop" :onClick="() => $emit('onUp')"/>
        <link-arrow v-if="arrowBottom" :direction="'down'" :routerLink="linkBottom" :onClick="() => $emit('onDown')"/>

		<touch-handler @swipeLeft="$emit('onLeft'); (linkLeft != '' && $router.push(linkLeft))" @swipeUp="$emit('onUp'); (linkTop != '' && $router.push(linkTop))" 
                @swipeDown="$emit('onDown'); (linkBottom != '' && $router.push(linkBottom))" @swipeRight="$emit('onRight'); (linkRight != '' && $router.push(linkRight))"/>
</template>

<script>
import LinkArrow from "./LinkArrow.vue"
import TouchHandler from "./TouchHandler.vue"

export default {
    name: "NavigationManager",
    emits: ["onLeft", "onRight", "onUp", "onDown"],
    components: {
            LinkArrow,
            TouchHandler
    },
    props: {
        allowScrollVertical: { type: Boolean, default: true },
        allowScrollHorizontal: { type: Boolean, default: true },
        allowTouchVertical: { type: Boolean, default: true },
        allowTouchHorizontal: { type: Boolean, default: true },

        arrowLeft: { type: Boolean, default: true },
        arrowRight: { type: Boolean, default: true },
        arrowTop: { type: Boolean, default: true },
        arrowBottom: { type: Boolean, default: true },

        linkLeft: {type: String, default: ""},
        linkRight: {type: String, default: ""},
        linkTop: {type: String, default: ""},
        linkBottom: {type: String, default: ""},
    }
}
</script>

<style>

</style>