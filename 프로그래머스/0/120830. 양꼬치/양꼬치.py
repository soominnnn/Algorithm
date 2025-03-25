def solution(n, k):
    ramb_cost = 12000
    soda_cost = 2000
    
    answer = ramb_cost * n + soda_cost * k - n // 10 * soda_cost
    return answer