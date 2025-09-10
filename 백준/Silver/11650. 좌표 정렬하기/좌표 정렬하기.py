"""
1. 입력 -> O(N): 100,000
2. 우선순위 큐 사용 -> SORT 혹은 FOR문 사용 시, 시간초과날 확률이 높음
2. 출력 -> 좌표 순서대로
"""
from collections import deque

deque = []
N = int(input())

for _ in range(N): # O(N)
    x, y = map(int, input().split())
    deque.append((x, y))

deque.sort(reverse=True)

for _ in range(N): # O(N)
    x, y = deque.pop()
    print(x, y)