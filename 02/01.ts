// tsConfig: {"noImplicitAny":false,"strictNullChecks":false}
// noImplicitAny: 변수들이 미리 정의된 타입을 가져야 한다.(true)
// cli 명령어 tsc --project tsconfig.json (tsconfig 경로에서 실행)
// tsconfig가 없을 때 tsc --noImplicitAy [파일명]
// tsconfig를 다시 수정했을 때 꼭 typescript 서버를 다시 시작
function add(a: number, b: number | null) {
  if (b !== null) return a + b;
}
add(10, null);
