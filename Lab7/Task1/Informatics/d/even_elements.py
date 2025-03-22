nums = map(int, input().split())
print(*[n for n in nums if n % 2 == 0])