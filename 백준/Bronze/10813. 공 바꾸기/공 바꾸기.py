"""
바구니: N
실행 횟수: M

- 조건
1. 바구니에 적혀있는 번호와 같은 번호의 공으로 초기화
2. 공을 바꿀 바구니 2개를 선택하여 서로 교환
"""
# 입력: N, M / 바구니 배열 생성
N, M = map(int, input().split())
basket = [i + 1 for i in range(N)]

# M번의 FOR문
for _ in range(M):
    i, j = map(int, input().split())
    # tmp 변수 사용하여 교환
    tmp = basket[i - 1]
    basket[i - 1] = basket[j - 1]
    basket[j - 1] = tmp

# join 및 출력
print(" ".join(map(str, basket)))