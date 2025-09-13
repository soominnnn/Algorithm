"""
1. A + B - C -> 숫자로 연산
2. A + B - C -> 문자로 연산
"""
arr = []

for _ in range(3):
    arr.append(input())

# int로 변환 후 연산
int_sum = int(arr[0]) + int(arr[1]) - int(arr[2])

# str로 변환 후 연산
str_sum = int(str(arr[0]) + str(arr[1])) - int(arr[2])

print(int_sum, str_sum, sep="\n")