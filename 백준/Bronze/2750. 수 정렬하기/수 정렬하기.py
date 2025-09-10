"""
1. 입력 -> 1줄: 수의 개수 / 2줄: 숫자 | 1000개 이하
2. 출력 -> 1줄씩 정렬하여 배출 -> sort -> join
"""
N = int(input())
arr = []

for _ in range(N): # 시간복잡도: O(N)
    arr.append(int(input()))

arr.sort()
result = "\n".join(map(str, arr))

print(result)