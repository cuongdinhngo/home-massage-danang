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
          <img :src="getFlagPath('vi.svg')" alt="Vi" width="32" height="32">
        </button>

        <Transition name="locale-menu">
          <div
            v-if="state.showLocales"
            class="absolute right-0 flex space-x-2 px-2 bg-white shadow rounded-lg"
          >
            <button class=" w-8 h-8 ">
              <img src="/flags/en.svg" width="32" height="32"/>
            </button>
            <button class=" w-8 h-8 ">
              <img src="/flags/en.svg" width="32" height="32"/>
            </button>
          </div>
        </Transition>

      </div>
    </nav>

    <section id="hero" class="container max-auto items-center grid grid-cols-1 md:grid-cols-2">
      <div class="text-center text-white px-4">
        <h2 class="text-4xl md:text-8xl font-extrabold my-4">Massage Đà Nẵng</h2>
        <p class="text-lg mb-10">Trải nghiệm dịch vụ massage tại nhà chuyên nghiệp và thư giãn.</p>
        <a href="#" class="bg-primary font-bold py-5 px-10 rounded-lg">Xem Dịch Vụ</a>
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
        <h2 class="text-3xl font-bold text-center mb-8">Liệu Trình Chăm Sóc</h2>
        <p class="mt-4 mb-16 text-center">Chúng tôi cung cấp các liệu trình đa dạng, phù hợp với mọi nhu cầu thư giãn và trị liệu của bạn.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8">
          <div class="bg-white rounded-lg shadow text-center hover:shadow-lg hover:scale-105 transition duration-400">
            <img :src="getImagePath('service-body.jpg')" alt="Dịch vụ 1" class="rounded-t-lg">
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary">Massage toàn thân</h5>
              <p>Liệu pháp massage toàn thân giúp giảm căng thẳng, cải thiện tuần hoàn máu và mang lại cảm giác thư giãn sâu.</p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow text-center">
            <img :src="getImagePath('service-body.jpg')" alt="Dịch vụ 1" class="rounded-t-lg">
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary">Massage toàn thân</h5>
              <p>Liệu pháp massage toàn thân giúp giảm căng thẳng, cải thiện tuần hoàn máu và mang lại cảm giác thư giãn sâu.</p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow text-center">
            <img :src="getImagePath('service-body.jpg')" alt="Dịch vụ 1" class="rounded-t-lg">
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary">Massage toàn thân</h5>
              <p>Liệu pháp massage toàn thân giúp giảm căng thẳng, cải thiện tuần hoàn máu và mang lại cảm giác thư giãn sâu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICES -->
    <section id="prices">
      <div class="container mx-auto my-10 px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Chi Phí Dịch Vụ</h2>
        <p class="mt-4 mb-16 text-center">Các gói dịch vụ được thiết kế linh hoạt, đảm bảo chất lượng với chi phí hợp lý nhất.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div class="bg-white rounded-lg shadow text-center hover:shadow-lg hover:scale-105 transition duration-400">
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary">Gói Cơ Bản</h5>
              <ul>
                <li class="flex justify-between items-center mb-2">
                  <span>60 phút</span>
                  <span class="font-semibold">500k</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow text-center">
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary">Gói Nâng Cao</h5>
              <p class="text-xl font-semibold mb-4">800.000 VNĐ</p>
              <p>Massage toàn thân 90 phút, bao gồm dầu massage tự nhiên và liệu pháp đá nóng.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT US -->
    <section id="aboutUs" class="py-10">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        <div class="text-white">
          <h2 class="text-3xl font-bold text-center mb-8">Về Chúng Tôi</h2>
          <p class="mb-4">HomeMassageDanang là đơn vị tiên phong trong lĩnh vực massage tại nhà ở Đà Nẵng. Với đội ngũ kỹ thuật viên được đào tạo chuyên sâu và kinh nghiệm thực tế, chúng tôi cam kết mang đến sự hài lòng tối đa cho khách hàng. Chúng tôi đặt mục tiêu giúp bạn thư giãn sau những ngày làm việc căng thẳng, tái tạo năng lượng và cải thiện sức khỏe toàn diện. HomeMassageDanang - Chăm sóc sức khỏe ngay tại ngôi nhà của bạn.</p>
          <p class="text-center">Liên hệ với chúng tôi để được tư vấn và đặt lịch hẹn.</p>
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
        <h2 class="text-3xl font-bold text-center mb-8">Khách Hàng Nói Gì Về Chúng Tôi</h2>
        <p class="mt-4 mb-16 text-center">Chúng tôi tự hào nhận được nhiều phản hồi tích cực từ khách hàng. Dưới đây là một số đánh giá tiêu biểu.</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="rounded-lg shadow p-6">
            <p class="text-gray-700 mb-4">"Dịch vụ tuyệt vời! Kỹ thuật viên rất chuyên nghiệp và thân thiện. Tôi cảm thấy thư giãn hoàn toàn sau buổi massage."</p>
            <div class="flex items-center">
              <img src="https://randomuser.me/api/portraits/lego/3.jpg" alt="Khách hàng A" class="w-12 h-12 rounded-full mr-3">
              <div>
                <p class="font-semibold">Nguyễn Văn A</p>
                <p class="text-gray-500">Đà Nẵng</p>
              </div>
            </div>
          </div>

          <div class=" rounded-lg shadow p-6">
            <p class="text-gray-700 mb-4">"Tôi đã sử dụng dịch vụ nhiều lần và luôn hài lòng. Chất lượng dịch vụ rất tốt, giá cả hợp lý."</p>
                        <div class="flex items-center">
              <img src="https://randomuser.me/api/portraits/lego/3.jpg" alt="Khách hàng A" class="w-12 h-12 rounded-full mr-3">
              <div>
                <p class="font-semibold">Nguyễn Văn A</p>
                <p class="text-gray-500">Đà Nẵng</p>
              </div>
            </div>
          </div>

          <div class="rounded-lg shadow p-6">
            <p class="text-gray-700 mb-4">"Rất hài lòng với dịch vụ của HomeMassageDanang. Tôi sẽ giới thiệu cho bạn bè và người thân."</p>
            <div class="flex items-center">
              <img src="https://randomuser.me/api/portraits/lego/3.jpg" alt="Khách hàng A" class="w-12 h-12 rounded-full mr-3">
              <div>
                <p class="font-semibold">Nguyễn Văn A</p>
                <p class="text-gray-500">Đà Nẵng</p>
              </div>
            </div>
          </div>

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
          <p class="mb-4">Liên hệ:</p>
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