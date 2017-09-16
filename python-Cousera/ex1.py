# -*- coding: utf-8 -*-

maxInt = 1000005

# 筛法找素数
isSushu = [1 for i in range(0,maxInt)]
for i in range(2, maxInt):
    if isSushu[i]:
        k = i
        while k < maxInt:
            k += i
            if k < maxInt:
                isSushu[k] = 0

# 寻找默尼森数
for i in range(2, maxInt):
    if (isSushu[i]) and ((2**i-1) < maxInt) and isSushu[2**i-1]:
        print (2**i-1)
        