T = int(input())

for test_case in range(T): # O(N)
    stack = []
    a = input()

    for ps in a:
        if ps == "(":
            stack.append(ps)
        elif ps == ")":
            if stack:
                stack.pop()
            else:
                print("NO")
                break
    else:
        if not stack:
            print("YES")
        else:
            print("NO")