const API_URL = 'https://api-open.data.gov.sg/v2/real-time/api/psi';
const outputElement = document.getElementById('json-output');

async function fetchAndDisplayRawJSON() {
    try {
        // 1. API 요청 및 JSON 객체로 변환
        const response = await fetch(API_URL);
        
        if (!response.ok) {
             throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }
        
        const data = await response.json();

        // 2. JSON.stringify()를 사용하여 데이터를 보기 좋게 포맷팅
        // 인자 설명: (데이터, replacer 함수(사용 안 함), 들여쓰기 공백 수)
        const jsonString = JSON.stringify(data, null, 2);

        // 3. HTML 요소에 삽입
        outputElement.textContent = jsonString;

    } catch (error) {
        console.error("API 요청 실패:", error);
        outputElement.textContent = `데이터를 가져오는 데 실패했습니다: ${error.message}`;
    }
}

// 함수 실행
fetchAndDisplayRawJSON();