"""
1. 입력: H, M
2. 현재 시간 - 45분
"""
# H, M 받아오기
H, M = map(int, input().split())

# M이 45보다 작은 경우 -> H = H-1 / M = 60 - (45 - M)
if M < 45:
    M = M + 60 - 45

    if H > 0:
        H = H - 1
    else:
        H = 23
else:
    M = M - 45

print(H, M)