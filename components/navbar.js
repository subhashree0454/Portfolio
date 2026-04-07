class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .custom-nav {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(155, 89, 182, 0.2);
        }

        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }

        .logo span {
          background: linear-gradient(to right, #9b59b6, #00ffff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nav-list {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          color: #d1d5db;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
        }

        .nav-item:hover {
          color: #9b59b6;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #9b59b6, #00ffff);
          transition: width 0.3s;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-list {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: rgba(17, 17, 17, 0.95);
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            gap: 1.5rem;
            clip-path: circle(0% at 90% -10%);
            transition: clip-path 0.5s ease-out;
          }

          .nav-list.open {
            clip-path: circle(150% at 90% -10%);
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav class="custom-nav">
        <div class="logo">Subhashree <span>Sahu</span></div>

        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>

        <ul class="nav-list">
          <li><a href="#home" class="nav-item">Home</a></li>
          <li><a href="#about" class="nav-item">About</a></li>
          <li><a href="#skills" class="nav-item">Skills</a></li>
          <li><a href="#education" class="nav-item">Education</a></li>
          <li><a href="#projects" class="nav-item">Projects</a></li>
          <li><a href="#certifications" class="nav-item">Certifications</a></li>
          <li><a href="#contact" class="nav-item">Contact</a></li>
        </ul>
      </nav>
    `;

    // Initialize mobile menu
    const menuBtn = this.querySelector('.mobile-menu-btn');
    const menu = this.querySelector('.nav-list');

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('open');
      const icon = menuBtn.querySelector('i');
      if (menu.classList.contains('open')) {
        icon.setAttribute('data-feather', 'x');
      } else {
        icon.setAttribute('data-feather', 'menu');
      }
      if (typeof feather !== 'undefined') {
        feather.replace();
      }
    });

    // Close menu when clicking a link
    this.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        const icon = menuBtn.querySelector('i');
        icon.setAttribute('data-feather', 'menu');
        if (typeof feather !== 'undefined') {
          feather.replace();
        }
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
