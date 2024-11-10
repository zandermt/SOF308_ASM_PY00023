<template>
  <div class="container-fluid p-0">
    <!-- Hero Section -->
    <div
      class="position-relative vh-75 d-flex align-items-center justify-content-center"
      style="
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url('/api/placeholder/1920/1080');
        background-position: center;
        background-size: cover;
        height: 50vh;
      "
    >
      <div class="text-center text-white p-4">
        <p class="text-uppercase tracking-wider mb-3">Travel Blog</p>
        <h1 class="display-3 fw-bold mb-4">Lạng Sơn - Vẻ Đẹp Vùng Biên Ải</h1>
        <p class="text-white-50">
          <i class="far fa-clock me-2"></i>Đăng ngày 10/11/2024 •
          <i class="far fa-user me-2 ms-2"></i>Bởi Minh Anh •
          <i class="far fa-folder me-2 ms-2"></i>Du lịch miền Bắc
        </p>
      </div>
    </div>

    <div class="container my-5">
      <div class="text-center mb-5">
        <img
          src="/api/placeholder/100/100"
          class="rounded-circle mb-3"
          alt="Author"
          style="width: 100px; height: 100px; object-fit: cover"
        />
        <p class="lead text-muted">
          Chào các bạn! Mình vừa có chuyến khám phá Lạng Sơn 3 ngày 2 đêm và
          muốn chia sẻ với các bạn 5 địa điểm đẹp nhất mình đã đi qua. Hy vọng
          những trải nghiệm của mình sẽ giúp ích cho chuyến đi của các bạn!
        </p>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <div class="card bg-light mb-5 border-0 rounded-3">
            <div class="card-body">
              <h5 class="card-title fw-bold mb-3">Trong bài viết này:</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="#mau-son" class="text-decoration-none"
                    >1. Núi Mẫu Sơn - Nơi đón tuyết rơi đầu tiên</a
                  >
                </li>
                <li class="mb-2">
                  <a href="#nha-mac" class="text-decoration-none"
                    >2. Thành Nhà Mạc - Dấu ấn lịch sử</a
                  >
                </li>
                <li class="mb-2">
                  <a href="#dong-kinh" class="text-decoration-none"
                    >3. Chợ Đông Kinh - Thiên đường ẩm thực</a
                  >
                </li>
                <li class="mb-2">
                  <a href="#tam-thanh" class="text-decoration-none"
                    >4. Động Tam Thanh - Kỳ quan đá vôi</a
                  >
                </li>
                <li>
                  <a href="#tan-thanh" class="text-decoration-none"
                    >5. Cửa khẩu Tân Thanh - Nét đẹp vùng biên</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <article class="blog-content">
            <section id="mau-son" class="mb-5">
              <figure class="figure mb-4">
                <img
                  src="/api/placeholder/800/500"
                  class="figure-img img-fluid rounded-3"
                  alt="Núi Mẫu Sơn"
                />
                <figcaption class="figure-caption text-center">
                  Bình minh trên đỉnh Mẫu Sơn
                </figcaption>
              </figure>

              <h2 class="h3 fw-bold mb-4">
                1. Núi Mẫu Sơn - Nơi đón tuyết rơi đầu tiên
              </h2>

              <div class="mb-4">
                <div class="d-flex align-items-center text-muted small mb-3">
                  <span
                    ><i class="fas fa-map-marker-alt me-2"></i>45km từ trung tâm
                    TP</span
                  >
                  <span class="mx-3">•</span>
                  <span><i class="fas fa-clock me-2"></i>Nên dành 1 ngày</span>
                </div>
              </div>

              <p>
                Mẫu Sơn là điểm đến đầu tiên trong hành trình của mình tại Lạng
                Sơn. Với độ cao 1.541m so với mực nước biển, đây là một trong
                những đỉnh núi cao nhất của tỉnh và cũng là nơi đón tuyết rơi
                đầu tiên mỗi khi mùa đông về.
              </p>

              <div class="row g-3 mb-4">
                <div class="col-md-6">
                  <img
                    src="/api/placeholder/400/300"
                    class="img-fluid rounded-3"
                    alt="Mẫu Sơn 1"
                  />
                </div>
                <div class="col-md-6">
                  <img
                    src="/api/placeholder/400/300"
                    class="img-fluid rounded-3"
                    alt="Mẫu Sơn 2"
                  />
                </div>
              </div>

              <h3 class="h5 fw-bold mb-3">Trải nghiệm nổi bật</h3>
              <ul class="mb-4">
                <li class="mb-2">
                  Ngắm bình minh từ đỉnh núi - nên đến từ 4h30 sáng
                </li>
                <li class="mb-2">
                  Thưởng thức đặc sản rau núi và thịt lợn đen
                </li>
                <li class="mb-2">
                  Khám phá văn hóa người Dao với những trang phục rực rỡ
                </li>
                <li>
                  Check-in tại các điểm view đẹp (mình suggest khu vực gần nhà
                  nghỉ Mẫu Sơn)
                </li>
              </ul>

              <div class="bg-light p-4 rounded-3 mb-4">
                <h4 class="h6 fw-bold mb-3">✨ Tips từ mình</h4>
                <ul class="mb-0">
                  <li class="mb-2">
                    Nên chuẩn bị áo ấm vì nhiệt độ có thể xuống rất thấp
                  </li>
                  <li class="mb-2">Mang giày đi bộ tốt vì địa hình khá dốc</li>
                  <li>Nên đặt phòng trước nếu muốn ở lại qua đêm</li>
                </ul>
              </div>

              <blockquote
                class="border-start border-primary border-4 ps-4 mb-4"
              >
                <p class="mb-0">
                  Khoảnh khắc đáng nhớ nhất của mình là được ngắm mặt trời mọc
                  từ trên đỉnh Mẫu Sơn. Cảm giác đứng giữa biển mây, nhìn ánh
                  nắng đầu ngày len lỏi qua từng tầng mây thực sự rất tuyệt vời!
                </p>
              </blockquote>
            </section>
          </article>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4">
          <div class="position-sticky" style="top: 2rem">
            <!-- Author Bio -->
            <div class="card border-0 shadow-sm rounded-3 mb-4">
              <div class="card-body">
                <h5 class="fw-bold mb-3">Về tác giả</h5>
                <div class="d-flex align-items-center mb-3">
                  <img
                    src="/api/placeholder/60/60"
                    class="rounded-circle me-3"
                    alt="Author"
                  />
                  <div>
                    <h6 class="mb-1">Minh Anh</h6>
                    <p class="text-muted small mb-0">Travel Blogger</p>
                  </div>
                </div>
                <p class="small text-muted mb-0">
                  Yêu thích khám phá và chia sẻ những trải nghiệm du lịch thật,
                  gần gũi với mọi người.
                </p>
              </div>
            </div>

            <!-- Travel Info -->
            <div class="card border-0 shadow-sm rounded-3 mb-4">
              <div class="card-body">
                <h5 class="fw-bold mb-4">Thông tin hữu ích</h5>
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-light p-2 rounded me-3">
                    <i class="fas fa-calendar-alt text-primary"></i>
                  </div>
                  <div>
                    <small class="text-muted d-block">Thời điểm đẹp nhất</small>
                    <span>Tháng 9-3</span>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-light p-2 rounded me-3">
                    <i class="fas fa-clock text-primary"></i>
                  </div>
                  <div>
                    <small class="text-muted d-block">Thời gian lý tưởng</small>
                    <span>2-3 ngày</span>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="bg-light p-2 rounded me-3">
                    <i class="fas fa-bus text-primary"></i>
                  </div>
                  <div>
                    <small class="text-muted d-block">Cách di chuyển</small>
                    <span>Xe khách, xe máy</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Related Posts -->
            <div class="card border-0 shadow-sm rounded-3">
              <div class="card-body">
                <h5 class="fw-bold mb-4">Bài viết liên quan</h5>
                <div class="d-flex mb-3">
                  <img
                    src="/api/placeholder/100/100"
                    class="rounded me-3"
                    alt="Related"
                    style="width: 100px; height: 100px; object-fit: cover"
                  />
                  <div>
                    <h6 class="mb-1">
                      <a href="#" class="text-decoration-none"
                        >Khám phá Cao Bằng - 3 ngày 2 đêm</a
                      >
                    </h6>
                    <small class="text-muted">23/10/2024</small>
                  </div>
                </div>
                <div class="d-flex mb-3">
                  <img
                    src="/api/placeholder/100/100"
                    class="rounded me-3"
                    alt="Related"
                    style="width: 100px; height: 100px; object-fit: cover"
                  />
                  <div>
                    <h6 class="mb-1">
                      <a href="#" class="text-decoration-none"
                        >Review homestay đẹp ở Bắc Kạn</a
                      >
                    </h6>
                    <small class="text-muted">15/10/2024</small>
                  </div>
                </div>
                <div class="d-flex">
                  <img
                    src="/api/placeholder/100/100"
                    class="rounded me-3"
                    alt="Related"
                    style="width: 100px; height: 100px; object-fit: cover"
                  />
                  <div>
                    <h6 class="mb-1">
                      <a href="#" class="text-decoration-none"
                        >Kinh nghiệm du lịch vùng Đông Bắc</a
                      >
                    </h6>
                    <small class="text-muted">05/10/2024</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostDetail",
};
</script>

<style>
.vh-75 {
  height: 75vh;
}

.tracking-wider {
  letter-spacing: 0.1em;
}

.blog-content {
  font-size: 1.1rem;
  line-height: 1.8;
}

.blog-content p {
  margin-bottom: 1.5rem;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
