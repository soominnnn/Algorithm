#include <iostream>
using namespace std;

int add(int x, int y) {
    return x + y;
}

int remove(int x, int y) {
    return x - y;
}

int multiple(int x, int y) {
    return x * y;
}

int quotient(int x, int y) {
    return (double)x / y;
}

int remainder(int x, int y) {
    return x % y;
}

int main(){
    int a, b;
    cin >> a >> b;
    
    cout << add(a, b) << endl;
    cout << remove(a, b) << endl;
    cout << multiple(a, b) << endl;
    cout << quotient(a, b) << endl;
    cout << remainder(a, b) << endl;
    
    return 0;
}