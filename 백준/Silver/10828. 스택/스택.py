"""
시간 : 0.5초 -> 1000만개 10000000
입력: 10,000개 O(N^2)은 위험할 수 있음

명령은 총 5가지
- push: 스택에 추가
- pop: 가장 위에 있는 정수를 빼고 출력, 빈 경우 -1 출력
- size: 아이템 개수 출력
- empty: 스택이 비어있으면 1, 아니면 0
- top: 가장 마지막에 있는 수 출력, 빈 경우 -1 출력
"""
import sys

class Stack:
    def __init__(self):
        self.stack = []

    def is_empty(self):
        if len(self.stack) == 0:
            return 1
        else:
            return 0

    def push(self, X):
        self.stack.append(X)

    def pop(self):
        if not self.is_empty():
            print(self.stack.pop())
        else:
            print(-1)

    def size(self):
        print(len(self.stack))

    def top(self):
        if not self.is_empty():
            print(self.stack[len(self.stack) - 1])
        else:
            print(-1)

stack = Stack()
N = int(sys.stdin.readline())

for _ in range(N):
    com = sys.stdin.readline()

    if com.startswith("push"):
        command, X = com.split()
        stack.push(X)
    elif com.startswith("pop"):
        stack.pop()
    elif com.startswith("size"):
        stack.size()
    elif com.startswith("empty"):
        print(stack.is_empty())
    elif com.startswith("top"):
        stack.top()