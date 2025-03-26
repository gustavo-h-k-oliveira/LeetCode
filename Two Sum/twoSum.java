import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;

class Solution {
    /* 
    * Brute Force
    * Time Complexity: O(n²)
    * Space Complexity: O(n)
    */

    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] {i, j};
                }
            }
        }
        return new int[]{};
    }

    /*
     * Two-pass Hash Table
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */

    public int[] TwoPassHashTable(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        // Hash table with each element's value as a key and its index as a value.
        for (int i = 0; i < nums.length; i++) {
            map.put(nums[i], i);
        }
        // Check if each element's complement exists in the hash table.
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement) && map.get(complement) != i) {
                return new int[] { i, map.get(complement) };
            }
        }
        return new int[] {};
    }

    /*
     * One-pass Hash Table
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */

    public int[] OnePassHashTable(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }

    public static void main(String[] args) {
        // int[] nums = {2, 7, 11, 15}; // [0, 1]
        // int target = 9;

        int[] nums = {3,2,4}; // [1, 2]
        int target = 6;

        Solution sol = new Solution();
        // int[] result = sol.twoSum(nums, target);
        // int[] result = sol.TwoPassHashTable(nums, target);
        int[] result = sol.OnePassHashTable(nums, target);

        System.out.println(Arrays.toString(result));
    }
}