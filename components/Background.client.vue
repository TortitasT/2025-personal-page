<script setup lang="ts">
const forms = [
  'polygon(-3.31652% 56.0047%, 67.5839% 95.4504%, 53.3124% 86.4478%, 10.2059% 83.6173%, 83.9588% 61.5393%, -4.33059% 30.0966%, 87.2639% 62.0239%, 33.2187% 6.53392%, 82.9826% 79.5861%, 53.4041% 57.518%, 96.6419% 77.1886%, 3.9731% 32.3404%, 41.0043% 51.8119%, 86.054% 63.9687%, 93.0579% 40.4152%, 62.0031% 22.7797%)',
  'polygon(71.3662% 88.2584%, 88.9053% 49.4298%, 31.2173% 39.4234%, -43.0712% 69.1821%, 20.5745% 3.01482%, 26.6767% 24.2756%, 95.2265% -16.6889%, 1.80727% 88.8693%, 85.0275% 66.1241%, 91.3816% 23.4428%, 37.679% 26.9251%, 6.59737% 60.6252%, 20.1448% -16.4198%, 30.1831% 81.2556%, 86.2117% 63.3212%, 18.4645% 26.9463%)',
  'polygon(41.0963% 68.8089%, 26.4768% 69.6383%, 77.6419% 40.5657%, 61.0205% 10.7141%, -31.5607% 72.3244%, 76.8522% 80.215%, 102.222% 73.9815%, 46.6915% 74.0397%, 62.1657% 16.9349%, 78.2081% 31.9183%, 63.3723% 65.4531%, 2.49131% 11.0426%, 24.5758% 97.0606%, 94.0774% 12.7749%, 3.81778% 65.705%, 15.8594% 99.2035%)',
  'polygon(81.3581% 50.4735%, 67.1092% 31.8681%, 24.3545% 2.64204%, 67.6474% 16.4001%, 51.5586% 87.7444%, 18.8367% 91.1529%, 106.936% 89.611%, 76.1141% 18.305%, -7.95424% 35.8285%, 55.9901% 43.2783%, 28.258% 86.3203%, 32.5048% 96.9447%, 27.4318% 55.632%, -10.1186% 22.4673%, 73.5905% 79.9094%, 51.1786% 19.3365%)',
]

const style = ref({
  clipPath: forms[0],
  transition: 'clip-path 3s ease-in-out, transform 0.1s ease-in-out',
  transform: 'translateY(0)',
})

onMounted(() => {
  const randomizeClipPathForm = () => {
    const randomForm = () => forms[Math.floor(Math.random() * forms.length)]
    let newForm = randomForm()
    while (newForm === style.value.clipPath) {
      newForm = randomForm()
    }

    style.value.clipPath = newForm
  }

  setTimeout(() => {
    randomizeClipPathForm()

    setInterval(() => {
      randomizeClipPathForm()
    }, 3000)
  }, 1000)

  document.addEventListener('scroll', () => {
    style.value.transform = `translateY(-${window.scrollY * 0.1}px)`
  })
})
</script>

<template>
  <div class="absolute top-0 bottom-[25vh] left-[5vw] right-[5vw] -z-20 transform-gpu blur-3xl overflow-hidden">
    <div
      class="aspect-[1.7] h-full w-full bg-accent-200"
      :style="style"
    />
  </div>
</template>
