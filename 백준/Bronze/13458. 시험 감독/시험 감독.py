n = int(input())
A = list(map(int, input().split()))
B, C = map(int, input().split())
count = 0

for people in A:
    count += 1
    people -= B

    if people > 0:
        count += (people + C - 1) // C

print(count)