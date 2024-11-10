<template>
  <div>
    <div class="south-vietnam-section">
      <!-- Hero Section -->
      <div class="hero-section1">
        <div class="hero-content">
          <h1 class="hero-title">Khám Phá Miền Trung Việt Nam</h1>
          <p class="hero-subtitle">
            Vùng đất của biển xanh, cát trắng và những di sản văn hóa lâu đời
          </p>
          <div class="hero-decoration"></div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row g-4">
          <!-- Main Content Area -->
          <div class="col-lg-8">
            <div class="row g-4">
              <!-- Can Tho Card -->
              <div class="col-md-6">
                <div class="destination-card">
                  <div class="card-image-wrapper">
                    <img src="@/assets/DaNang.png" alt="Đà Nẵng" />
                    <div class="card-badges">
                      <span class="location-badge">
                        <i class="fas fa-map-marker-alt"></i> Miền Trung
                      </span>
                      <span class="category-badge">
                        <i class="fas fa-water"></i> Đô Thị
                      </span>
                    </div>
                  </div>
                  <div class="card-content">
                    <h3 class="card-title">Đà Nẵng</h3>
                    <p class="card-text">
                      Thành phố trẻ năng động với những bãi biển đẹp và cầu Rồng
                      nổi tiếng.
                    </p>
                    <div class="card-highlights">
                      <span><i class="fas fa-check"></i> Cầu rồng</span>
                      <span><i class="fas fa-check"></i> Bãi biển Mỹ Khuê</span>
                      <span><i class="fas fa-check"></i> Helio Center</span>
                    </div>
                    <a href="#" class="explore-btn">
                      <span>Khám phá ngay</span>
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Ho Chi Minh City Card -->
              <div class="col-md-6">
                <div class="destination-card">
                  <div class="card-image-wrapper">
                    <img src="@/assets/BinhDinh.png" alt="Bình Định" />
                    <div class="card-badges">
                      <span class="location-badge">
                        <i class="fas fa-map-marker-alt"></i> Miền Trung
                      </span>
                      <span class="category-badge">
                        <i class="fas fa-city"></i> Văn Hoá
                      </span>
                    </div>
                  </div>
                  <div class="card-content">
                    <h3 class="card-title">Bình Định</h3>
                    <p class="card-text">
                      Bình Định yên bình với bãi biển xanh, di tích lịch sử
                      huyền bí, ẩm thực đặc sắc và văn hóa đậm đà.
                    </p>
                    <div class="card-highlights">
                      <span><i class="fas fa-check"></i> Tháp Đôi</span>
                      <span><i class="fas fa-check"></i> Biển Quy Nhơn</span>
                      <span><i class="fas fa-check"></i> Kỳ Co</span>
                    </div>
                    <a href="#" class="explore-btn">
                      <span>Khám phá ngay</span>
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <!-- Travel Tips Card -->
            <div class="info-card tips-card mb-4">
              <div class="card-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <div class="card-content">
                <h4>Mẹo du lịch miền Trung</h4>
                <ul class="tips-list">
                  <li>
                    <i class="fas fa-sun"></i>
                    <span>Khám phá di tích lịch sử nổi tiếng</span>
                  </li>
                  <li>
                    <i class="fas fa-umbrella"></i>
                    <span>Thưởng thức đặc sản biển tươi ngon</span>
                  </li>
                  <li>
                    <i class="fas fa-utensils"></i>
                    <span>Tránh đi vào mùa mưa bão</span>
                  </li>
                  <li>
                    <i class="fas fa-bus"></i>
                    <span>Thuê xe máy để khám phá tự do</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Advertisement Card -->
            <div class="info-card ad-card">
              <div class="card-content text-center">
                <i class="fas fa-ad mb-3"></i>
                <h4>Quảng cáo</h4>
                <p>
                  Đặt quảng cáo của bạn tại đây để tiếp cận hàng ngàn khách du
                  lịch!
                </p>
                <a href="#" class="contact-btn">
                  <i class="fas fa-envelope"></i>
                  <span>Liên hệ ngay</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "MidSide",
};
</script>

<style>
.hero-section1 {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/nhatrang.png");
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 3rem;
}
</style>
