/* ===== Base Styles & Variables ===== */
:root {
    --primary-color: #3a86ff;
    --primary-dark: #2667cc;
    --secondary-color: #8338ec;
    --accent-color: #ff006e;
    --dark-color: #1a1a2e;
    --light-color: #f8f9fa;
    --gray-color: #6c757d;
    --success-color: #28a745;
    --error-color: #dc3545;
    --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --font-mono: 'Courier New', Courier, monospace;
    --transition: all 0.3s ease;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-main);
    line-height: 1.6;
    color: #333;
    background-color: #fff;
    overflow-x: hidden;
  }
  
  /* ===== Typography ===== */
  h1, h2, h3, h4 {
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2.5rem;
    color: var(--dark-color);
  }
  
  h3 {
    font-size: 1.8rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
  }
  
  a:hover {
    color: var(--primary-dark);
  }
  
  /* ===== Utility Classes ===== */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  .section {
    padding: 5rem 0;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
  }
  
  .section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: var(--primary-color);
    margin: 1rem auto;
    border-radius: 2px;
  }
  
  .btn {
    display: inline-block;
    padding: 0.8rem 1.8rem;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-align: center;
    transition: var(--transition);
    border: none;
    cursor: pointer;
  }
  
  .primary-btn {
    background-color: var(--primary-color);
    color: white;
  }
  
  .primary-btn:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }
  
  .secondary-btn {
    background-color: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
  }
  
  .secondary-btn:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }
  
  /* ===== Loading Animation ===== */
  .loading-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background-color: var(--dark-color);
  }
  
  .white-bg, .dark-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  
  .white-bg {
    background-color: white;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    z-index: 1;
  }
  
  .dark-bg {
    background-color: var(--dark-color);
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
    z-index: 1;
  }
  
  .loading-text {
    display: flex;
    z-index: 2;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  .loading-text span {
    display: inline-block;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s forwards;
  }
  
  .loading-text span:nth-child(1) { animation-delay: 0.1s; }
  .loading-text span:nth-child(2) { animation-delay: 0.2s; }
  .loading-text span:nth-child(3) { animation-delay: 0.3s; }
  .loading-text span:nth-child(4) { animation-delay: 0.4s; }
  .loading-text span:nth-child(5) { animation-delay: 0.5s; }
  .loading-text span:nth-child(6) { animation-delay: 0.6s; }
  .loading-text span:nth-child(7) { animation-delay: 0.7s; }
  .loading-text span:nth-child(8) { animation-delay: 0.8s; }
  .loading-text span:nth-child(9) { animation-delay: 0.9s; }
  .loading-text span:nth-child(10) { animation-delay: 1.0s; }
  .loading-text span:nth-child(11) { animation-delay: 1.1s; }
  .loading-text span:nth-child(12) { animation-delay: 1.2s; }
  .loading-text span:nth-child(13) { animation-delay: 1.3s; }
  .loading-text span:nth-child(14) { animation-delay: 1.4s; }
  .loading-text span:nth-child(15) { animation-delay: 1.5s; }
  .loading-text span:nth-child(16) { animation-delay: 1.6s; }
  .loading-text span:nth-child(17) { animation-delay: 1.7s; }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* ===== Navigation ===== */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: var(--shadow);
    z-index: 1000;
    transition: var(--transition);
  }
  
  .navbar.scrolled {
    padding: 0.5rem 2rem;
    background-color: rgba(255, 255, 255, 0.98);
  }
  
  .brand {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 40px;
    height: 40px;
    background-color: var(--primary-color);
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  
  .brand-name {
    font-weight: 600;
    color: var(--dark-color);
  }
  
  .nav-links {
    display: flex;
  }
  
  .nav-link {
    margin-left: 2rem;
    color: var(--dark-color);
    font-weight: 500;
    position: relative;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
  }
  
  .nav-link:hover::after {
    width: 100%;
  }
  
  .mobile-menu-button {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--dark-color);
    cursor: pointer;
    z-index: 1001;
  }
  
  .mobile-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background-color: white;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: var(--transition);
    padding: 5rem 2rem;
  }
  
  .mobile-nav.active {
    right: 0;
  }
  
  .mobile-nav-links {
    display: flex;
    flex-direction: column;
  }
  
  .mobile-nav-link {
    padding: 1rem 0;
    color: var(--dark-color);
    font-weight: 500;
    border-bottom: 1px solid #eee;
  }
  
  .mobile-nav-link:hover {
    color: var(--primary-color);
  }
  
  .skip-link {
    position: absolute;
    top: -100px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 0.8rem;
    z-index: 1001;
    transition: var(--transition);
  }
  
  .skip-link:focus {
    top: 0;
  }
  
  /* ===== Hero Section ===== */
  .hero-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
    padding: 0 1.5rem;
  }
  
  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
  
  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.2;
  }
  
  .blob-1 {
    width: 500px;
    height: 500px;
    background-color: var(--primary-color);
    top: -200px;
    right: -200px;
  }
  
  .blob-2 {
    width: 400px;
    height: 400px;
    background-color: var(--secondary-color);
    bottom: -150px;
    left: -150px;
  }
  
  .hero-title {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: var(--dark-color);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s 0.5s forwards;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    max-width: 700px;
    margin-bottom: 2.5rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s 0.7s forwards;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1.5rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s 0.9s forwards;
  }
  
  .scroll-down {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    color: var(--dark-color);
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
  
  /* ===== About Section ===== */
  .about-section {
    background-color: #f8f9fa;
  }
  
  .about-content {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  
  .about-image {
    flex: 1;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  
  .about-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: var(--transition);
  }
  
  .about-image:hover img {
    transform: scale(1.03);
  }
  
  .about-text {
    flex: 1;
  }
  
  .about-cta {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  /* ===== Skills Section ===== */
  .skills-container {
    background-color: white;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .skill-card {
    background-color: white;
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: var(--shadow);
    transition: var(--transition);
    border: 1px solid #eee;
  }
  
  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .skill-icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  
  .skill-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--dark-color);
  }
  
  .skill-description {
    color: var(--gray-color);
    margin-bottom: 1.5rem;
  }
  
  .skill-progress {
    height: 6px;
    background-color: #eee;
    border-radius: 3px;
    overflow: hidden;
  }
  
  .progress-bar {
    height: 100%;
    background-color: var(--primary-color);
    border-radius: 3px;
  }
  
  .certifications {
    margin-top: 4rem;
  }
  
  .certifications-title {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--dark-color);
  }
  
  .certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .certification-card {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
  }
  
  .certification-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }
  
  .certification-card i {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-right: 1rem;
  }
  
  /* ===== Projects Section ===== */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }
  
  .project-card {
    background-color: white;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .project-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }
  
  .project-card:hover .project-image img {
    transform: scale(1.05);
  }
  
  .project-content {
    padding: 1.5rem;
  }
  
  .project-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--dark-color);
  }
  
  .project-description {
    color: var(--gray-color);
    margin-bottom: 1.5rem;
  }
  
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .project-tag {
    background-color: #f1f1f1;
    color: var(--dark-color);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  
  .project-links {
    display: flex;
    gap: 1rem;
  }
  
  .project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    color: var(--primary-color);
  }
  
  .project-link:hover {
    color: var(--primary-dark);
  }
  
  .github-cta {
    text-align: center;
    margin-top: 3rem;
  }
  
  .github-cta p {
    margin-bottom: 1rem;
    color: var(--gray-color);
  }
  
  /* ===== Contact Section ===== */
  .contact-container {
    display: flex;
    gap: 3rem;
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    padding: 3rem;
  }
  
  .contact-info {
    flex: 1;
  }
  
  .contact-item {
    margin-bottom: 2rem;
  }
  
  .contact-icon {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }
  
  .contact-label {
    font-weight: 500;
    color: var(--gray-color);
    margin-bottom: 0.3rem;
  }
  
  .contact-value {
    font-weight: 600;
    color: var(--dark-color);
  }
  
  .contact-form {
    flex: 1;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  .form-input, .form-textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    font-family: var(--font-main);
    transition: var(--transition);
  }
  
  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(58, 134, 255, 0.2);
  }
  
  .form-textarea {
    min-height: 150px;
    resize: vertical;
  }
  
  .form-submit {
    width: 100%;
    position: relative;
  }
  
  .loading-spinner {
    display: none;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  
  @keyframes spin {
    to { transform: translateY(-50%) rotate(360deg); }
  }
  
  .form-status {
    margin-top: 1rem;
    padding: 0.8rem;
    border-radius: var(--border-radius);
    text-align: center;
    display: none;
  }
  
  .form-status.success {
    display: block;
    background-color: rgba(40, 167, 69, 0.1);
    color: var(--success-color);
  }
  
  .form-status.error {
    display: block;
    background-color: rgba(220, 53, 69, 0.1);
    color: var(--error-color);
  }
  
  /* ===== Footer ===== */
  .footer {
    background-color: var(--dark-color);
    color: white;
    padding: 4rem 0 2rem;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .footer-about h3 {
    color: white;
    margin-bottom: 1.5rem;
  }
  
  .footer-about p {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .footer-links h4, .footer-social h4 {
    color: white;
    margin-bottom: 1.5rem;
  }
  
  .footer-links ul {
    list-style: none;
  }
  
  .footer-links li {
    margin-bottom: 0.8rem;
  }
  
  .footer-link {
    color: rgba(255, 255, 255, 0.7);
    transition: var(--transition);
  }
  
  .footer-link:hover {
    color: white;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
  }
  
  .social-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    transition: var(--transition);
  }
  
  .social-link:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }
  
  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
  }
  
  .footer-bottom p {
    margin-bottom: 0.5rem;
  }
  
  .footer-bottom i {
    margin: 0 0.3rem;
  }
  
  /* ===== Back to Top Button ===== */
  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    box-shadow: var(--shadow);
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    border: none;
  }
  
  .back-to-top.visible {
    opacity: 1;
    visibility: visible;
  }
  
  .back-to-top:hover {
    background-color: var(--primary-dark);
    transform: translateY(-3px);
  }
  
  /* ===== Media Queries ===== */
  @media (max-width: 992px) {
    .about-content {
      flex-direction: column;
    }
    
    .contact-container {
      flex-direction: column;
    }
  }
  
  @media (max-width: 768px) {
    .navbar {
      padding: 1rem;
    }
    
    .nav-links {
      display: none;
    }
    
    .mobile-menu-button {
      display: block;
    }
    
    .hero-title {
      font-size: 3rem;
    }
    
    .hero-subtitle {
      font-size: 1.2rem;
    }
    
    .cta-buttons {
      flex-direction: column;
      width: 100%;
    }
    
    .primary-btn, .secondary-btn {
      width: 100%;
    }
    
    .section {
      padding: 3rem 0;
    }
  }
  
  @media (max-width: 576px) {
    .hero-title {
      font-size: 2.5rem;
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
    }
    
    .footer-content {
      grid-template-columns: 1fr;
    }
  }