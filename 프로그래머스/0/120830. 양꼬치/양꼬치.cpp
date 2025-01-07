#include <string>
#include <vector>

using namespace std;

int solution(int n, int k) {
    int ramb_price = 12000;
    int soda_price = 2000;
    
    if(n >= 10) {
        k -= n / 10;  
    }
    
    int result = ramb_price * n + soda_price * k;
    return result;
}