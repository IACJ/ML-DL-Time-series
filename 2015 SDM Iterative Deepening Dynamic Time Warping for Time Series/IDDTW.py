

def One_NearestNeighbor(Q, C):
    'Q为时间序列，C为时间序列列表，求最近的一条时间序列'
    
    # part 1: 将第一个候选序列设为best_so_far
    best_so_far = DTW(Q, C[1])
    best_so_far_index = 1
    
    # part 2: 寻找更优解
    for i in range(1,len(C)):
        if (best_so_far < DTW(Q,C[i])):
            best_so_far =  DTW(Q,C[i])
            best_so_far_index = i
    
    # part 3: 返回结果        
    return best_so_far, best_so_far_index

