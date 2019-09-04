const binarySearch = (arr, element) => {
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    let start = 0
    let end = arr.length - 1
    let midPoint = Math.floor((start + end) / 2)

    while (arr[midPoint] !== element && start < end) {
        if (element < arr[middle]) {
            stop = middle - 1
        } else {
            end = middle + 1
        }
        midPoint = Math.floor((start + midPoint) / 2)
    }
    return (arr[midPoint] !== element) ? -1 : midpoint
}

const midPoint = (arr) => Math.floor(arr.length / 2)

const compareMidpoint = (arr, mid, elem) => Math.sign(elem - arr[mid])

const addMiddleIndexIfFound = (ix, mid) => ix < 0 ? ix : mid + ix


const recursiveBinarySearch = (arr, elem) => {
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    
    if (arr.length < 1) return -1;

    const mid = midPoint(arr)
    const comp = compareMidpoint(arr, mid, elem)

    return comp == 0 ? mid
        : comp > 0 ?
            addMiddleIndexIfFound(recursiveBinarySearch(arr.slice(mid + 1), elem),
                mid + 1)
            : comp < 0 ? recursiveBinarySearch(arr.slice(0, mid), elem)
                : -1
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}