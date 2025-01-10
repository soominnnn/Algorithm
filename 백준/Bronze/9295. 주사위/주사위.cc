#include <iostream>
#include <algorithm>
using namespace std;

int main()
{   
    int testcase;
    int a, b;
    cin >> testcase;
    
    for (int i = 1; i <= testcase; i++ ) {
        cin >> a >> b;
        
        cout << "Case " << i << ": " << a + b << endl;
    }

    return 0;
}