"""
1. 입력 -> O(N): 100,000
2. FOR문 사용 시, 시간초과날 확률이 높음
3. 출력 -> 좌표 순서대로
"""

array = []
N = int(input())

for _ in range(N): # O(N)
    x, y = map(int, input().split())
    array.append((y, x))

array.sort(reverse=True)

for _ in range(N): # O(N)
    y, x = array.pop()
    print(x, y)