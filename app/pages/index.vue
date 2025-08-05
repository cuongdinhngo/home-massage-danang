<template>
  <header id="header" class="h-screen flex flex-col justify-between bg-cover bg-center ">
     <nav class="container mx-auto px-4 flex justify-between items-center">
      <a href="#" class="block">
        <img :src="getImagePath('logo-white.png')" alt="Massage Đà Nẵng Logo" class="h-12" width="169" height="48">
      </a>

      <div class="relative">
        <button
          @click="state.showLocales = !state.showLocales"
          aria-label="Change Language"
        >
          <img :src="getFlagPath(`${locale}.svg`)" alt="Vi" width="32" height="32">
        </button>

        <Transition name="locale-menu">
          <div
            v-if="state.showLocales"
            class="absolute right-0 flex space-x-2 px-2 bg-white shadow rounded-lg"
          >
            <template v-for="loc in locales" :key="loc.code">
              <button
                class="w-8 h-8"
                @click="setLocale(loc.code)"
              >
                <img :src="getFlagPath(`${loc.code}.svg`)" :alt="loc.name" width="32" height="32"/>
              </button>
            </template>
          </div>
        </Transition>

      </div>
    </nav>

    <section id="hero" class="container max-auto items-center grid grid-cols-1 md:grid-cols-2">
      <div class="text-center text-white px-4">
        <h2 class="text-4xl md:text-8xl font-extrabold my-4">{{ $t('banner_title') }}</h2>
        <p class="text-lg mb-10">{{ $t('banner_description') }}</p>
        <a href="#" class="bg-primary font-bold py-5 px-10 rounded-lg">{{ $t('book_now') }}</a>
      </div>

      <div class="flex justify-center md:justify-end">
        <img :src="getImagePath('hero.png')" alt="Hình ảnh Massage" width="736" height="736" class="">
      </div>
    </section>
  </header>

  <main>
    <!-- SERVICES -->
    <section id="services" class="py-16 bg-gray-100">
      <div class="container mx-auto my-10 px-4">
        <h2 class="text-3xl font-bold text-center mb-8">{{ $t('services.title') }}</h2>
        <p class="mt-4 mb-16 text-center">{{ $t('services.description') }}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8">
          <template v-for="service in $tm('services.list')">
            <div class="bg-white rounded-lg shadow text-center hover:shadow-lg hover:scale-105 transition duration-400">
              <img :src="getImagePath($rt(service.image))" :alt="$rt(service.title)" class="rounded-t-lg">
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary">{{ $rt(service.title) }}</h5>
                <p>{{ $rt(service.description) }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- PRICES -->
    <section id="prices">
      <div class="container mx-auto my-10 px-4">
        <h2 class="text-3xl font-bold text-center mb-8">{{ $t('prices.title') }}</h2>
        <p class="mt-4 mb-16 text-center">{{ $t('prices.description') }}</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <template v-for="list in $tm('prices.list')">
            <div class="bg-white rounded-lg shadow text-center hover:shadow-lg hover:scale-105 transition duration-400">
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary">{{ $rt(list.name) }}</h5>
                <ul>
                  <li v-for="item in list.items" class="flex justify-between items-center py-2 border-b last:border-0 border-gray-200">
                    <span>{{ $rt(item.duration) }}</span>
                    <span class="font-semibold">{{ $rt(item.price) }}</span>
                  </li>
                </ul>
                <p class="text-gray-500" v-if="list.note">{{ $rt(list.note) }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- ABOUT US -->
    <section id="aboutUs" class="py-10">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        <div class="text-white">
          <h2 class="text-3xl font-bold text-center mb-8">{{ $t('about.title') }}</h2>
          <p class="mb-4">{{ $t('about.description') }}</p>
          <p class="text-center">{{ $t('about.mission') }}</p>
        </div>
        <img
          :src="getImagePath('about-us.jpg')" alt="Về Chúng Tôi" width="736" height="617"
          class="rounded-xl shadow-lg w-full h-auto object-cover"
        >
      </div>
    </section>

    <!-- CUSTOMER's FEEDBACKs -->
    <section id="testimonials" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">{{ $t('feedbacks.title') }}</h2>
        <p class="mt-4 mb-16 text-center">{{ $t('feedbacks.description') }}</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <template v-for="testimonial in $tm('feedbacks.testimonials')">
            <div class="rounded-lg shadow p-6">
              <p class="text-gray-700 mb-4 h-10">{{ $rt(testimonial.feedback) }}</p>
              <div class="flex items-center">
                <img src="https://randomuser.me/api/portraits/lego/3.jpg" :alt="$rt(testimonial.name)" class="w-12 h-12 rounded-full mr-3">
                <div>
                  <p class="font-semibold">{{ $rt(testimonial.name) }}</p>
                  <p class="text-gray-500">{{ $rt(testimonial.from) }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <footer class="bg-gray-800 text-white py-8">
      <div class="container grid grid-cols-1 md:grid-cols-2 mx-auto px-4">
        <div class="flex flex-col items-center md:items-start mb-10">
          <img
            :src="getImagePath('logo-white.png')" alt="Massage Đà Nẵng Logo" width="169" height="48"
            class=""
          >
          <p class="">© 2023 HomeMassageDanang. All rights reserved.</p>
        </div>

        <div class="text-center md:text-right order-first md:order-last mb-10">
          <p class="mb-4">{{ $t('contact') }}</p>
          <div class="flex justify-center md:justify-end space-x-6">
            <a href="#" class="text-white hover:text-gray-400">
              <img :src="getLogoPath('facebook.svg')" alt="Facebook" width="24" height="24">
            </a>
            <a href="#" class="text-white hover:text-gray-400">
              <img :src="getLogoPath('kakaotalk.svg')" alt="Instagram" width="24" height="24">
            </a>
            <a href="#" class="text-white hover:text-gray-400">
              <img :src="getLogoPath('phone.svg')" alt="Twitter" width="24" height="24">
            </a>
            <a href="#" class="text-white hover:text-gray-400">
              <img :src="getLogoPath('wechat.svg')" alt="YouTube" width="24" height="24">
            </a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>
<script setup lang="ts">
const state = reactive({
  showLocales: false
});

const { locales, locale, setLocale } = useI18n();
</script>
<style>
#header {
  background-image: linear-gradient(to right, rgba(105, 67, 41, 0.7), rgba(105, 67, 41, 0.95)), url('/images/hero-bg.png');
  background-size: cover;
  background-position: center;
}

#aboutUs {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0)), url('/images/about-us-bg.jpg');
  background-size: cover;
  background-position: center;
}

.locale-menu-enter-active {
  transition: all 0.3s ease-out;
}

.locale-menu-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.locale-menu-enter-from,
.locale-menu-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>