posX = int(input())
posY = int(input())

if posX > 0 and posY > 0:
    print(1)
elif posX < 0 and posY > 0:
    print(2)
elif posX < 0 and posY < 0:
    print(3)
elif posX > 0 and posY < 0:
    print(4)