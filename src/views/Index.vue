<template>
	<div class="index">
		<header-top></header-top>
		<carousel></carousel>
		<recommend></recommend>
		<culture></culture>
		<rotate></rotate>
		<footer-bottom></footer-bottom>
	</div>
</template>
<script>
import Recommend from "../components/Recommend"
import Rotate from "../components/Rotate"
import Culture from "../components/Culture"
import Carousel from "../components/Carousel"
export default {
  components: {Recommend,Rotate,Culture,Carousel},
}
</script>