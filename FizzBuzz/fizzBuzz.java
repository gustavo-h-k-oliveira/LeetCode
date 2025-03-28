package FizzBuzz;

import java.util.ArrayList;
import java.util.List;
import java.util.AbstractList;

class Solution {
    /*
     * FizzBuzz solution with `ArrayList<String>`.
     * Time Complexity: O(1)
     * Space Complexity: O(n)
     */    
    public List<String> fizzBuzz(int n) {
        List<String> answer = new ArrayList<>();

        for (int i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                answer.add("FizzBuzz");
            } else if (i % 3 == 0) {
                answer.add("Fizz");
            } else if (i % 5 == 0) {
                answer.add("Buzz");
            } else {
                answer.add(String.valueOf(i));
            }
        }
        return answer;
    }

    /*
     * FizzBuzz solution with `AbstractList`
     * Time Complexity: O(1)
     * Space Complexity: O(1)
     */
    public List<String> fizzBuzzAbstractList(int n) {
        // It does not store any data in memory. 
        return new AbstractList<>() {
            @Override
            public String get(int index) {
                int n = index + 1;
                if (n % 15 == 0) {
                    return "FizzBuzz";
                } else if (n % 3 == 0) {
                    return "Fizz";
                } else if (n % 5 == 0) {
                    return "Buzz";
                } else {
                    return Integer.toString(n);
                }
            }

            @Override
            public int size() {
                return n;
            }
        };
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        // List<String> result = sol.fizzBuzz(15);
        List<String> result = sol.fizzBuzzAbstractList(15);


        for (String s : result) {
            System.out.println(s);
        }
    }
}
