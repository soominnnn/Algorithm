def solution(n):
    answer = 0
    string_number = str(n)
    
    for i in range(0, len(string_number)):
        answer += int(string_number[i])

    return answer