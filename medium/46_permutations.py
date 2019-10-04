class Solution(object):
    def permute(self, nums):
        self.perms = []
        self.helper(nums, [])
        return self.perms
    
    def helper(self, nums, curr):
        if len(nums) == 0 and len(curr) > 0:
            self.perms.append(curr)
        else:
            for i in range(len(nums)):
                self.helper(nums[:i] + nums[i+1:], curr + [nums[i]])
