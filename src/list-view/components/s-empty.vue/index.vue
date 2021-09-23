<template>
  <div :class="$style.empty" s-empty="true">+</div>
</template>
<script>

export default {
    name: 's-empty',
    props: {},
};
</script>
<style module>
.empty {
	  background: #F7F8FA;
    text-align: center;
    color: #ccc;
		min-height: 32px;
		min-width: 90px;
		width: 100%;
    align-items: center;
    display: inline-flex;
    justify-content: center;
}
</style>