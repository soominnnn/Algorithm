def solution(arr):
    sum = 0
    length = len(arr)
    
    for num in arr:
        sum += num
    
    answer = sum / length
    return answer