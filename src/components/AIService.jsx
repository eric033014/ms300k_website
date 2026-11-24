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

import { useEffect, useState } from 'react';

// 自家系統即時數據（抄 GCT 的「拿自己當展示間」做法；API 掛掉就顯示後備靜態值）
const FALLBACK_STATS = { auto_posts: 377, auto_replies: 753, days_running: 86 };

const StatsStrip = () => {
  const [stats, setStats] = useState(FALLBACK_STATS);
  useEffect(() => {
    fetch('https://links.code-tw.com/api/public-stats')
      .then((r) => r.json())
      .then((s) => setStats({ ...FALLBACK_STATS, ...s }))
      .catch(() => {});
  }, []);
  const items = [
    { label: 'AI 自動發文', value: stats.auto_posts },
    { label: 'AI 自動回覆', value: stats.auto_replies },
    { label: '全自動運轉天數', value: stats.days_running },
  ];
  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '28px',
          padding: '16px 32px',
          background: '#fff',
          border: '1px solid #e3e6e4',
          borderRadius: '14px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {items.map((it) => (
          <div key={it.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '26px', fontWeight: 'bold', color: '#14b586', fontVariantNumeric: 'tabular-nums' }}>
              {Number(it.value).toLocaleString()}
            </span>
            <span style={{ fontSize: '13px', color: '#5F6A64' }}>{it.label}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '14px', color: '#a5a5a5', marginTop: '10px' }}>
        ↑ 我們自己每天在用的 AI 系統，數字即時更新
      </p>
    </div>
  );
};

const AIService = () => {
  return (
    <div className="section" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="service-container" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px', padding: '0 20px' }}>
          <h2 style={{ fontWeight: 'bold' }}>企業 AI 導入</h2>
          <p style={{ fontSize: '20px' }}>
            像請了一批不用睡覺的 AI 員工 — AI 跑重複工作，人只做把關
          </p>
        </div>
        <StatsStrip />
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
        <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
          <a
            href="/ms300k-ai-onepager.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#fff',
              color: '#14b586',
              fontWeight: 'bold',
              fontSize: '18px',
              padding: '12px 36px',
              borderRadius: '999px',
              textDecoration: 'none',
              border: '2px solid #1edda0',
            }}
          >
            下載一頁式介紹 PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIService;
