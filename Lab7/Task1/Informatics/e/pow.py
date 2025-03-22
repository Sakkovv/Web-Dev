def power(a, n):
    result = 1
    for _ in range(n):
        result *= a
    return result

a, n = input().split()
a = int(a)
n = int(n)
print(power(a, n))
