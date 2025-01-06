#include<iostream>
using namespace std;

int main(int argc, char** argv)
{
	int test_case;
	int T;
	cin>>T;
    
	for(test_case = 1; test_case <= T; ++test_case)
	{
		int sum = 0;
   		int arr[10];

		for (int i = 0; i < 10; i++) {
            cin >> arr[i];
        	if (arr[i] % 2 != 0) {
           		sum += arr[i];
            }
        }
        cout << "#" << test_case << " " << sum << endl; 
	}
	return 0;
}