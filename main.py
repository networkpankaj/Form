def factorial(n):
    if (i < 0):
        raise ValueError("Factorial is not defined")
    if(n == 0 or n == 1):
        return 1
    return n * factorial(n - 1)
print(factorial(5));