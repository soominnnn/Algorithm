"""
No.2839번 - 설탕 배달 | 그리디

1. 시간 제한: 1초
2. 입력: N
3. 3kg, 5kg 설탕 봉지로, 적은 개수의 봉지를 배달해야함
4. 최소 봉지 개수, N킬로그램 불가 시 -1출력
"""
N = int(input())

# 5키로로 나눴을 때, 몫과 나머지 구하기
result = N // 5
remain = N % 5

# while문: 5키로 -- / 3키로로 나눠지는지 확인
while result >= 0:
    # 3키로로 나눔 가능: 종료
    if (N - result * 5) % 3 == 0:
        result += (N - result * 5) // 3
        break
    # 3키로로 나눔 불가능: 5kg 봉지 하나씩 빼기
    else:
        result -= 1

#현재 봉지 상황 출력
if result == 0:
    print(-1)
else:
    print(result)