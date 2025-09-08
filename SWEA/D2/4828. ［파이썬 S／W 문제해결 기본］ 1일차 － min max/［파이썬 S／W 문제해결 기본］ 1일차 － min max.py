T = int(input()) + 1

for t in range(1, T):
    N = int(input())
    arr = list(map(int, input().split()))

    result = max(arr) - min(arr)
    print(f"#{t} {result}")