// 實戰案例區（2026-11 新增）：去識別化但具體 — 真實案件與自家營運實證，不虛構
const cases = [
  {
    tag: '科技業上市公司',
    title: '大規模 API 更新自動化',
    pain: '系統要升級到新版底層套件，上千個 API 呼叫點要逐一改寫、建置、測試，純人工估計要吃掉數人月。',
    solution: '建置人在迴圈的 AI 改寫閉環：AI 改寫 → 自動建置測試 → 失敗自動分析重試，工程師只審核最終結果。敏感原始碼全程留在地端模型處理。',
    result: '工程工時預估降 30-40%，原始碼不出內網',
  },
  {
    tag: '設計服務業',
    title: '報價單自動生成',
    pain: '每份報價單要手動填 Excel：項目、金額、稅金、格式調整，一份 20-30 分鐘，旺季一天好幾份。',
    solution: '丟 CSV 或填簡單表單，AI 自動生成完整報價表格、套公司 logo、算稅金，還會自動檢查有沒有漏填金額。',
    result: '一份報價從 30 分鐘變 3 分鐘',
  },
  {
    tag: '店家客服',
    title: '訊息自動回覆',
    pain: 'Line / FB 每天重複回「幾點營業」「運費多少」「可以客製嗎」，回不完又不敢不回。',
    solution: 'AI 先分類訊息：常見問題自動回覆、有購買意圖或複雜問題即時通知真人接手，不讓機器人亂答。',
    result: '大部分例行訊息自動處理，老闆只接重要的',
  },
  {
    tag: '自家營運實證',
    title: 'B2B 名單開發自動化',
    pain: '陌生開發要人工找店家、查 email、逐一寫信，一天掃不了幾十家。',
    solution: '自動化流水線：地圖商家資料抓取 → 自動找聯絡 email → AI 依每家特性客製開發信 → 排程寄送與追蹤。',
    result: '3,000+ 筆名單全自動處理',
  },
  {
    tag: '自家營運實證',
    title: '社群帳號 AI 代理營運',
    pain: '社群要日更、要回留言、要看數據調方向，一個人根本顧不來。',
    solution: 'AI 代理全自動營運：選題發文、判斷留言該不該回並像真人回覆、商機留言即時通知、互動數據每週回饋選題策略。',
    result: '多帳號全自動日更，單帳號單日自然互動峰值 9,500+ 次瀏覽',
  },
  {
    tag: '電商',
    title: 'AI A/B 測試平台',
    pain: '想測不同文案跟版面哪個轉換好，但人工建變體、分流、統計太麻煩，測一輪要好幾週。',
    solution: 'AI 自動生成文案變體 → 自動分流曝光 → 轉換追蹤與統計顯著性判定，直接告訴你哪個版本贏。',
    result: '建測試從數天變數分鐘，數據自動判讀',
  },
];

const scenarios = [
  '營造估價單自動拆算',
  '會議記錄轉待辦事項',
  '發票單據辨識入帳',
  '合約重點摘要',
  '庫存與訂單同步',
  'Google 評論自動回覆',
  '報表自動產出',
  '舊系統資料遷移',
  '內部知識庫問答機器人',
  '排班與派工自動化',
];

const Cases = () => {
  return (
    <div className="section" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="service-container" style={{ width: '100%', padding: '60px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 20px' }}>
          <h2 style={{ fontWeight: 'bold' }}>實戰案例</h2>
          <p style={{ fontSize: '20px' }}>真實案件與我們自己每天在用的系統（客戶資訊已去識別化）</p>
        </div>
        <div className="row g-4" style={{ padding: '0 10px' }}>
          {cases.map((c) => (
            <div className="col-12 col-md-6 col-lg-4" key={c.title} style={{ display: 'flex' }}>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #e3e6e4',
                  borderRadius: '14px',
                  padding: '24px',
                  textAlign: 'left',
                  width: '100%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#eafbf4',
                    color: '#14b586',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    padding: '3px 12px',
                    borderRadius: '999px',
                    marginBottom: '10px',
                  }}
                >
                  {c.tag}
                </span>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '12px' }}>{c.title}</h3>
                <p style={{ fontSize: '15px', marginBottom: '8px', color: '#495057' }}>
                  <strong style={{ color: '#2D4234' }}>痛點：</strong>
                  {c.pain}
                </p>
                <p style={{ fontSize: '15px', marginBottom: '8px', color: '#495057' }}>
                  <strong style={{ color: '#2D4234' }}>做法：</strong>
                  {c.solution}
                </p>
                <p style={{ fontSize: '15px', margin: 0, color: '#14b586', fontWeight: 'bold' }}>
                  ✓ {c.result}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px', padding: '0 20px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>更多我們能做的應用情境</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', maxWidth: '760px', margin: '0 auto' }}>
            {scenarios.map((s) => (
              <span
                key={s}
                style={{
                  border: '1.5px solid #1edda0',
                  color: '#14b586',
                  fontSize: '15px',
                  padding: '6px 16px',
                  borderRadius: '999px',
                }}
              >
                {s}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '16px', color: '#a5a5a5', marginTop: '20px' }}>
            你的情境不在上面？大多數重複性流程都能自動化 —
            <a href="https://links.code-tw.com/#contact" target="_blank" rel="noopener noreferrer" style={{ color: '#14b586', fontWeight: 'bold' }}>
              跟我們聊聊
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cases;
