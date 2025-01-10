#include <iostream>
using namespace std;

int calc(int a, int b) {
    int result = (a + b) * (a - b);
    
    return result;
}

int main()
{
    int a, b;
    cin >> a >> b;
    
    cout << calc(a, b);
    return 0;
}