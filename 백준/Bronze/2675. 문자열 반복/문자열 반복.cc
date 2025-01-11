#include <iostream>
using namespace std;

int main()
{
    int t, n;
    string str, result;
    
    cin >> t;
    
    for (int i = 0; i < t; i++){
        cin >> n >> str;
        
        for (int j = 0; j < str.length(); j++) {
            for(int k = 0; k < n; k++) {
                result += str[j];
            }
        }
        result += '\n';
    }
    
    cout << result;
    return 0;
}