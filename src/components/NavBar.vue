<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark py-3">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold fs-3" href="/">
          <span class="brand-text">Travel</span>Blog
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                <i class="fas fa-home me-1"></i>Trang Chủ
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-list-ul me-1"></i>Thể Loại
              </a>
              <ul
                class="dropdown-menu animate slideIn"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item" href="/Categories/NorthSide">
                    <i class="fas fa-arrow-up me-2"></i>Miền Bắc
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Categories/MidSide">
                    <i class="fas fa-arrows-alt-h me-2"></i>Miền Trung
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Categories/SouthSide">
                    <i class="fas fa-arrow-down me-2"></i>Miền Nam
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/ArticleManagement">
                <i class="fas fa-home me-1"></i>Quản Lý Bài VIết
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link auth-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#authModal"
              >
                <i class="fas fa-user me-1"></i>Đăng Nhập / Đăng Ký
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Modal Đăng nhập/Đăng ký -->
    <div
      class="modal fade"
      id="authModal"
      tabindex="-1"
      aria-labelledby="authModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="authModalLabel">Đăng Nhập / Đăng Ký</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- Tabs cho Đăng nhập và Đăng ký -->
            <ul class="nav nav-tabs" id="authTabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active fw-bold lb-dangnhap"
                  id="login-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#login"
                  type="button"
                  role="tab"
                  aria-controls="login"
                  aria-selected="true"
                >
                  Đăng Nhập
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link fw-bold lb-dangky"
                  id="register-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#register"
                  type="button"
                  role="tab"
                  aria-controls="register"
                  aria-selected="false"
                >
                  Đăng Ký
                </button>
              </li>
            </ul>

            <!-- Nội dung của các tab -->
            <div class="tab-content mt-3" id="authTabsContent">
              <!-- Tab Đăng nhập -->
              <div
                class="tab-pane fade show active"
                id="login"
                role="tabpanel"
                aria-labelledby="login-tab"
              >
                <form>
                  <div class="mb-3">
                    <label for="loginEmail" class="form-label">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="loginEmail"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="loginPassword" class="form-label"
                      >Mật Khẩu</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="loginPassword"
                      required
                    />
                  </div>
                  <button type="submit" class="btn btn-dangnhap w-100">
                    Đăng Nhập
                  </button>
                </form>
              </div>

              <!-- Tab Đăng ký -->
              <div
                class="tab-pane fade"
                id="register"
                role="tabpanel"
                aria-labelledby="register-tab"
              >
                <form>
                  <div class="mb-3">
                    <label for="registerEmail" class="form-label">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="registerEmail"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="registerPassword" class="form-label"
                      >Mật Khẩu</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="registerPassword"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="registerConfirmPassword" class="form-label"
                      >Xác Nhập Mật Khẩu</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="registerConfirmPassword"
                      required
                    />
                  </div>
                  <button type="submit" class="btn btn-dangky w-100">
                    Đăng Ký
                  </button>
                </form>
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
  name: "NavBar",
};
</script>

<style>
.lb-dangnhap,
.lb-dangky {
  color: #ff7e39;
}

.btn-dangnhap,
.btn-dangky {
  background-color: #ff7e39;
}

.btn-dangnhap:hover,
.btn-dangky:hover {
  background-color: #f35b09;
}

.modal-content {
  border-radius: 8px;
}

.modal-header {
  border-bottom: none;
}

.modal-body {
  padding: 1.5rem;
}

.navbar {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

/* Brand Styling */
.navbar-brand {
  position: relative;
  overflow: hidden;
}

.brand-text {
  color: #ff7e39;
  position: relative;
  display: inline-block;
}

.navbar-brand:hover .brand-text {
  animation: glow 1.5s ease-in-out infinite alternate;
}

/* Navigation Links */
.navbar-nav .nav-link {
  color: #ffffff;
  margin: 0 12px;
  padding: 8px 15px;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.navbar-nav .nav-link:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #ff7e39;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.navbar-nav .nav-link:hover:before {
  width: 80%;
}

.navbar-nav .nav-link:hover {
  color: #ff7e39;
  transform: translateY(-2px);
}

.navbar-nav .nav-link.active {
  color: #ff7e39;
  background-color: rgba(255, 126, 57, 0.1);
}

/* Dropdown Menu */
.dropdown-menu {
  background: rgba(33, 33, 33, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 126, 57, 0.1);
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-top: 10px;
}

.dropdown-item {
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.dropdown-item:hover {
  background-color: rgba(255, 126, 57, 0.2);
  color: #ff7e39;
  transform: translateX(5px);
}

/* Auth Link Special Styling */
.auth-link {
  border: 1px solid rgba(255, 126, 57, 0.3);
  border-radius: 20px;
  padding: 8px 20px !important;
}

.auth-link:hover {
  background-color: #ff7e39;
  color: white !important;
  border-color: #ff7e39;
}

/* Animations */
@keyframes glow {
  from {
    text-shadow: 0 0 5px #ff7e39, 0 0 10px #ff7e39;
  }
  to {
    text-shadow: 0 0 10px #ff7e39, 0 0 20px #ff7e39;
  }
}

.animate {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

@keyframes slideIn {
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
}

.slideIn {
  animation-name: slideIn;
}

/* Responsive Hamburger Menu */
.navbar-toggler {
  border: 2px solid #ff7e39;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.navbar-toggler:hover {
  background-color: rgba(255, 126, 57, 0.1);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='%23ff7e39' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Responsive Adjustments */
@media (max-width: 991.98px) {
  .navbar-nav {
    padding: 1rem 0;
  }

  .navbar-nav .nav-link {
    margin: 8px 0;
  }

  .auth-link {
    display: inline-block;
    margin-top: 10px;
  }
}
</style>
