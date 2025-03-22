nums = list(map(int, input().split()))
print(*[nums[i] for i in range(1, len(nums)) if nums[i] > nums[i-1]])