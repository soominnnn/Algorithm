def solution(s):
    arr = list(map(int, s.split(" ")))
    max_number = max(arr)
    min_number = min(arr)
    
    answer = str(min_number) + " " + str(max_number)
    return answer