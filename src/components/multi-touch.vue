<template>
    <div>
        <div style="height: 250px;"
             class="flex justify-center items-center mx-4 bg-gray-700 rounded-2xl shadow-2xl"
             @touchstart="touch"
             @touchend="touch"
             @touchcancel="touch"
        >
            <p class="text-2xl text-gray-100">Touch Me</p>
        </div>

        <p class="m-8 ml-16 text-xl">Last event: {{ eventType }}</p>
        <p class="m-4 ml-16 text-xl">Number of touches: {{ numTouches }}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      eventType: '',
      numTouches: 0,
    }
  },

  methods: {
    touch(event) {
      this.eventType = event.type;
      this.numTouches = event.touches.length;
    }
  }
};
</script>