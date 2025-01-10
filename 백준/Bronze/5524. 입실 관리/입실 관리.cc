#include <iostream>
#include <algorithm>
using namespace std;

int main()
{   
    long long num;
    cin >> num;
    string str[num];
    
    for(long long i = 0; i < num; i++) {
        cin >> str[i];
        transform(str[i].begin(), str[i].end(), str[i].begin(), ::tolower);
        cout << str[i] << endl;
    }

    return 0;
}