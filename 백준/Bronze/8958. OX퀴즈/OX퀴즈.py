"""
O-> 연속된 O의 개수
X -> 0

O인 경우, True / 앞 점수를 쌓아놓기
"""
N = int(input())

for idx in range(N):
    state = False
    score, result = 0, 0
    arr = list(input())

    for str in arr:
        # O인 경우, STATE를 True로 변경하고, 점수를 저장해놓는다
        if str == "O":
            state = True
            score += 1
            result += score
        # X인 경우, 넘어가기
        elif str == "X":
            state = False
            score = 0
            continue

    print(result)