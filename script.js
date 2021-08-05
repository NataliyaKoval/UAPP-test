const paragraph = document.querySelector('[data-result]');

const square = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 8, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
];

function getPerimeter(square, levelOfNesting) {
    let valueOnCurrentNestingLevel = square[levelOfNesting][levelOfNesting];
    let elementsCountInOneSide = square.length - levelOfNesting * 2
    let perimeter = elementsCountInOneSide === 1 ? valueOnCurrentNestingLevel : (elementsCountInOneSide * 4 - 4) * valueOnCurrentNestingLevel
    return perimeter;
}

function getMaxPerimeter(square) {
    let levelsOfNesting = Math.ceil(square.length / 2);
    let perimeters = [];
    for (let i = 0; i < levelsOfNesting; i++) {
        perimeters.push(getPerimeter(square, i));
    }
    paragraph.innerHTML = `Perimeters are: ${perimeters.join(", ")}. Max perimeter is ${Math.max(...perimeters)}.`
}

getMaxPerimeter(square)
