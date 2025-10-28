import { useEffect } from 'react';
import logo from '../assets/images/k-logo.svg';
import textLogo from '../assets/images/landing-logo.svg';
function Navigation({ scrollToSection, homeRef, serviceRef, historyRef }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Find which section should be active based on scroll position
      const sections = document.querySelectorAll('section'); // or whatever your content sections are

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Offset for better UX
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Get the ID of the current section
          const id = section.getAttribute('id');

          // Update navigation or highlight corresponding element
          const correspondingNavItem = document.querySelector(`nav a[href="#${id}"]`);
          if (correspondingNavItem) {
            // Remove active class from all nav items
            document.querySelectorAll('nav a').forEach((item) => item.classList.remove('active'));
            // Add active class to current nav item
            correspondingNavItem.classList.add('active');
          }
        }
      });
    };

    // 添加滾動事件監聽器
    window.addEventListener('scroll', handleScroll);

    // 清理函數
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 100,
        // width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        width: 'calc(100% - 4rem)',
        maxWidth: '1280px',
        backgroundColor: '#fff', // Add background color as needed
        margin: '0 auto',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional shadow for better appearance
      }}
    >
      <div className="logo-container">
        <img
          className="mobile-logo"
          src={logo}
          alt="Company Logo"
          style={{ height: '40px', marginRight: '10px' }}
        />
        <img
          className="desktop-logo"
          src={textLogo}
          alt="Company Logo"
          style={{ height: '20px', marginRight: '10px' }}
        />
      </div>

      <div className="nav-buttons">
        <button
          onClick={() => scrollToSection(homeRef)}
          style={{
            color: '#1edda0',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          首頁
        </button>
        <button
          onClick={() => scrollToSection(serviceRef)}
          style={{
            color: '#1edda0',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          服務
        </button>
        <button
          onClick={() => scrollToSection(historyRef)}
          style={{
            color: '#1edda0',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          經歷
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
