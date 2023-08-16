interface State {
  name: string;
  capital: string;
}
// interface로 의도를 명확하게 한다.
const states: State[] = [
  { name: "Alabama", capital: "Montgomery" },
  { name: "Alaska", capital: "Juneau" },
  { name: "Arizona", capital: "Phoenix" },
  // ...
];
for (const state of states) {
  /**
   * console.log(state.capitol);
   * 수정
   */
  console.log(state.capital);
}
