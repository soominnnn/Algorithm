#include <stdio.h>

int main()
{
    int a, b;
    
    while(scanf("%d %d", &a, &b) != -1 && a != 0 && b != 0) {
        printf("%d\n", a + b);
    }

    return 0;
}