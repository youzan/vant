<template>
    <div>Hello {{ name }}</div>
</template>

<script>
    export default {
        name: 'SampleComponent',
        data() {
            return {
                name: 'World'
            };
        }
    };
</script>
