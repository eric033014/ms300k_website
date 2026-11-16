// 常見問題區（2026-11 新增）— 第一題是 Eric 定調最重要的「自建 vs 找我們」
const faqs = [
  {
    q: '自己用 AI 工具（ChatGPT、n8n、Make）兜一套，跟找你們做有什麼差別？',
    a: '自建的是「會動的 demo」，我們交付的是「能長期營運的系統」— 差別不在 AI，在工程：①穩定性：失敗重試、自動告警、斷線自癒，系統壞了會自己叫人，而不是過兩週才發現早就停了。②判斷力設計：規劃哪些該讓 AI 做、哪些必須人工把關（例如可疑訊息不回、重要客人轉真人）。③整合深度：直接串接你既有的 ERP、POS 與內部系統，不受工具平台限制。④資安：需要時用地端模型＋資料去敏，機密不出內網。如果你的需求簡單到現成工具就能搞定，我們會直接告訴你不用花這筆錢 — 我們接的是要穩定、要整合、要有人負責的那一層。',
  },
  {
    q: '導入 AI 之後，公司的資料和程式碼會不會外流？',
    a: '不會。對機密要求高的案子，我們採用地端自建模型：敏感內容與原始碼留在您的內網處理、不外送第三方；需要外部算力的部分，會先經過去敏處理（金鑰遮罩、識別資訊清除、內容最小化）才送出，並全程留稽核紀錄。',
  },
  {
    q: '導入 AI 需要換掉現有系統嗎？',
    a: '不需要。我們的做法是串接您既有的工具與流程（版本控制、工單系統、測試流程、POS 等），把 AI 接進去而不是砍掉重練，導入成本與風險都低得多。',
  },
  {
    q: '怎麼收費？',
    a: '依需求範圍報價，沒有制式價目表。小型自動化依件計價；企業平台類採分階段里程碑計價，每階段有明確交付與驗收標準、可獨立驗收，不用一次押大預算。訪談釐清需求後提供估價。',
  },
];

const Faq = () => {
  return (
    <div className="section" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="service-container" style={{ width: '100%', maxWidth: '860px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontWeight: 'bold' }}>常見問題</h2>
        </div>
        {faqs.map((f) => (
          <details
            key={f.q}
            style={{
              background: '#fff',
              border: '1px solid #e3e6e4',
              borderRadius: '14px',
              padding: '18px 22px',
              marginBottom: '14px',
              textAlign: 'left',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              cursor: 'pointer',
            }}
          >
            <summary style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#2D4234' }}>{f.q}</summary>
            <p style={{ fontSize: '15.5px', color: '#495057', marginTop: '12px', lineHeight: 1.8 }}>{f.a}</p>
          </details>
        ))}
        <div style={{ textAlign: 'center', marginTop: '28px' }}>
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
            還有問題？直接問我們
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faq;
