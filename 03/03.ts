interface Square {
  kind: "square";
  width: number;
}
interface Rectangle {
  kind: "rectangle";
  height: number;
  width: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape.kind === "rectangle") {
    shape; // Type is Rectangle //type체크를 하기위한 변수
    return shape.width * shape.height;
  } else {
    shape; // Type is Squar수
    return shape.width * shape.width;
  }
}

export default {};
