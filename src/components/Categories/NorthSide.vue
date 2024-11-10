<template>
  <div>
    <div class="south-vietnam-section">
      <div class="hero-section2">
        <div class="hero-content">
          <h1 class="hero-title">Khám Phá Miền Bắc Việt Nam</h1>
          <p class="hero-subtitle">
            Vùng đất của những ngọn núi hùng vĩ, đồng bằng xanh mát, và văn hóa
            phong phú
          </p>
          <div class="hero-decoration"></div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row g-4">
          <div class="col-lg-8">
            <div class="row g-4">
              <div class="col-md-6">
                <div class="destination-card">
                  <div class="card-image-wrapper">
                    <img src="@/assets/HaGiang.png" alt="Hà Giang" />
                    <div class="card-badges">
                      <span class="location-badge">
                        <i class="fas fa-map-marker-alt"></i> Miền Bắc
                      </span>
                      <span class="category-badge">
                        <i class="fas fa-water"></i> Cao Nguyên
                      </span>
                    </div>
                  </div>
                  <div class="card-content">
                    <h3 class="card-title">Hà Giang</h3>
                    <p class="card-text">
                      Khám phá vẻ đẹp của cao nguyên đá, cùng những cánh đồng
                      hoa tam giác mạch rực rỡ.
                    </p>
                    <div class="card-highlights">
                      <span><i class="fas fa-check"></i> Cột Cờ Lũng Cú</span>
                      <span><i class="fas fa-check"></i> Đèo Mã Pí Lèng</span>
                      <span><i class="fas fa-check"></i> Phố Cổ Đồng Văn</span>
                    </div>
                    <a href="#" class="explore-btn">
                      <span>Khám phá ngay</span>
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="destination-card">
                  <div class="card-image-wrapper">
                    <img src="@/assets/SaPa.png" alt="Sa Pa" />
                    <div class="card-badges">
                      <span class="location-badge">
                        <i class="fas fa-map-marker-alt"></i> Miền Bắc
                      </span>
                      <span class="category-badge">
                        <i class="fas fa-city"></i> Văn Hoá
                      </span>
                    </div>
                  </div>
                  <div class="card-content">
                    <h3 class="card-title">Sa Pa</h3>
                    <p class="card-text">
                      Vùng đất mờ sương nổi tiếng với ruộng bậc thang và văn hóa
                      dân tộc phong phú.
                    </p>
                    <div class="card-highlights">
                      <span><i class="fas fa-check"></i> Bản Tả Phìn</span>
                      <span><i class="fas fa-check"></i> Bản Ý Linh Hồ</span>
                      <span><i class="fas fa-check"></i> Hà Khẩu Sapa</span>
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

          <div class="col-lg-4">
            <div class="info-card tips-card mb-4">
              <div class="card-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <div class="card-content">
                <h4>Mẹo du lịch miền Bắc</h4>
                <ul class="tips-list">
                  <li>
                    <i class="fas fa-sun"></i>
                    <span>Lên lịch trước, tránh mùa cao điểm</span>
                  </li>
                  <li>
                    <i class="fas fa-umbrella"></i>
                    <span>Mang đồ nhẹ, dễ di chuyển</span>
                  </li>
                  <li>
                    <i class="fas fa-utensils"></i>
                    <span>Tìm hiểu trước văn hóa địa phương</span>
                  </li>
                  <li>
                    <i class="fas fa-bus"></i>
                    <span>Sử dụng ứng dụng bản đồ offline</span>
                  </li>
                </ul>
              </div>
            </div>

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
  name: "NorthSide",
};
</script>

<style>
.hero-section2 {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/ruonglua.png");
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
