def solution(s):
    stack = []
    
    for char in s:
        if char == '(':
            stack.append(char)
        else:
            if stack and stack[-1] == '(':
                stack.pop()
            else:
                return False
    
    return not stack