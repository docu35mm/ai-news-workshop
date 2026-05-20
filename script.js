const topics = [
  {
    title: "1. 생성형 AI 기사 작성 예시와 주의 사항",
    html: `
      <h3>세종대왕 맥북프로 던짐 사건</h3>
      <div class="card">
        <p>생성형 AI가 사실·시대·맥락을 그럴듯하게 혼합할 때 어떤 문제가 생기는지 보여주는 대표적 예시입니다.</p>
        <p><a href="https://namu.wiki/w/%EC%84%B8%EC%A2%85%EB%8C%80%EC%99%95%20%EB%A7%A5%EB%B6%81%ED%94%84%EB%A1%9C%20%EB%8D%98%EC%A7%90%20%EC%82%AC%EA%B1%B4?uuid=8f18b777-9009-4e52-a170-755574a38a1f" target="_blank" rel="noopener noreferrer">세종대왕 맥북프로 던짐 사건 보기</a></p>
      </div>

      <h3>생성형 AI 활용 기사 예시</h3>
      <div class="card good">
        <p>강의에서 참고할 수 있는 생성형 AI 활용 기사 예시입니다.</p>
        <p><a href="https://www.hankookilbo.com/news/article/A2025070814060001146" target="_blank" rel="noopener noreferrer">생성형 AI 활용 기사 예시 보기</a></p>
      </div>

      <h3>핵심 메시지</h3>
      <div class="card warning">
        <p><strong>속도보다 신뢰가 중요하다.</strong></p>
        <p>AI 활용의 목표는 '잘 쓰는 것'이 아니라 '틀린 것을 찾아내는 것'입니다.</p>
      </div>

      <h3>생성형 AI의 한계</h3>
      <ul>
        <li>답변 정보가 모두 정확하지는 않음</li>
        <li>최신성에 문제가 있음</li>
        <li>가치 판단을 할 수 없음</li>
        <li>차별·혐오 표현, 정치적 민감도 위험이 있음</li>
        <li>개인정보 침해, 저작권 문제가 발생할 수 있음</li>
      </ul>

      <h3>AI 활용 기사 사고 사례</h3>
      <ul>
        <li>AI가 인물 사진과 본문 인물을 혼동한 오보</li>
        <li>AI가 지어낸 가짜 도서 추천 사례</li>
        <li>AI 요약 서비스의 수치·인용 오류</li>
        <li>AI 스포츠 기사 문장 오류</li>
        <li>AI 생성 이미지의 선정적·폭력적 묘사 문제</li>
        <li>오번역으로 인한 의미 왜곡</li>
      </ul>
      <div class="links card">
        <p><strong>관련 기사</strong></p>
        <a href="https://www.mediatoday.co.kr/news/articleView.html?idxno=325351" target="_blank" rel="noopener noreferrer">관련 기사 1</a>
        <a href="https://www.mediatoday.co.kr/news/articleView.html?idxno=329781" target="_blank" rel="noopener noreferrer">관련 기사 2</a>
        <a href="https://news.nate.com/view/20250410n42787" target="_blank" rel="noopener noreferrer">관련 기사 3</a>
        <a href="https://www.mediatoday.co.kr/news/articleView.html?idxno=323924" target="_blank" rel="noopener noreferrer">관련 기사 4</a>
      </div>

      <h3>AI 능력 평가</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>영역</th>
            <th>AI 능력</th>
            <th>평가</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>속도</td><td>매우 빠름</td><td>✔</td></tr>
          <tr><td>문장력</td><td>평균 이상</td><td>✔</td></tr>
          <tr><td>사실 검증</td><td>취약</td><td>❌</td></tr>
          <tr><td>맥락 이해</td><td>제한적</td><td>❌</td></tr>
          <tr><td>책임성</td><td>없음</td><td>❌</td></tr>
        </tbody>
      </table>

      <h3>한국일보 생성형 AI 활용 준칙 요약</h3>
      <ul>
        <li>인간의 관여와 감독 없이 AI 생성 뉴스를 보도하지 않음</li>
        <li>사실 확인은 반드시 기자가 수행</li>
        <li>창의적 글쓰기와 현장 기록을 AI로 대체하지 않음</li>
        <li>AI 활용 사실을 투명하게 밝힘</li>
      </ul>
      <p><a href="https://www.hankookilbo.com/news/article/A2024032813480004813" target="_blank" rel="noopener noreferrer">한국일보 생성형 AI 활용 준칙 보기</a></p>
    `
  },
  {
    title: "2. 생성형 AI 사용 팁",
    html: `
      <h3>할루시네이션 줄이는 개인 맞춤 설정</h3>
      <p>ChatGPT 맞춤형 지침에 아래 문장을 넣어두면 답변의 신뢰성을 높이는 데 도움이 됩니다.</p>

      ${promptBox(`모르는 정보는 모른다고 솔직하게 말해줘.
사실과 의견을 구분해 줘.
아첨하지 말고 비판적 사고를 해줘.
답변의 근거가 되는 출처나 인용구를 포함해줘.`)}

      ${promptBox(`역할 정의:
"너는 20년 경력의 전문 팩트체커야"와 같이 신뢰성 높은 역할을 부여합니다.

출처 요구:
"답변의 근거가 되는 출처나 인용구를 반드시 포함해"라고 명시합니다.

단계적 사고 요구:
"답변하기 전에 근거를 먼저 생각하고 단계별로 논리를 전개해"라고 명령합니다.`)}

      <h3>사후 검증 방법</h3>
      <ul>
        <li>수치, 날짜, 인물 등 핵심 정보는 별도 검색으로 확인</li>
        <li>같은 질문을 여러 번 해 답변 일관성 확인</li>
        <li>출처가 실제 존재하는지 확인</li>
      </ul>

      <h3>학습 초기화와 보안 설정</h3>
      <ul>
        <li>대화 맥락을 초기화하려면 새 채팅을 시작</li>
        <li>저장된 기억은 설정 → 개인화 → 기억에서 삭제</li>
        <li>모델 학습 사용을 원치 않으면 설정 → 데이터 제어에서 옵션 해제</li>
        <li>모든 대화 기록 삭제는 설정 → 데이터 제어 → 모든 채팅 삭제하기</li>
      </ul>
    `
  },
  {
    title: "3. 한 계정에서 여러 역할 수행하기",
    html: `
      <h3>추천 방식: GPTs 활용</h3>
      <p>업무별 전용 봇을 만들어 사용하는 방식입니다.</p>

      <ul>
        <li>마케팅 전문가 GPT</li>
        <li>코드 리뷰어 GPT</li>
        <li>기사 제목 생성기 GPT</li>
        <li>보도자료 기사화 GPT</li>
        <li>왼쪽 사이드바의 [GPT 탐색(Explore GPTs)] → [+만들기(Create)] 클릭</li>
        <li>장점: 각 GPT마다 다른 '역할(Instructions)'과 '참고 자료(Knowledge)'를 넣을 수 있습니다. 대화가 섞이지 않고, 왼쪽 메뉴에서 필요할 때마다 해당 역할의 GPT를 불러와 바로 대화할 수 있습니다.</li>
      </ul>

      <h3>맞춤형 지침 활용</h3>
      <p>계정 전체에 기본 페르소나를 부여하는 방식입니다. 다만 모든 채팅에 적용되므로, 다른 작업을 할 때는 내용을 매번 수정해야 하는 번거로움이 있습니다.</p>
      <p><strong>설정 경로:</strong> 프로필 아이콘 → 맞춤형 지침(Custom Instructions)</p>

      ${promptBox(`나는 10년 차 산업부 기자이고, 주로 IT분야 기사를 작성해.
답변은 항상 표 형태로 요약하고, 전문 용어를 사용해줘.`)}

      <h3>채팅창 내 역할 전환</h3>
      <p>별도의 설정 없이 일반 채팅창 하나에서 여러 역할을 전환하며 쓰는 방식으로 대화 시작 시 역할을 강제로 지정합니다.</p>

      ${promptBox(`지금부터 너는 시니어 카피라이터야.
브랜드 슬로건 5개를 제안해줘.

이제 역할을 바꿔서 재무 분석가로서
이 문구들의 비용 대비 효과를 평가해봐.`)}

      <h3>Projects와 GPTs 비교</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>구분</th>
            <th>프로젝트 (Projects)</th>
            <th>GPTs (Custom GPTs)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>주요 목적</td><td>특정 프로젝트의 긴 맥락/파일 공유 및 협업</td><td>틈새 작업 자동화 및 특정 페르소나 설정</td></tr>
          <tr><td>핵심 기능</td><td>파일(문서, 코드) 기반의 컨텍스트 기억, 팀원 공유</td><td>지침(Instructions), 지식(Knowledge) 기반 작업</td></tr>
          <tr><td>지속성</td><td>작업 흐름이 장기간 유지됨</td><td>일회성 작업에 적합 (지침 기반)</td></tr>
          <tr><td>웹 검색</td><td>일반적으로 제한적</td><td>활발히 사용 가능 (Actions 기능)</td></tr>
          <tr><td>추천 대상</td><td>문서 작업이 많은 팀, 장기 프로젝트 관리자</td><td>반복 업무 자동화가 필요한 개인 사용자</td></tr>
        </tbody>
      </table>
    `
  },
  {
    title: "4. 기본 프롬프트 설계",
    html: `
      <h3>프롬프트 = 취재 설계</h3>
      <div class="card">
        <p>좋은 기사와 나쁜 기사의 차이는 결국 질문의 차이입니다.</p>
        <p>AI도 마찬가지입니다. 좋은 프롬프트는 좋은 답변을 이끌어냅니다.</p>
      </div>

      <h3>나쁜 예</h3>
      <div class="card bad">
        AI야 전기차 기사 써줘
      </div>

      <h3>좋은 예</h3>
      ${promptBox(`[역할 부여]
너는 글로벌 경제지의 자동차 산업 전문 시니어 기자야.
테슬라, 현대차, BYD 등 주요 기업의 전략과 배터리 기술 트렌드를
10년 이상 취재해온 베테랑이지.

[맥락 제공]
현재 전기차 시장은 캐즘 구간에 진입했다는 평가와 함께,
하이브리드차의 역습과 저가형 LFP 배터리 확산이라는 변화를 맞이하고 있어.

[구체적 지시]
핵심 주제는 '전기차 캐즘 극복을 위한 완성차 업체들의 가격 전쟁과 기술 차별화 전략'이야.
테슬라 가격 인하, 현대차·기아 하이브리드 병행 전략,
중국 브랜드의 글로벌 확장과 관세 장벽을 포함해줘.

[출력 형태]
제목, 리드문, 본문 3~4개 소제목, 결론으로 구성해줘.
분량은 공백 제외 1,500자 내외로 작성해줘.`)}



      <h3>추가 예시</h3>
      ${promptBox(`[역할부여]
너는 30년 경력의 메이저 신문사 탐사보도 기자다.
단순 정보 전달을 넘어, 사안의 본질과 구조적 문제를 짚는 것이 역할이다.

모든 출력은 반드시 "완성된 뉴스 기사" 형식으로 작성한다.
기사 외 설명, 해설, 안내문은 절대 출력하지 않는다.

[기사 기본 구성]
- 제목 (핵심 요약, 강한 메시지)
- 부제목 (최소 2개, 맥락 보완)
- 본문

[문체 규칙]
- 평어체 사용 (했다, 밝혔다)
- 경어체 금지
- 짧고 명확한 문장
- 불필요한 수식어 제거
- 동어 반복 금지

[핵심 작성 원칙]
1. 5W1H 반드시 포함
2. 리드문은 기사 전체를 압축한 한 문장
3. 가장 중요한 사실을 먼저 배치 (역피라미드 구조)
4. 사실 → 맥락 → 영향 → 전망 순으로 전개
5. 객관성 유지 (주관 최소화)
6. 단, 구조적 문제와 한계는 명확히 지적`)}

      ${promptBox(`[역할 부여]
너는 속보 전문 기자다.
가장 빠르게 핵심 사실을 전달하는 것이 유일한 목표다.

모든 출력은 반드시 "속보 기사" 형식으로 작성한다.
설명, 해설, 부가 문장은 절대 출력하지 않는다.

[기사 구성]
- 제목
- 본문 (3~5문장 이내)

[속보 규칙 - 핵심]
1. 첫 문장에 사건 핵심 전부 포함 (누가, 무엇을, 언제, 어디서)
2. 문장은 최대한 짧게 작성
3. 불필요한 배경 설명 금지
4. 수식어 최소화
5. 한 문장에 하나의 정보만 담는다

[문체]
- 평어체 (했다, 발생했다)
- 단문 위주
- 군더더기 제거

[정보 우선순위]
1. 발생 사실
2. 시간
3. 장소
4. 주요 인물/기관
5. 현재 상황

[속보 스타일]
- 긴 문장 금지
- 해석 금지
- 분석 금지
- 의견 금지

[금지 사항]
- 배경 설명
- 원인 분석
- 전망
- 비판
- 인터뷰 재구성

[품질 기준]
- 오탈자 0%
- 즉시 이해 가능
- 뉴스 자막처럼 읽히게 작성

[날짜 규칙]
- 반드시 기사 작성 날짜 포함

모든 출력은 “포털 속보 알림 수준”으로 작성한다.`)}

      <h3>차이를 만드는 요소</h3>
      <ol>
        <li>역할 부여</li>
        <li>구체적 질문</li>
        <li>맥락 제공</li>
        <li>출력 형식 지정</li>
      </ol>
    `
  },
  {
    title: "5. 메타 프롬프트 활용법",
    html: `
      <h3>메타 프롬프트란?</h3>
      <p>프롬프트를 만드는 프롬프트입니다. AI에게 먼저 “어떤 정보를 줘야 좋은 답변을 할 수 있는지” 묻는 방식입니다.</p>

      <h3>1단계: 프롬프트 설계를 위한 질문</h3>
      ${promptBox(`나는 산업부 기자야.
'전기차 시장의 캐즘 현상과 국내 배터리 업계의 대응 전략'에 대해
심층 기사를 쓰려고 해.

네가 프롬프트 엔지니어이자 베테랑 데스크라고 가정하고,
내가 어떤 정보, 데이터, 인터뷰 녹취록을 제공해야
시니어 기자 수준의 기사 초안을 작성할 수 있을지
최적화된 프롬프트 양식을 만들어줘.`)}

      <h3>2단계: 구조화된 상세 프롬프트</h3>
      ${promptBox(`앞서 네가 설계해준 가이드를 바탕으로 정보를 줄게.
아래 내용을 토대로 분석 기사를 작성해줘.

핵심 데이터:
- 1분기 전기차 판매량 전년 대비 10% 감소
- 하이브리드차 25% 급증

취재 내용:
- 현대차의 HEV 징검다리 전략
- LG엔솔의 4680 배터리 양산 계획

지시 사항:
단순 나열이 아니라 '위기 속의 기회'라는 관점으로 작성해줘.

형식:
헤드라인 3개, 서론, 본론 3개 단락, 결론으로 구성해줘.`)}

      <h3>3단계: 데스킹 및 검증</h3>
      ${promptBox(`이 기사를 읽고 논리적 허점이나 추가 취재가 필요한 부분 3가지를 짚어줘.
특히 테슬라나 BYD의 최신 동향과 비교했을 때
누락된 관점이 있다면 지적해줘.`)}
    `
  },
  {
    title: "6. 프롬프트 고도화: 제목 뽑기",
    html: `
      <h3>제목 생성 프롬프트</h3>
      <p>기사 전문을 넣으면 지면형, SEO형, 클릭형, 분석형, SNS형 제목을 생성하는 프롬프트입니다.</p>

      ${promptBox(`[Role & Expertise]
너는 20년 경력의 메이저 신문사 1면 편집기자이자,
디지털 트래픽을 책임지는 SEO 헤드다.

[Task Flow]
1) 기사 전문을 읽고 아래를 도출하라.
- 핵심 키워드 5개
- 사건의 본질 1문장 요약
- 독자 클릭 포인트 3가지

2) 아래 5개 카테고리별로 각각 3개씩, 총 15개 제목을 생성하라.
- 지면형
- SEO형
- 클릭형
- 분석형
- 모바일/SNS형

[품질 기준]
- 제목 중복 금지
- 과장 금지
- SEO형 제목은 실제 검색어처럼 자연스럽게 작성
- 숫자, 갈등, 반전, 전망 중 최소 1개 요소 반영

[출력 형식]
[핵심 키워드]
1.
2.
3.
4.
5.

[한줄 요약]
-

[클릭 포인트]
-
-
-

[지면형]
1.
2.
3.

[SEO형]
1.
2.
3.

[클릭형]
1.
2.
3.

[분석형]
1.
2.
3.

[모바일/SNS형]
1.
2.
3.

[검증 결과]
-

[Context input]
여기에 기사 전문을 입력하세요.`)}

      <h3>추가 활용 팁</h3>
      <ul>
        <li><strong>A/B 테스트 요청:</strong> "제안한 제목 중 네이버 뉴스 메인에 걸렸을 때 클릭률이 가장 높을 것 같은 제목 3개를 고르고 이유를 설명해줘"라고 추가 질문을 해보세요.</li>
        <li><strong>금기어 설정:</strong> 프롬프트에 "‘충격’, ‘경악’, ‘속보’ 같은 식상한 단어는 절대 쓰지 마"라고 제약 조건을 걸 수 있습니다.</li>
        <li><strong>지면 레이아웃 고려:</strong> "26글자 이내의 메인 제목과 15글자 내외의 부제로 구성해줘"처럼 구체적인 자수를 지정하면 레이아웃 잡기가 훨씬 수월해집니다.</li>
        <li><strong>매체 톤 반영:</strong> 특정 신문사의 특유의 어조를 더 입히고 싶으면 이를 요청해 수정해 사용도 가능합니다.</li>
      </ul>
    `
  },
  {
    title: "7. 나만의 뉴스 AI 만들기",
    html: `
      <h3>GPTs 만들기 절차</h3>
      <ol>
        <li>ChatGPT 홈에서 GPT 탐색 클릭</li>
        <li>우측 상단 만들기 클릭</li>
        <li>Configure 탭 선택</li>
        <li>Name, Description, Instructions 입력</li>
        <li>필요 시 Knowledge 파일 업로드</li>
        <li>Capabilities 설정</li>
        <li>저장 및 공유 범위 선택</li>
      </ol>

      <h3>필수 설정</h3>
      <p>GPTs Configure 화면에서 아래 내용을 각각 입력합니다.</p>

      <h4>Name</h4>
      ${promptBox(`뉴스 제목 생성기 PRO (SEO + 지면형)`)}

      <h4>Description</h4>
      ${promptBox(`기사 전문을 입력하면 지면형, SEO형, 클릭형, 분석형, SNS형 제목을 각각 3개씩 자동 생성하는 전문 편집기 GPT`)}

      <h3>GPTs용 Instructions 예시</h3>
      ${promptBox(`너는 20년 경력의 메이저 신문사 1면 편집기자이자,
디지털 SEO 헤드다.

사용자가 입력한 내용은 "기사 전문"으로 간주하고 아래 절차를 수행한다.

[작업 순서]
1) 핵심 분석
- 핵심 키워드 5개 추출
- 기사 한줄 요약 작성
- 클릭 포인트 3개 도출

2) 제목 생성
아래 5개 유형별로 각각 3개씩 생성한다.
- 지면형
- SEO형
- 클릭형
- 분석형
- SNS형

[출력 형식]
[핵심 키워드]
1.
2.
3.
4.
5.

[한줄 요약]
-

[클릭 포인트]
-
-
-

[지면형]
1.
2.
3.

[SEO형]
1.
2.
3.

[클릭형]
1.
2.
3.

[분석형]
1.
2.
3.

[모바일/SNS형]
1.
2.
3.

[검증 결과]
- 중복 없음 / 소구점 다양성 확보 / SEO 적합성 확인

※ 사용자가 기사 외의 질문을 하면 다시 기사 입력을 요청하라.`)}


      <h3>기타 팁</h3>
      <h4>Conversation Starters (추천)</h4>
      <ul>
        <li>기사 붙여넣고 제목 생성하기</li>
        <li>속보용 제목만 뽑기</li>
        <li>SEO 최적화 제목만 생성하기</li>
        <li>SNS용 짧은 제목 만들기</li>
      </ul>

      <h4>성능을 올리는 추가 설정</h4>
      <ul>
        <li>Web → OFF</li>
        <li>Image → OFF</li>
        <li>Code Interpreter → OFF</li>
      </ul>

      <h4>텍스트 생성 정확도 높이기</h4>
      <p>Instructions에 아래 문장을 추가하면 효과가 있습니다.</p>
      ${promptBox(`항상 간결하고 날카롭게 작성하되, 표현은 반복하지 않는다.`)}
    `
  },
  {
    title: "8. 나만의 뉴스 수집 봇 만들기",
    html: `
      <h3>구글 알리미 활용</h3>
      <ol>
        <li>Google Alerts 접속</li>
        <li>키워드 등록</li>
        <li>옵션 지정</li>
        <li>RSS 피드 만들기</li>
        <li>구글 시트에 IMPORTFEED 함수로 불러오기</li>
      </ol>

      <div class="links">
        <a href="https://www.google.com/alerts" target="_blank">Google Alerts 열기</a>
      </div>

      <h3>구글 시트 시간 변환 함수</h3>
      ${promptBox(`=DATEVALUE(LEFT(A1,10)) + TIMEVALUE(MID(A1,12,8)) + TIME(9,0,0)`)}

      <h3>뉴스레터 봇 요청 프롬프트</h3>
      ${promptBox(`구글스프레드 시트의 Apps Script를 이용해서
내 메일로 자동 뉴스레터를 발송할 수 있는 프로그램을 만들고 싶어.

난 코딩을 할 줄 몰라.
가장 쉬운 방법을 알려주고,
API를 사용하지 않고 할 수 있는 방법을 소개해줘.

내가 원하는 뉴스는 대한민국 정치 기사야.
정치 기사 중 top5 뉴스를 뽑아서 보내주고,
메일 보내는 시간 기준으로 24시간 안에 발행된 기사만 골라줘.

제목 / 언론사 / 기사발행시간 / 기사 요약 내용 / 링크를 표시해줘.`)}
    `
  },
  {
    title: "9. 네이버 뉴스 가져오기",
    html: `
      <h3>준비 단계</h3>
      <ol>
        <li>네이버 개발자 센터 접속</li>
        <li>애플리케이션 등록</li>
        <li>사용 API: 검색</li>
        <li>비로그인 오픈 API 서비스 환경: WEB 설정</li>
        <li>웹 서비스 URL: https://script.google.com</li>
        <li>Client ID와 Client Secret 복사</li>
      </ol>

      <div class="links">
        <a href="https://developers.naver.com/main/" target="_blank">네이버 개발자 센터</a>
      </div>

      <h3>Apps Script 예시 코드</h3>
      ${promptBox(`const NAVER_CLIENT_ID = '여기에_Client_ID';
const NAVER_CLIENT_SECRET = '여기에_Client_Secret';

const KEYWORD = '이재명';
const SHEET_NAME = '뉴스수집';

const ALLOWED_PRESS = [
  '조선일보',
  '중앙일보',
  '동아일보',
  '한국일보',
  '경향신문',
  '한겨레',
  '매일경제',
  '한국경제'
];

function collectNaverNews() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['수집시간', '키워드', '언론사', '제목', '발행시간', '링크']);
  }

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const existingLinks = getExistingLinks(sheet);
  const rows = [];

  for (let start = 1; start <= 1000; start += 100) {
    const url =
      'https://openapi.naver.com/v1/search/news.json'
      + '?query=' + encodeURIComponent(KEYWORD)
      + '&display=100'
      + '&start=' + start
      + '&sort=date';

    const options = {
      method: 'get',
      headers: {
        'X-Naver-Client-Id': NAVER_CLIENT_ID.trim(),
        'X-Naver-Client-Secret': NAVER_CLIENT_SECRET.trim()
      },
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(url, options);
    const data = JSON.parse(response.getContentText());

    if (!data.items) {
      Logger.log(data);
      throw new Error('네이버 뉴스 API 응답에 items가 없습니다. Client ID/Secret 또는 API 설정을 확인하세요.');
    }

    if (data.items.length === 0) break;

    let hasRecentNews = false;

    data.items.forEach(item => {
      const title = cleanHtml(item.title || '');
      const description = cleanHtml(item.description || '');
      const link = item.originallink || item.link;
      const pubDate = new Date(item.pubDate);

      if (pubDate >= since) hasRecentNews = true;
      if (pubDate < since) return;
      if (!link) return;
      if (existingLinks.has(link)) return;

      const press = detectPress(title, link, description);
      if (!ALLOWED_PRESS.includes(press)) return;

      rows.push([now, KEYWORD, press, title, pubDate, link]);
      existingLinks.add(link);
    });

    if (!hasRecentNews) break;
    Utilities.sleep(300);
  }

  rows.sort((a, b) => new Date(b[4]) - new Date(a[4]));

  if (rows.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
  }

  Logger.log(\`수집 완료: \${rows.length}건\`);
}

function getExistingLinks(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return new Set();

  const links = sheet.getRange(2, 6, lastRow - 1, 1).getValues().flat();
  return new Set(links.filter(Boolean));
}

function cleanHtml(text) {
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, ' ');
}

function detectPress(title, link, description) {
  const text = \`\${title} \${link} \${description}\`;

  if (text.includes('chosun.com')) return '조선일보';
  if (text.includes('joongang.co.kr')) return '중앙일보';
  if (text.includes('donga.com')) return '동아일보';
  if (text.includes('hankookilbo.com')) return '한국일보';
  if (text.includes('khan.co.kr')) return '경향신문';
  if (text.includes('hani.co.kr')) return '한겨레';
  if (text.includes('mk.co.kr')) return '매일경제';
  if (text.includes('hankyung.com')) return '한국경제';

  return '';
}`)}
    `
  },
  {
    title: "10. QnA",
    html: `
      <h3>자주 묻는 질문</h3>
      <div class="card">
        <p><strong>Q. AI 답변을 그대로 기사에 써도 되나요?</strong></p>
        <p>A. 안 됩니다. 사실 확인, 맥락 검토, 법적·윤리적 판단은 반드시 기자가 해야 합니다.</p>
      </div>

      <div class="card">
        <p><strong>Q. 회사 내부 정보를 넣어도 되나요?</strong></p>
        <p>A. 민감 정보, 개인정보, 비공개 자료는 넣지 않는 것이 원칙입니다. 필요하면 이름, 금액, 기관명을 마스킹해야 합니다.</p>
      </div>

      <div class="card">
        <p><strong>Q. 가장 먼저 익혀야 할 것은 무엇인가요?</strong></p>
        <p>A. 역할 부여, 맥락 제공, 출력 형식 지정, 사후 검증입니다.</p>
      </div>
    `
  }
];

function promptBox(text) {
  const safeText = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `
    <div class="prompt-box">
      <pre>${safeText}</pre>
      <button class="copy-btn" data-copy="${encodeURIComponent(text)}">복사</button>
    </div>
  `;
}

const topicContainer = document.getElementById("topics");

topics.forEach((topic, index) => {
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
    const icon = button.querySelector("span");

    topic.classList.toggle("open");
    icon.textContent = topic.classList.contains("open") ? "－" : "＋";
  });
});

document.addEventListener("click", async (event) => {
  if (!event.target.classList.contains("copy-btn")) return;

  const text = decodeURIComponent(event.target.dataset.copy);

  try {
    await navigator.clipboard.writeText(text);
    event.target.textContent = "복사됨";
    setTimeout(() => {
      event.target.textContent = "복사";
    }, 1200);
  } catch (error) {
    alert("복사에 실패했습니다. 직접 선택해 복사해주세요.");
  }
});

document.getElementById("expandAll").addEventListener("click", () => {
  document.querySelectorAll(".topic").forEach((topic) => {
    topic.classList.add("open");
    topic.querySelector(".topic-header span").textContent = "－";
  });
});

document.getElementById("collapseAll").addEventListener("click", () => {
  document.querySelectorAll(".topic").forEach((topic) => {
    topic.classList.remove("open");
    topic.querySelector(".topic-header span").textContent = "＋";
  });
});

// 비밀번호 잠금 화면
const PASSWORD = "hankook2026";

function showContent() {
  const gate = document.getElementById("passwordGate");
  const content = document.getElementById("content");

  if (gate) gate.style.display = "none";
  if (content) content.style.display = "block";

  sessionStorage.setItem("aiEduAccess", "ok");
}

function checkPassword() {
  const input = document.getElementById("passwordInput");
  const errorMsg = document.getElementById("errorMsg");

  if (!input) return;

  if (input.value === PASSWORD) {
    showContent();
  } else {
    if (errorMsg) errorMsg.textContent = "비밀번호가 맞지 않습니다.";
    input.value = "";
    input.focus();
  }
}

window.addEventListener("load", () => {
  const input = document.getElementById("passwordInput");

  if (sessionStorage.getItem("aiEduAccess") === "ok") {
    showContent();
    return;
  }

  if (input) {
    input.focus();
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkPassword();
      }
    });
  }
});
