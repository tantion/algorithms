//
// Insertion sort
//

function insertionSort (data) {
    var val, insertAt;
    for (var i = 1, len = data.length; i < len; i += 1) {
        val = data[i];
        insertAt = 0;
        for (var j = i - 1; j >= 0; j -= 1) {
            if (data[j] > val) {
                data[j + 1] = data[j];
            } else {
                insertAt = j + 1;
                break;
            }
        }
        data[insertAt] = val;
    }
}

var data = [
    [],
    [1],
    [0, 1, 2, 3],
    [3, 2, 1, 0],
    [1, 3, 5, 2, 4, 0]
];

data.forEach(function (d) {
    insertionSort(d);
    console.log(d);
})

