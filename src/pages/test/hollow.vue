<template>
    <svg class="svg" width="100%" height="100%">
        <defs>
            <mask id="myMask">
                <rect x="0" y="0" width="100%" height="100%" style="stroke:none; fill: #ccc"></rect>
                <rect width="200" height="80" x="100" y="100" style="fill: #000"></rect>
            </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" style="stroke: none; fill: rgba(0, 0, 0, 0.6); mask: url(#myMask)"></rect>
    </svg>
</template>