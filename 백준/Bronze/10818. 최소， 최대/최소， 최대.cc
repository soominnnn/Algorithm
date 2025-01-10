#include <iostream>
using namespace std;

int main()
{
    int num;
    cin >> num;
    int arr[num];
    int max = -1000001, min = 1000001;
    
    for (int i = 0; i < num; i++) {
        cin >> arr[i];
        
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    
    cout << min << " " << max;
    return 0;
}