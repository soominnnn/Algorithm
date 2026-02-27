def solution(num_list):
    odd_sum, even_sum = "", ""
    
    for num in num_list:
        if num % 2 == 0:
            even_sum += str(num)
        else:
            odd_sum += str(num)
            
    return int(even_sum) + int(odd_sum)