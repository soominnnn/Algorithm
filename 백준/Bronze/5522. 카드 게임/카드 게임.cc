#include <iostream>
using namespace std;

int main() {
    int n = 5, sum = 0;
    int score[n];
    
    for (int i = 0; i < 5; i++) {
        cin >> score[i];
        sum += score[i];
    }
    
    cout << sum;
    return 0;
}