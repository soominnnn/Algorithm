#include <iostream>
using namespace std;

int main() {
    int test_case, a, b;
    cin >> test_case;
    
    for (int i = 0; i < test_case; i++) {
        cin >> a >> b;
        cout << a + b << endl;
    }
    
    return 0;
}