"""
바구니: N
실행 횟수: M
시간 제한: 1초

범위: i ~ k
범위에 같은 번호의 공을 넣는다.
"""

# 입력: N, M / 바구니 배열 생성
N, M = map(int, input().split())
basket = [0 for _ in range(N)]

# M번의 FOR문
for _ in range(M):
    i, j, k = map(int, input().split())
    # FOR문 I - K까지 번호 변경
    for idx in range(i - 1, j):
        basket[idx] = k

# 출력
print(" ".join(map(str, basket)))