class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .custom-footer {
          background: #0f172a;
          color: #d1d5db;
          padding: 3rem 1.5rem;
          text-align: center;
          border-top: 1px solid rgba(155, 89, 182, 0.2);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(155, 89, 182, 0.1);
          border-radius: 50%;
          color: #d1d5db;
          transition: all 0.3s;
        }

        .social-link:hover {
          background: #9b59b6;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(155, 89, 182, 0.3);
        }

        .copyright {
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: #9ca3af;
        }

        .heart {
          color: #ef4444;
          display: inline-block;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
          100% {
            transform: scale(1);
          }
        }
      </style>
      <footer class="custom-footer">
        <div class="footer-content">
          <div class="social-links">
            <a href="https://www.linkedin.com/in/subhashree-sahu-705026287/" target="_blank" class="social-link" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            <a href="https://github.com/subhashree0454" target="_blank" class="social-link" aria-label="GitHub"><i data-feather="github"></i></a>
            <a href="#" class="social-link" aria-label="Twitter"><i data-feather="twitter"></i></a>
            <a href="mailto:sahusubhashree0454@gmail.com" class="social-link" aria-label="Email"><i data-feather="mail"></i></a>
          </div>
          <p class="copyright">© 2025 Subhashree Sahu | Designed with <span class="heart">❤️</span> by Subhashree</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
