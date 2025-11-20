arr = [1, 3, 11, 15, 23, 28, 37, 52, 85, 100]
res_arr = []

for i in range(len(arr)):
    if arr[i] % 2 == 0:
        res_arr.append(arr[i])

print(res_arr)