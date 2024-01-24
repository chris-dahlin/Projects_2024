# print("Hello"[0])
# print("Hello"[4])

# # Add 2 strings
# print("123" + "345")
# # Add 2 numbers/ints
# print(123 + 345)

# # Floats
# 3.14159

# # Boolean
# True
# False


# num_char = len(input("What is your name?"))
# # print(type(num_char))
# print("Your name has " + str(num_char) + " characters.")


# num_char = len(input("What is your name?"))
# new_num_char = str(num_char)
# print("Your name has " + new_num_char + " characters.")

# a = "123"
# print(type(a))


# two_digit_number = input()
# # 🚨 Don't change the code above 👆
# ####################################
# # Write your code below this line 👇
# number_1 = int(two_digit_number[0])
# number_2 = int(two_digit_number[1])

# print(number_1 + number_2)


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

# two_digit_number = input()

# first_digit = int(two_digit_number[0])
# second_digit = int(two_digit_number[1])

# # Add the two integers together
# two_digit_number = first_digit + second_digit

# print(two_digit_number)


# PEMDAS
# (P)arentheses
# (E)xponents
# (M)ultiplication
# (D)ivision
# (A)ddition
# (S)ubtraction

# print(int(3 * 3 + 3 / 3 - 3))

# print(int(3 * (3 + 3) / 3 - 3))


# print(round(8 / 3, 2))

# print(8 // 3)

# result = 4/2
# result /= 2

# print(result)

# score = 0
# height = 1.8
# isWinning = True
# # f-string
# print(
#     f"Your score is {score}, your height is {height}, you are winning is {isWinning}")


# If the bill was $150.00, split between 5 people, with 12% tip.

# Each person should pay (150.00 / 5) * 1.12 = 33.6
# Format the result to 2 decimal places = 33.60

# Tip: There are 2 ways to round a number. You might have to do some Googling to solve this.💪

# Write your code below this line 👇

amount = float(input("What is the total bill? $"))
tip_amount = int(
    input("What percentage tip would you like to give? 10, 12 or 15? "))
people = int(input("How many people to split the bill? "))
total_bill = amount + (amount * tip_amount / 100)
bill_per_person = total_bill / people
print(f"Each person should pay: ${bill_per_person:.2f}")
