// 企業 AI 導入區塊（2026-11 新增：概念與優點，對齊 links.code-tw.com 獲客頁）
const valueItems = [
  {
    title: 'AI 代理自動化平台',
    desc: '人在迴圈的閉環自動化：AI 執行重複工程、自動重試收斂，人員只做最終把關。實證可省下 3-4 成工程工時，而且越用越準。',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1edda0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v4" />
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M9 11v2" />
        <path d="M15 11v2" />
        <path d="M8 18v2" />
        <path d="M16 18v2" />
      </svg>
    ),
  },
  {
    title: '資料不出門的 AI',
    desc: '地端自建模型＋出站內容去敏＋分級路由：機密資料與原始碼不離開你的內網、不交給第三方，全程留稽核紀錄。想用 AI 又怕外洩的企業首選。',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1edda0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: '接上你現有的系統',
    desc: '不必砍掉重練：AI 直接串接你既有的版本控制、工單、測試流程與內部工具。導入成本低、風險小，分階段驗證有效再擴大。',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1edda0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
        <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
];

const AIService = () => {
  return (
    <div className="section" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="service-container" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 20px' }}>
          <h2 style={{ fontWeight: 'bold' }}>企業 AI 導入</h2>
          <p style={{ fontSize: '20px', color: '#495057', marginTop: '10px' }}>
            AI 跑重複工作，人只做把關 — 從單一流程自動化到企業級 AI 平台
          </p>
        </div>
        <div className="row g-4">
          {valueItems.map((item) => (
            <div className="col-12 col-md-4" key={item.title}>
              <div className="service-item">
                <div className="service-icon">{item.icon}</div>
                <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{item.title}</h2>
                <p style={{ fontSize: '18px' }}>{item.desc}</p>
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
          <p style={{ fontSize: '14px', color: '#a5a5a5', marginTop: '10px' }}>
            留下聯絡方式，一個工作天內回覆
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIService;
