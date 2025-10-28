import { useRef, useEffect } from 'react';
import Home from './components/Home';
import History from './components/History';
import Service from './components/Service';
import Navigation from './components/Navigation';
import './App.css';

// 添加 Footer 組件
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center',
      }}
    >
      <div>
        {/* <h3>聯絡資訊</h3> */}
        <p>電話：0989187330</p>
        <p>電子郵件：ms300kstudio@gmail.com</p>
        {/* <p>地址：台北市某區某路123號</p> */}
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>© {new Date().getFullYear()} 柏康工作室 Ms.300K. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const historyRef = useRef(null);
  useEffect(() => {
    const sections = [
      { ref: homeRef, id: 'home' },
      { ref: serviceRef, id: 'service' },
      { ref: historyRef, id: 'history' },
    ];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((section) => {
      if (section.ref.current) {
        section.ref.current.id = section.id;
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navigation
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        serviceRef={serviceRef}
        historyRef={historyRef}
      />

      <div ref={homeRef} style={{ minHeight: '100vh' }}>
        <Home />
      </div>

      <div ref={serviceRef} style={{ minHeight: '100vh' }}>
        <Service />
      </div>

      <div ref={historyRef} style={{ minHeight: '100vh' }}>
        <History />
      </div>

      <Footer />
    </>
  );
}

export default App;
