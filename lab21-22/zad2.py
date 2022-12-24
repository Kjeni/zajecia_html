#rownanie kwadratowe
import math
#1
a = int(input(("Podaj wspolczynnik rowniania a: ")))
b = int(input(("Podaj wspolczynnik rowniania b: ")))
c = int(input(("Podaj wspolczynnik rowniania c: ")))
if a == b == c == 0:
   print("a, b, c = 0 - brak rownania")
else:
   print ("Sprawdzam parametr a")
   if a > 0 or a < 0:
       print ("> 0\nRownanie typu ax^2+bx+c")
       delta = (b**2)-(4*a*c)
       print ("Delta = %d" % (delta))
       if delta == 0:
           x0=((b*b)/(4*a))
           print ("Delta=0, obliczam x=%d" % (x0))
       elif delta > 0:
           from math import sqrt
           x1=((b-b)-(sqrt(delta)))/(2*a)
           x2=((b+b)+(sqrt(delta)))/(2*a)
           print ("Obliczam x1,x2: x1=%d ; x2=%d" % (x1, x2))
       elif delta < 0:
           print ("Delta<0 brak piewriastkow")
   elif a == 0:
       print (" = 0 \n Rownanie typu bx+c")
       x=(-c/b)
       print("Wynik x=-%d/%d" % (c, b))
print("Koniec")
#2
tablica=[8,1,1,1,5,8]
x= tablica.count(8)
print(tablica)
print("Liczba 8 wystepuje:", x, "raz/y")
#3
import re
def removeZeros(ip):
    new_ip = re.sub(r'\b0+(\d)', r'\1', ip)
    return new_ip
     
     
ip ="100.020.003.040"
print(removeZeros(ip))
 
 
ip ="001.200.001.004"
print(removeZeros(ip))