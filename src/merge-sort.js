//
// merge sort
// 归并排序
//

function shiftMinFirst (leftArray, rightArray) {
    var left, right, min;

    if (leftArray.length > 0) {
        if (rightArray.length > 0) {
            left = leftArray[0];
            right = rightArray[0];
            if (left > right) {
                min = right;
                rightArray.shift();
            }
            else {
                min = left;
                leftArray.shift();
            }
        }
        else {
            min = leftArray.shift();
        }
    }
    else {
        if (rightArray.length > 0) {
            min = rightArray.shift();
        }
        else {
            throw new Error('without first number');
        }
    }

    return min;
}

function mergeArray (data, begin, mid, end) {
    var leftArray = data.slice(begin, mid + 1),
        rightArray = data.slice(mid + 1, end + 1),
        sorted = [],
        min;

    for (var i = 0; i <= end - begin; i += 1) {
        if (leftArray.length > 0 || rightArray.length > 0) {
            min = shiftMinFirst(leftArray, rightArray);
            sorted.push(min);
        } else {
            break;
        }
    }

    for (var j = 0; j < sorted.length; j += 1) {
        data[begin + j] = sorted[j];
    }
}

function sortArray (data, begin, end) {
    var mid = parseInt((end - begin) / 2, 10) + begin,
        val;

    if (end - begin > 0) {
        sortArray(data, begin, mid); // sort left
        sortArray(data, mid + 1, end); // sort right
        mergeArray(data, begin, mid, end); // merge sorted
    }
}

function mergeSort (data) {
    sortArray(data, 0, data.length - 1);
}

var data = [
    [],
    [1],
    [0, 1, 2, 3],
    [3, 2, 1, 0],
    [1, 3, 5, 2, 4, 0]
];

var startAt = new Date().getTime();
data.forEach(function (d) {
    mergeSort(d);
    console.log(d);
})
var endAt = new Date().getTime();
console.log('cost time:', endAt - startAt, 'ms');