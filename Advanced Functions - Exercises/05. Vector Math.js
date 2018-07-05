let solve = (function () {
    function add(vecA, vecB) {
        return [vecA[0] + vecB[0], vecA[1] + vecB[1]]
    }

    function multiply(vec, scalar) {
        return [vec[0] * scalar, vec[1] * scalar];
    }

    function length(vec) {
        return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
    }

    function dot(vecA, vecB) {
        return vecA[0] * vecB[0] + vecA[1] * vecB[1];
    }

    function cross(vecA, vecB) {
        return vecA[0] * vecB[1] - vecA[1] * vecB[0];
    }

    return{
        add: add,
        multiply: multiply,
        length: length,
        dot: dot,
        cross: cross
    };
})();

console.log(solve.add([1, 1], [1, 0]));
console.log(solve.multiply([3.5, -2], 2));
console.log(solve.length([3, -4]));
console.log(solve.dot([1, 0], [0, -1]));
console.log(solve.cross([3, 7], [1, 0]));
