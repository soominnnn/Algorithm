def clean_room(x, y, d):
    global count

    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    while True:
        if room[x][y] == 0:
            room[x][y] = 2
            count += 1

        cleaned = False
        for i in range(4):
            d = (d + 3) % 4
            nx = x + dx[d]
            ny = y + dy[d]

            if 0 <= nx < n and 0 <= ny < m and room[nx][ny] == 0:
                x, y = nx, ny
                cleaned = True
                break

        if cleaned:
            continue
        else:
            back = (d + 2) % 4
            bx = x + dx[back]
            by = y + dy[back]
            if 0 <= bx < n and 0 <= by < m and room[bx][by] != 1:
                x, y = bx, by
            else:
                return

n, m = map(int, input().split())
x, y, d = map(int, input().split())
room = [list(map(int, input().split())) for _ in range(n)]
count = 0

clean_room(x, y, d)
print(count)