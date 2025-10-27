class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
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

        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        a {
          color: #d1d5db;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s;
        }

        a:hover {
          color: #9b59b6;
        }

        a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #9b59b6, #00ffff);
          transition: width 0.3s;
        }

        a:hover::after {
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
          ul {
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

          ul.open {
            clip-path: circle(150% at 90% -10%);
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <div class="logo">Subhashree <span>Sahu</span></div>

        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    `;

    // Initialize mobile menu
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const menu = this.shadowRoot.querySelector('ul');

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('open');
      const icon = menuBtn.querySelector('i');
      if (menu.classList.contains('open')) {
        icon.setAttribute('data-feather', 'x');
      } else {
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });

    // Close menu when clicking a link
    this.shadowRoot.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        menuBtn.querySelector('i').setAttribute('data-feather', 'menu');
        feather.replace();
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
