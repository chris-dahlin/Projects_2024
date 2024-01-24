# # Enter your height in meters e.g., 1.55
# height = float(input())
# # Enter your weight in kilograms e.g., 72
# weight = int(input())
# # 🚨 Don't change the code above 👆

# # Write your code below this line 👇
# # BMI = weight / height^2
# # Under 18.5 they are underweight
# # Over 18.5 but below 25 they have a normal weight
# # Equal to or over 25 but below 30 they are slightly overweight
# # Equal to or over 30 but below 35 they are obese
# # Equal to or over 35 they are clinically obese.
# # Your BMI is 37.50000, you are clinically obese.
# bmi = weight / height**2

# new_bmi = float(bmi)

# if new_bmi > 35:
#     print(f"Your BMI is {new_bmi}, you are clinically obese.")
# elif new_bmi >= 30:
#     print(f"Your BMI is {new_bmi}, you are obese.")
# elif new_bmi >= 25:
#     print(f"Your BMI is {new_bmi}, you are slightly overweight.")
# elif new_bmi < 25:
#     print(f"Your BMI is {new_bmi}, you have a normal weight.")
# elif new_bmi <= 18.5:
#     print(f"Your BMI is {new_bmi}, you are underweight.")

# leap year
# Write a program that works out whether if a person is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video does it more justice:

# year = int(input())

# if year % 4 == 0:
#     if year % 100 == 0:
#         if year % 400 == 0:
#             print("Leap year")
#         else:
#             print("Not leap year")
#     else:
#         print("Leap year")
# else:
#     print("Not leap year")

# print("Thank you for choosing Python Pizza Deliveries!")
# size = input()  # What size pizza do you want? S, M, or L
# add_pepperoni = input()  # Do you want pepperoni? Y or N
# extra_cheese = input()  # Do you want extra cheese? Y or N
# # 🚨 Don't change the code above 👆

# # Write your code below this line 👇
# total = 0

# if size == "S":
#     total += 15
# elif size == "M":
#     total += 20
# else:
#     total += 25

# if add_pepperoni == "Y":
#     if size == "S":
#         total += 2
#     else:
#         total += 3

# if extra_cheese == "Y":
#     total += 1

# print(f"Your final bill is: ${total}.")

# print("The Love Calculator is calculating your score...")
# name1 = input()  # What is your name?
# name2 = input()  # What is their name?
# # 🚨 Don't change the code above 👆
# # Write your code below this line 👇

# # For Love Scores less than 10 or greater than 90, the message should be:

# # "Your score is *x*, you go together like coke and mentos."
# # For Love Scores between 40 and 50, the message should be:

# # "Your score is *y*, you are alright together."
# # Otherwise, the message will just be their score. e.g.:

# # "Your score is *z*."
# names_added = name1 + name2

# names_lowered = names_added.lower()

# t = names_lowered.count("t")
# r = names_lowered.count("r")
# u = names_lowered.count("u")
# e = names_lowered.count("e")

# first_digit = t + r + u + e

# l = names_lowered.count("l")
# o = names_lowered.count("o")
# v = names_lowered.count("v")
# e = names_lowered.count("e")

# second_digit = l + o + v + e

# total = int(str(first_digit) + str(second_digit))


# if (total < 10) or (total > 90):
#     print(f"Your score is {total}, you go together like coke and mentos.")
# elif (total >= 40) and (total <= 50):
#     print(f"Your score is {total}, you are alright together.")
# else:
#     print(f"Your score is {total}.")

# Test Commit
