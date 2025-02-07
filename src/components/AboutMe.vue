<script setup>

</script>

<template>
  <div class="container bg-white  lg:px-6 py-2.5 dark:bg-gray-900">
    <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article
          class="mx-auto w-full max-w-1xl px-16 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
            <address class="flex items-center mb-6 not-italic">
              <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img class="mr-4 w-25 h-25 rounded-full" src="https://vueproject.s3.us-west-2.amazonaws.com/me.jpg" alt="August Wang">
                <div>
                <p class="text-xl font-bold text-gray-900 dark:text-white mr-1">August Wang</p>
                  <p class="text-l font-bold text-gray-900 dark:text-white">(CHUNG YU WANG)</p>
                  <p class="text-base text-gray-500 dark:text-gray-400">Backend End Enginner | Fronted End Enginner |
                    Devops Enginner | Data Scientist</p>
                  <p class="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                      title="February 8th, 2022">Feb. 13, 2024</time></p>
                </div>
              </div>
            </address>
            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">A
              little about myself</h1>
          </header>

          <!-- <p class="lead text-gray-900 dark:text-white mb-2"> 
            我出生在台北市，是一個對知識充滿熱情的年輕學子。自從我開始認識書本以來，我就對知識的無限可能性感到著迷。我相信教育是改變命運的關鍵，因此我一直以來都非常努力地讀書，追求學業上的卓越成績。
          </p>

          <p class="lead text-gray-900 dark:text-white mb-2">
            除了在台灣學習之外，我也有幸到澳洲和日本遊學。在這些國家的生活經歷中，我不僅學到了語言和文化，還拓寬了我的視野，讓我更加開放和包容。這段寶貴的經歷讓我受益良多，成為了我成長路上的一個重要部分。
          </p>

          <p class="lead text-gray-900 dark:text-white mb-2">

            我的興趣廣泛多元。我熱愛極限武術和健身，這不僅是一種運動，更是一種挑戰自我的方式，讓我保持健康的身體和積極的心態。同時，我也喜歡欣賞電影和聽流行音樂，這是我放鬆身心的方式之一，讓我感受到生活的美好。

          </p>

          <p class="lead text-gray-900 dark:text-white">
            除了這些興趣之外，我也是一個喜歡結交朋友的人。我喜歡和朋友一起分享生活中的喜怒哀樂，共同創造美好的回憶。而我最珍貴的伴侶之一，則是我養的一隻貓女兒。她是我生活中的陪伴者，帶給我無限的歡樂和溫暖。
          </p>

          <p class="lead text-gray-900 dark:text-white">
            回顧過去，我感到非常幸運能夠擁有這麼豐富多彩的人生。我將繼續保持著對知識的追求和對生活的熱愛，不斷挑戰自我，追求更加美好的未來。
          </p> -->
          
          <!-- 關於我 -->
          <!-- <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">👋 關於我</h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              我來自台北，對知識充滿熱情，相信技術與學習能改變世界，因此我一直不斷提升自己的能力。
              我曾赴 <span class="font-bold text-blue-500">澳洲與日本遊學</span>，培養了適應不同文化的能力，也拓展了全球視野。
            </p>
          </section> -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">👋 關於我</h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              我來自台北，從小對知識充滿熱情，始終相信 **學習與技術能改變世界**。我曾赴 
              <span class="font-bold text-blue-500">澳洲與日本遊學</span>，體驗不同文化與教育模式，拓展了全球視野，也培養了適應多變環境的能力。
            </p>
          </section>

          <!-- 成長與學習歷程 -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">📍 成長與學習歷程</h2>
            <p class="text-gray-700 dark:text-gray-300">
              我始終相信 **「學習是改變人生最強大的工具」**，因此從求學階段到工作，我都保持著 **持續學習與成長的習慣**。
              除了台灣的學習經歷，我也曾在 <span class="font-bold text-blue-500">澳洲與日本</span> 進修，
              深入體驗不同的文化與教育方式，這些經驗不僅提升了我的語言能力，也讓我更能用 **開放的視角** 看待世界。
            </p>
          </section>

          <!-- 技術與專業發展 -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">💻 技術與專業發展</h2>
            <p class="text-gray-700 dark:text-gray-300">
              擁有 <span class="font-bold text-blue-500">超過五年的開發經驗</span>，專注於 
              **高效能系統開發、微服務架構設計與雲端技術**，具備從 **後端、前端、DevOps 到數據分析** 的完整開發能力。
            </p>
            <p class="text-gray-700 dark:text-gray-300">
              我熱衷於解決技術挑戰，曾成功將 **部署時間從 1.5 小時縮短至 5 分鐘**，大幅提升開發效率。
              在高流量系統的維運中，我透過 **Queue 技術（RabbitMQ、SQS）** 優化非同步處理，確保系統能穩定運行。
            </p>
          </section>

          <!-- 興趣與生活態度 -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">🏋️ 興趣與生活態度</h2>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>
                <span class="font-bold text-blue-500">🔥 運動與極限武術：</span>  
                健身與武術是我挑戰自我、突破極限的方式，這讓我在工作中更具 **抗壓性與執行力**。
              </li>
              <li>
                <span class="font-bold text-blue-500">🎬 電影與音樂：</span>  
                我喜歡從電影與音樂中尋找靈感，這些故事與旋律啟發我以不同角度思考世界。
              </li>
              <li>
                <span class="font-bold text-blue-500">🐱 與貓咪共度時光：</span>  
                養貓讓我學會耐心與細膩的觀察力，也是我放鬆與療癒的來源。
              </li>
              <li>
                <span class="font-bold text-blue-500">✈️ 旅行與探索：</span>  
                我熱愛探索不同城市與文化，這不僅拓展視野，也讓我對生活充滿熱情。
              </li>
            </ul>
          </section>

          <!-- 理念與未來展望 -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">💡 理念與未來展望</h2>
            <p class="text-gray-700 dark:text-gray-300">
              我始終相信，**成長來自於挑戰，而學習則是讓自己變得更強大的關鍵**。
              無論是技術開發、團隊合作，還是生活中的各種挑戰，我都保持 **持續學習、突破自我的精神**。
            </p>
            <p class="text-gray-700 dark:text-gray-300">
              期待未來能運用我的專業，打造更高效、更有價值的解決方案，並與更多志同道合的人交流合作！
            </p>
          </section>

          <!-- 專業技能 -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">💻 專業技能</h2>
            
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mt-4">✅ 後端技術</h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>.NET Framework 4.7 ~ .NET 8（C#，Web API，企業級後端服務）</li>
              <li>Node.js（Express.js, NestJS，用於 API 設計與微服務架構）</li>
              <li>Queue 技術（RabbitMQ、SQS），提升非同步處理能力</li>
              <li>雲端技術（AWS、GCP、Azure, Kubernetes 容器化部署）</li>
            </ul>

            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mt-4">✅ 前端技術</h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Vue 3（Composition API，SPA 開發）</li>
              <li>Tailwind CSS，Flowbite，打造高效 UI/UX</li>
              <li>ApexCharts、ECharts，開發即時數據視覺化工具</li>
            </ul>

            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mt-4">✅ DevOps & 系統最佳化</h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>CI/CD 自動化部署（GitLab CI/CD, Jenkins）</li>
              <li>系統效能提升（曾優化系統達 <span class="font-bold text-blue-500">40%+</span>）</li>
              <li>Logging 與監控（Prometheus + Grafana）</li>
            </ul>
          </section>

          <!-- 重要專案 -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">🚀 重要專案</h2>

            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mt-4">📌 雙11大流量推播系統</h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>獨立開發並維運，成功支援 <span class="font-bold text-blue-500">千萬級別推播</span></li>
              <li>使用 RabbitMQ & Kubernetes 進行彈性擴展</li>
            </ul>

            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mt-4">📌 品牌網站 + LINE Chatbot</h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>使用 Vue 3 + Tailwind CSS 開發響應式網站</li>
              <li>整合 Google Dialogflow API，開發智能客服機器人</li>
            </ul>

            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mt-4">📌 Google Sheets API 數據分析可視化</h3>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>使用 Vue 3 串接 Google Sheets API，即時讀取與整理數據</li>
              <li>前端撰寫統計演算法，並透過 ApexCharts 動態繪製即時圖表</li>
            </ul>
          </section>

          <!-- 興趣 -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">🏋️ 我的興趣</h2>
            <p class="text-gray-700 dark:text-gray-300">
              🎯 <span class="font-bold text-blue-500">極限武術與健身</span> – 鍛鍊自我，保持積極心態 <br>
              🎬 <span class="font-bold text-blue-500">電影與音樂</span> – 從不同文化中吸收靈感 <br>
              🐱 <span class="font-bold text-blue-500">養貓生活</span> – 我的貓帶來無限快樂與療癒
            </p>
          </section>


          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://vueproject.s3.us-west-2.amazonaws.com/IMG_1004.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://vueproject.s3.us-west-2.amazonaws.com/IMG_3527.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://vueproject.s3.us-west-2.amazonaws.com/IMG_5545.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://vueproject.s3.us-west-2.amazonaws.com/IMG_5547.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://vueproject.s3.us-west-2.amazonaws.com/IMG_20220914_145243.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://vueproject.s3.us-west-2.amazonaws.com/Xnip2023-01-10_09-14-40.png" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://vueproject.s3.us-west-2.amazonaws.com/Xnip2024-02-13_19-18-57.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://vueproject.s3.us-west-2.amazonaws.com/IMG_0916.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://vueproject.s3.us-west-2.amazonaws.com/IMG_3344.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://vueproject.s3.us-west-2.amazonaws.com/Xnip2024-02-13_19-38-33.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://vueproject.s3.us-west-2.amazonaws.com/Xnip2024-02-13_19-38-43.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://vueproject.s3.us-west-2.amazonaws.com/Xnip2024-02-13_19-41-19.png" alt="">
                </div>
            </div>
          </div>


        </article>
      </div>
    </main>
  </div>
</template>
<style scoped>
.container {
  height: 100%;
}</style>
