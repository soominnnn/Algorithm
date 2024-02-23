function solution(arr, delete_list) {
    for(let i = 0; i < delete_list.length; i++) {
        if(arr.includes(delete_list[i])) {
            arr = arr.filter(el => el !== delete_list[i]);
        }
    }
    return arr;
}