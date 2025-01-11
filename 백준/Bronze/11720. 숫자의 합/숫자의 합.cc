#include <iostream>
#include <string>
using namespace std;

int main()
{
    int n;
    int sum = 0;
    string number;
    cin >> n >> number;
    
    for (int i = 0; i < n; i++) {
        sum += number[i] -'0';
    }
    
    cout << sum;
    return 0;
}