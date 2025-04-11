class Solution {
    /*
     * Time Complexity: O(n × log H)
     * Space Complexity: O(log H)
     */
    public int countSymmetricIntegers(int low, int high) {
        int counter = 0;

        for (int i = low; i <= high; i++) {
            String str = String.valueOf(i);
            int len = str.length();

            if (len % 2 == 0) {
                int sum1 = 0;
                int sum2 = 0;

                for (int j = 0; j < len; j++) {
                    int digit = str.charAt(j) - '0';

                    if (j < len / 2) {
                        sum1 += digit;
                    } else {
                        sum2 += digit;
                    }
                }

                if (sum1 == sum2) {
                    counter++;
                }
            }
        }

        return counter;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.countSymmetricIntegers(1010, 1200));
    }
}