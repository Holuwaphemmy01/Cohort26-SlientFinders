magicNumber = 42

userGuess = int(input("Guess the magic number: "))

if userGuess == magicNumber:
    print("You found the magic number!")
else:
    print("Keep looking!")