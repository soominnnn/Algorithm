#include <iostream>
#include <string>

using namespace std;

int main(void) {
    ios::sync_with_stdio(false);
    cout.tie(NULL);
    
    string str;
    string result;
    int n;
    
    cin >> str >> n;
    
    for (int i = 0; i < n; i++) {
        result += str;
    }
    
    cout << result;
    return 0;
}