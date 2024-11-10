<template>
  <div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/hoanghon.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/nhatrang.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/ruonglua.png" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container my-5">
      <div class="welcome-section text-center mb-5">
        <h1 class="main-title">Chào mừng đến Travel Blog</h1>
        <p class="subtitle">
          Khám phá những điểm đến tuyệt vời và những trải nghiệm khó quên
        </p>
        <div class="title-decoration"></div>
      </div>

      <div class="row g-4">
        <div class="col-md-4">
          <div class="travel-card">
            <div class="card-image-wrapper">
              <img
                src="@/assets/5diadiemdulichlangson.jpg"
                alt="5diadiemdulichlangson"
              />
              <div class="card-overlay">
                <span class="category-tag">HOT</span>
              </div>
            </div>
            <div class="card-content">
              <h5 class="card-title">
                5 ĐỊA ĐIỂM DU LỊCH HẤP DẪN TẠI LẠNG SƠN
              </h5>
              <p class="card-text">
                Với nhiều danh lam thắng cảnh cùng những phong tục, nét văn hóa
                mang đậm bản sắc dân tộc, các điểm đến du lịch mà Báo Lạng
                Sơn...
              </p>
              <a href="/PostDetail" class="custom-btn">
                <span>Đọc thêm</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="travel-card">
            <div class="card-image-wrapper">
              <img
                src="@/assets/topdiadiemdulichvietnam.jpg"
                alt="topdiadiemdulichvietnam"
              />
              <div class="card-overlay">
                <span class="category-tag">HOT</span>
              </div>
            </div>
            <div class="card-content">
              <h5 class="card-title">TOP NHỮNG ĐỊA ĐIỂM DU LỊCH Ở VIỆT NAM</h5>
              <p class="card-text">
                Hè này bạn đang có dự định đi đâu chưa? Du lịch Việt Nam đang
                trên đà phát triển và những địa điểm đẹp hoàn hảo không kém...
              </p>
              <a href="#" class="custom-btn">
                <span>Đọc thêm</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="travel-card">
            <div class="card-image-wrapper">
              <img src="@/assets/naubanhchung.jpg" alt="naubanhchung" />
              <div class="card-overlay">
                <span class="category-tag">HOT</span>
              </div>
            </div>
            <div class="card-content">
              <h5 class="card-title">
                PHONG TỤC TẾT NGUYÊN ĐÁN Ở 3 MIỀN BẮC - TRUNG - NAM
              </h5>
              <p class="card-text">
                Ngày Tết đến, mỗi vùng quê lại có những phong tục, truyền thống
                khác nhau, nhưng tất cả đều mong đón một năm mới đầy sức khỏe...
              </p>
              <a href="#" class="custom-btn">
                <span>Đọc thêm</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBody",
};
</script>

<style>
.welcome-section {
  position: relative;
  padding: 2rem 0;
}

.main-title {
  font-size: 2.8rem;
  color: #2d2d2d;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #2d2d2d, #ff7e39);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleFade 1s ease-in;
}

.subtitle {
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
  animation-delay: 0.5s;
}

.title-decoration {
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #ff7e39, #ff9966);
  margin: 0 auto;
  border-radius: 2px;
  position: relative;
}

.title-decoration::before,
.title-decoration::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 4px;
  background: linear-gradient(to right, #ff7e39, #ff9966);
  border-radius: 2px;
}

.title-decoration::before {
  left: -50px;
}

.title-decoration::after {
  right: -50px;
}

/* Card Styles */
.travel-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
}

.travel-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-image-wrapper {
  position: relative;
  overflow: hidden;
}

.card-image-wrapper img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.travel-card:hover .card-image-wrapper img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 15px;
  left: 15px;
}

.category-tag {
  background: rgba(255, 126, 57, 0.9);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  backdrop-filter: blur(5px);
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  color: #2d2d2d;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.card-text {
  color: #666;
  margin-bottom: 1.2rem;
  line-height: 1.6;
}

.custom-btn {
  /* display: flex; */
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(45deg, #ff7e39, #ff9966);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.custom-btn:hover {
  background: linear-gradient(45deg, #ff9966, #ff7e39);
  color: white;
  transform: translateX(5px);
}

.custom-btn i {
  transition: transform 0.3s ease;
}

.custom-btn:hover i {
  transform: translateX(5px);
}

/* Animations */
@keyframes titleFade {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .main-title {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .row {
    gap: 2rem;
  }
}
</style>
