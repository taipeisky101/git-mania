
arr1 = [];

function tiles(arr1) {

    for (i = 0; i < 9; i++) {
    arr1[i] = ('<td class="tile' + (i+1) + '">' + (i+1) + '</td>');
    arr1.push(arr1[i]);
    }
    arr1.pop();
    arr2 = arr1;
    return arr2;
}

function new_tiles(arr2) {
    newarr = [];
    for (j = 0; j < 9; j++) {
        k = parseInt(Math.random() * arr2.length);
        element = arr2.splice(k, 1);
        newarr.push(element[0]);
    }
    return newarr;
}
