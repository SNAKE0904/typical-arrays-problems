
exports.min = function min (array) {
    if(array === undefined || !array.length || array == null){
        return 0;
    } else{
        let min = array[0];
        for(let x = 1; x < array.length; x++){
            if(array[x] < min){
                min = array[x];
            }
        }
        return min;
    }
}

exports.max = function max (array) {
    if(array === undefined || !array.length || array == null){
        return 0;
    } else{
        let max = array[0];
        for(let x = 1; x < array.length; x++){
            if(array[x] > max){
                max = array[x];
            }
        }
        return max;
    }
}

exports.avg = function avg (array) {
    if(array === undefined || !array.length || array == null){
        return 0;
    } else {
        let avg = 0;
        for(let x = 0; x < array.length; x++){
            avg += array[x];
        }
        return avg / array.length;
    }
}
