#1
a = 2
b = 4
c= a+b
d = a**b
print(c,d)
#2
a= int(input("Podaj pierwszą liczbę: "))
b= int(input("Podaj drugą liczbę: "))
c=a*b
print("Iloczyn: ",c)
#3
num = int(input("Wprowadź liczbę: "))
if (num % 2) == 0:
   print("{0} jest parzysta".format(num))
else:
   print("{0} jest nieparzysta".format(num))
#4
import datetime

today = datetime.date.today()
print('Today:', today)
print('Rok:',today.year )
print("Miesiac:", today.strftime("%B"))
print("Nr tygodnia:", today.strftime("%U"))
print("Dzien tygodnia:", today.strftime("%w"))
print("Dzien w roku:", today.strftime("%j"))
print("Dzien miesiaca:", today.strftime("%d"))
print("Dzien tygodnia:", today.strftime("%A"))


