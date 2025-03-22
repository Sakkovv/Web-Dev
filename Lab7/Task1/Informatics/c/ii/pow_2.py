n = int(input())
k = 0
while True:
    power = pow(2, k)
    if power > n:
        break
    print(power, end=" ")
    k += 1