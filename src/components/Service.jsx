import codingIcon from '../assets/images/icon-coding.svg';
import uiIcon from '../assets/images/icon-ui.svg';
import designIcon from '../assets/images/icon-design.svg';
// import serviceText from '../assets/images/feature-service-text.svg';
const Service = () => {
  return (
    <div className="section" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="service-container">
        {/* <img width={300} src={serviceText} alt="服務" style={{ rotate: '-10deg' }} /> */}
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="service-item">
              <div className="service-icon">
                <img
                  style={{ width: '30vw', maxWidth: '200px' }}
                  src={codingIcon}
                  alt="網頁/軟體開發"
                />
              </div>
              <h2 style={{ fontWeight: 'bold' }}>資料爬蟲與清理</h2>
              <p style={{ fontSize: '20px' }}>
                提供資料爬蟲與清理服務，無論是社群網站、電商平台、新聞網站等，我們都能夠幫助您抓取資料並進行清理。
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="service-item">
              <div className="service-icon">
                <img
                  style={{ width: '30vw', maxWidth: '200px' }}
                  src={designIcon}
                  alt="平面/Logo設計"
                />
              </div>
              <h2 style={{ fontWeight: 'bold' }}>客製化系統/網站APP開發</h2>
              <p style={{ fontSize: '20px' }}>
                提供客製化系統/網站開發服務，我們能夠一手包辦從需求分析、設計、開發到上線的完整流程，並涵蓋網站系統端以及移動端跨平台開發。
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="service-item">
              <div className="service-icon">
                <img style={{ width: '30vw', maxWidth: '200px' }} src={uiIcon} alt="UI設計" />
              </div>
              <h2 style={{ fontWeight: 'bold' }}>UI/UX 介面設計</h2>
              <p style={{ fontSize: '20px' }}>
                提供UI設計服務，採用客製化的設計流程，結合最新的APP與網站視覺化趨勢，提供用戶體驗設計，使您的產品在競爭激烈下脫穎而出的關鍵優勢。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
