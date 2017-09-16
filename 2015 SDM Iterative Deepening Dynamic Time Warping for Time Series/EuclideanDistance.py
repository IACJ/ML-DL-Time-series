# -*- coding: utf-8 -*-

import math

a = list(range(0,10))
b = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8]


def EuclideanDistance(Q, C):
    '假设 Q 与 C 是两个长度相等的一维时间序列,计算 Q 与 C 之间的欧氏距离'
    distance = 0
    for i in range(len(Q)):
        distance += (Q[i]-C[i]) ** 2
    distance = math.sqrt(distance)
    return distance


# print(a)
# print(b)
# print(len(a))
# print(len(b))
print(EuclideanDistance(a,b))