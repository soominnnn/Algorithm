def solution(n, control):
    answer = n
    
    for com in control:
        if com == "w":
            answer += 1
        elif com == "s":
            answer -= 1
        elif com == "d":
            answer += 10
        elif com == "a":
            answer -= 10
    
    return answer