#include <iostream>
using namespace std;

int main()
{   
    string str;
    int count = 1;
    getline(cin, str);
    
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ' ') count += 1;
    }
    
    if (str[0] == ' ') count -= 1;
    if (str[str.length() - 1] == ' ') count -= 1;
    
    cout << count;
    return 0;
}