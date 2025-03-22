nums = list(map(int, input().split()))
for i in range(1, len(nums)):
    if nums[i] * nums[i-1] > 0:
        print(nums[i-1], nums[i])
        break