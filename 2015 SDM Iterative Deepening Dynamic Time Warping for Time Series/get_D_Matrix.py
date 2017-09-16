def get_D_Matrix(Q,C):
    'DTW的第一步骤，得到两个时间序列的D矩阵'
    D=[[0] * len(C)] * len(Q) #初始化为全0矩阵
    for i in range(len(Q)):
        for j in range(len(C)):
            D[i][j] = (Q[i] - C[j]) ** 2
    return D

    