#include <iostream>
using namespace std;

int main() {
    int correct_arr[6] = { 1, 1, 2, 2, 2, 8};
    int find_arr[6];
    int result_arr[6];
    
    for (int i = 0; i < 6; i++) {
        cin >> find_arr[i];
        
        if (find_arr[i] > correct_arr[i]) {
            result_arr[i] = correct_arr[i] - find_arr[i];
        }
        else if (find_arr[i] == correct_arr[i]) {
            result_arr[i] = 0;
        }
        else if (find_arr[i] < correct_arr[i]) {
            result_arr[i] = correct_arr[i] - find_arr[i];
        }
        
        cout << result_arr[i] << " ";
    }
    
    return 0;
}