function promptBox(text) {
  const safeText = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `
    <div class="prompt-box">
      <pre>${safeText}</pre>
      <button class="copy-btn" data-copy="${encodeURIComponent(text)}">복사</button>
    </div>
  `;
}

const topics = [
  {
    title: "1. 생성형 AI 기사 작성 예시와 주의 사항",
    html: `
      <h3>세종대왕 맥북프로 던짐 사건</h3>
      <div class="card">
        <a href="https://namu.wiki/w/%EC%84%B8%EC%A2%85%EB%8C%80%EC%99%95%20%EB%A7%A5%EB%B6%81%ED%94%84%EB%A1%9C%20%EB%8D%98%EC%A7%90%20%EC%82%AC%EA%B1%B4?uuid=8f18b777-9009-4e52-a170-755574a38a1f" target="_blank">
        👉 사건 보기
        </a>
      </div>

      <h3>생성형 AI 활용 기사 예시</h3>
      <div class="card">
        <a href="https://www.hankookilbo.com/news/article/A2025070814060001146" target="_blank">
        👉 기사 보기
        </a>
      </div>

      <h3>AI 활용 기사 사고 사례</h3>
      <ul>
        <li><a href="https://www.mediatoday.co.kr/news/articleView.html?idxno=325351" target="_blank">관련 기사 1</a></li>
        <li><a href="https://www.mediatoday.co.kr/news/articleView.html?idxno=329781" target="_blank">관련 기사 2</a></li>
        <li><a href="https://news.nate.com/view/20250410n42787" target="_blank">관련 기사 3</a></li>
        <li><a href="https://www.mediatoday.co.kr/news/articleView.html?idxno=323924" target="_blank">관련 기사 4</a></li>
      </ul>

      <h3>AI 능력 평가</h3>
      <table>
        <tr><th>영역</th><th>AI 능력</th><th>평가</th></tr>
        <tr><td>속도</td><td>매우 빠름</td><td>✔</td></tr>
        <tr><td>문장력</td><td>평균 이상</td><td>✔</td></tr>
        <tr><td>사실 검증</td><td>취약</td><td>❌</td></tr>
        <tr><td>맥락 이해</td><td>제한적</td><td>❌</td></tr>
        <tr><td>책임성</td><td>없음</td><td>❌</td></tr>
      </table>

      <h3>한국일보 생성형 AI 활용 준칙 요약</h3>
      <a href="https://www.hankookilbo.com/news/article/A2024032813480004813" target="_blank">
      👉 준칙 보기
      </a>
    `
  },

  {
    title: "2. 생성형 AI 사용 팁",
    html: `
      <h3>프롬프트 설정</h3>

      ${promptBox(`모르는 정보는 모른다고 말해줘.
사실과 의견을 구분해줘.
출처를 포함해줘.`)}

      ${promptBox(`너는 20년 경력의 전문 팩트체커야.
답변의 근거가 되는 출처를 반드시 포함해.
단계적으로 생각하고 답변해.`)}

      <h3>학습 초기화와 보안 설정</h3>
      <ul>
        <li>새 채팅 시작하면 맥락 초기화</li>
        <li>설정 → 기억 삭제 가능</li>
        <li>설정 → 데이터 제어 → 모든 채팅 삭제</li>
      </ul>
    `
  },

  {
    title: "3. 한 계정에서 여러 역할 수행하기",
    html: `
      <h3>GPTs 활용</h3>
      <ul>
        <li>GPT 탐색 → 만들기 클릭</li>
        <li>각 GPT마다 역할/자료 설정 가능</li>
      </ul>

      <h3>맞춤형 지침</h3>

      ${promptBox(`나는 10년 차 산업부 기자이고 IT 기사를 작성해.
답변은 표 형태로 요약해줘.`)}

      <h3>채팅창 역할 전환</h3>
      <p>하나의 채팅에서 역할을 계속 바꿔가며 사용</p>

      ${promptBox(`너는 카피라이터야.
슬로건 5개 만들어줘.`)}

      <h3>비교</h3>
      <table>
        <tr><th>구분</th><th>프로젝트</th><th>GPTs</th></tr>
        <tr><td>목적</td><td>협업</td><td>자동화</td></tr>
        <tr><td>기능</td><td>파일 공유</td><td>지침 기반</td></tr>
      </table>
    `
  }
];

const topicContainer = document.getElementById("topics");

topics.forEach((topic) => {
  const article = document.createElement("article");
  article.className = "topic";

  article.innerHTML = `
    <button class="topic-header">
      <h2>${topic.title}</h2>
      <span>＋</span>
    </button>
    <div class="topic-body">
      ${topic.html}
    </div>
  `;

  topicContainer.appendChild(article);
});

document.querySelectorAll(".topic-header").forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.closest(".topic");
    topic.classList.toggle("open");
  });
});

document.addEventListener("click", async (event) => {
  if (!event.target.classList.contains("copy-btn")) return;

  const text = decodeURIComponent(event.target.dataset.copy);
  await navigator.clipboard.writeText(text);
  event.target.textContent = "복사됨";
});
