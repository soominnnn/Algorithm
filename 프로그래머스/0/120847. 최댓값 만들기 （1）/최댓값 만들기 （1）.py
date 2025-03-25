def solution(numbers):
    max = numbers[0]
    
    for i in numbers:
        for j in numbers:
            if max < i * j and i != j:
                max = i * j
                
    return max