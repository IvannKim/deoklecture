//다각형의 넓이 구하기

function getPolygonStyle() {
    // let userData = "원하는 도형을 입력해주세요."
    let polygonStyle = "원형"
    return polygonStyle;
}
let polygonStyle = getPolygonStyle();
console.log(polygonStyle)

function polygonElement() {
    // let userData = "값을 순서대로 넣어주세요. ex)반지름 높이 아랫변 윗변 순으로 입력하시오"
    let polygonStrElement = "5"
    let polygonSplitedElement = polygonStrElement.split(" ");
    return polygonSplitedElement;
}
let polygonElement = polygonElement();
console.log(polygonElement)

function polygonChecker(polygonStyle) {
    if (polygonStyle == '원형') {
        circleArea(polygonElement)
    }
}
polygonChecker(polygonStyle);


// function circleArea() {
//     let parameter = arguments;
//     let parameterNumbers = parameter[0].map(strNumber => parseInt(strNumber, 10));
//     console.log(parameter[0].length)
//     console.log(parameterNumbers[0])
//     let area;
//     if (parameter[0].length == 1) {
//         area = Math.PI * parameterNumbers[0] * parameterNumbers[0]
//     } else if (parameterNumbers[0] === NaN){
//         area = "값을 제대로 입력해"
//     }
// console.log(area)
// return area
// }









    // else if (parameter[0].length == 3) {
    //     if (parameter[0][0] == '사각형') {
    //         result = parameterNumbners[1] * parameterNumbners[2]
    //     } else if (parameter[0][0] == '원기둥') {
    //         result = (Math.PI * 2 * parameterNumbners[1] * parameterNumbners[1]) + (Math.PI * 2 * parameterNumbners[1] * parameterNumbners[2])
    //     } else if (parameter[0][0] !== '사각형') {
    //         result = "값을 제대로 입력해주세요."
    //     } else if (parameter[0][0] !== '사다리꼴') {
    //         result = "값을 제대로 입력해주세요."
    //     } else if (typeof parameterNumbners[1] !== 'number') {
    //         result = "값을 제대로 입력해주세요."
    //     } else if (typeof parameterNumbners[2] !== 'number') {
    //         result = "값을 제대로 입력해주세요."
    //     }
    // } else if (parameter[0].length == 4) {
    //     if (parameter[0][0] == '사다리꼴') {
    //         result = (parameterNumbners[2] + parameterNumbners[3]) * parameterNumbners[1] / 2
    //     }
    // } else {
    //     result = "값을 제대로 입력해주세요."
    // }
