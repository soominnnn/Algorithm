#include <iostream>
using namespace std;

int main() {
    int n = 9;
    int arr[9];
    int max = 0, index = 0;
    
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        
        if (max < arr[i]) {
            max = arr[i];
            index = i + 1;
        }
    }
    
    cout << max << endl << index;
    return 0;
}