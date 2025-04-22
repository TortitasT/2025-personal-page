<template>
  <div>
    <Background />

    <div class="px-2 max-w-screen-md mx-auto">
      <main class="min-h-[90vh]">
        <slot />
      </main>
      <Menu />
      <Footer />
    </div>
  </div>
</template>
