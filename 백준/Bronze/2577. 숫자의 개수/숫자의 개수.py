"""
1. 입력: A, B, C => A x B x C를 한 값을 구한다
2. FOR문을 통해 각각 숫자를 ARRAY에 담는다
3. 출력: ARRAY를 JOIN으로 묶어 일렬로 출력
"""
A = int(input())
B = int(input())
C = int(input())

array = [0 for _ in range(10)]
multiple = list(str(A * B * C))

for idx in multiple:
    array[int(idx)] += 1

str_arr = map(str, array)
result = "\n".join(str_arr)

print(result)