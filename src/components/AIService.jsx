// 企業 AI 導入區塊（2026-11 新增）— 視覺語言對齊 Service 區：
// 同款 140x140 品牌插畫 icon（墨綠描邊+品牌色填充）、同字級（h2 bold / p 20px）、同網格
import robotIcon from '../assets/images/icon-ai-robot.svg';
import shieldIcon from '../assets/images/icon-ai-shield.svg';
import plugIcon from '../assets/images/icon-ai-plug.svg';

const valueItems = [
  {
    title: 'AI 代理自動化平台',
    desc: '人在迴圈的閉環自動化：AI 執行重複工程、自動重試收斂，人員只做最終把關。實證可省下 3-4 成工程工時，而且越用越準。',
    icon: robotIcon,
    alt: 'AI 代理自動化平台',
  },
  {
    title: '資料不出門的 AI',
    desc: '地端自建模型＋出站內容去敏：機密資料與原始碼不離開你的內網、不交給第三方，全程留稽核紀錄。想用 AI 又怕外洩的企業首選。',
    icon: shieldIcon,
    alt: '資料不出門的 AI',
  },
  {
    title: '接上你現有的系統',
    desc: '不必砍掉重練：AI 直接串接你既有的版本控制、工單、測試流程與內部工具。導入成本低、風險小，分階段驗證有效再擴大。',
    icon: plugIcon,
    alt: '接上你現有的系統',
  },
];

const AIService = () => {
  return (
    <div className="section" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="service-container" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 20px' }}>
          <h2 style={{ fontWeight: 'bold' }}>企業 AI 導入</h2>
          <p style={{ fontSize: '20px' }}>
            AI 跑重複工作，人只做把關 — 從單一流程自動化到企業級 AI 平台
          </p>
        </div>
        <div className="row g-4">
          {valueItems.map((item) => (
            <div className="col-12 col-md-4" key={item.title}>
              <div className="service-item">
                <div className="service-icon">
                  <img
                    style={{ width: '30vw', maxWidth: '200px' }}
                    src={item.icon}
                    alt={item.alt}
                  />
                </div>
                <h2 style={{ fontWeight: 'bold' }}>{item.title}</h2>
                <p style={{ fontSize: '20px' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href="https://links.code-tw.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#1edda0',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '18px',
              padding: '12px 36px',
              borderRadius: '999px',
              textDecoration: 'none',
            }}
          >
            聊聊你的需求
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIService;
