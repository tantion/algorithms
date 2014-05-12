//
// heap sort
// 堆排序
//

function maxHeapify (data, index) {
    var left = 2 * index + 1,
        right = left + 1,
        largest = index,
        temp,
        heapSize = data.heapSize;

    if (left < heapSize && data[left] > data[largest]) {
        largest = left;
    }
    if (right < heapSize && data[right] > data[largest]) {
        largest = right;
    }
    if (largest !== index) {
        temp = data[index];
        data[index] = data[largest];
        data[largest] = temp;
        maxHeapify(data, largest);
    }

}

// 建立正确的堆属性
function buildMaxHeap (data) {
    data.heapSize = data.length;

    for (var i = parseInt(data.length / 2, 10); i >= 0; i -= 1) {
        maxHeapify(data, i);
    }
}

function heapSort (data) {
    buildMaxHeap(data);

    var max;
    for (var i = data.length - 1; i > 0; i -= 1) {
        max = data[0];
        data[0] = data[i];
        data[i] = max;
        data.heapSize -= 1;
        maxHeapify(data, 0);
    }

    delete data.heapSize;
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
    heapSort(d);
    console.log(d);
})
var endAt = new Date().getTime();
console.log('cost time:', endAt - startAt, 'ms');