def descending_order(num):
	sorted_digits = sorted(str(num), reverse=True)
	return int("".join(sorted_digits))

print(descending_order(42145))      
print(descending_order(145263))     
print(descending_order(123456789))  
