function processCommands(arr) {
    let processor = (function () {
        let result = "";

        return function (line) {
            let splitLine = line.split(" ");
            switch (splitLine[0]) {
                case "append":
                    result += splitLine[1];
                    break;
                case "removeStart":
                    result = result.slice(Number(splitLine[1]));
                    break;
                case "removeEnd":
                    result = result.slice(0, result.length - Number(splitLine[1]));
                    break;
                case "print":
                    console.log(result);
            }
        }
    })();

    for (let line of arr) {
        processor(line);
    }
}

processCommands(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']); // 34
