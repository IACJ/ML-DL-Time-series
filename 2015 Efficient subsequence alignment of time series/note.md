# Efficient Subsequence Alignment of Time Series (2015)


## 1 - Introduction


* 3 Stages of Generalizing the workflow of a typical time series data mining application（3个阶段）
    1. Find a Proper Representation
    2. Determine a Notion of Similarity
    3. Implementation of Efficient and Robust Algorithms
                                    
* Toy Dataset（数据集）
    1. Cylinder-Bell-Funnel
        - infinite number of samples
        - variable amplitudes
        - time-dependent noise
        - variable support 
        - approximate global alignment
    2. Gun-Point
        - real-world data
        - slowly-varying
        - approximate global alignment 
        

* Definition（定义）
    1. M-valued time series

* Figure（图示）
    1. 4 examples for the occurrence of time series in daily life. 
    2. Exemplary workflow for the computation of three pseudo time series from two-dimensional image data.
    3. An example of 3 time series for each class of the CBF datasets
    4. 6 sample images of Chotirat Ann Ratanamahatana taken from the motion-capturing of hand positions while pulling a gun.
    5. An example of 6 instances for each of the 2 classes of the Gun-Point dataset as provided by the UCR Repository 

* Organization of this Thesis

## 2 - Time Series Data Mining

1. Metrics and Dissimilarities
    1. The Lp-NormFamily
    2. Pearson’s Correlation Coefficient
    3. Dynamic Time Warping
    4. Sakoe-Chiba-Constrained DTW
    5. Other SimilarityMeasures
2. Representations of Time Series
    1. Unitary Bases of Cn
    2. Principal Component Analysis
    3. Discrete Wavelet Representations
    4. Discrete Fourier Transform
    5. Indexing with Spatial AccessMethods


* Definition（定义）
    2. metric space
        * coincidence
        * symmetry
        * triangle inequality
    3. normed vector space
        * definiteness
        * homogeneity
        * triangle inequality
    4. z-normalization
        * 0 mean and a standard deviation of 1
    5. warping path（DTW）
        * monotony
        * continuity
        * bounding
    6. DTW
        * DTW is not a metric.

* Proposition 
    1. non-negativity
    2. reversed triangle inequality
    3. z-normalized ED
        * z-normalized ED is proportional to the square root of the Pearson distance.
    4. isometries of complex finite vector spaces *
    5. index set constrained lower bound *
* Figure 
    1. Clustering of CBF instances using L1 and L2 -norm
    2. Clustering of CBF instances using z-normalized L2 and plain L2 -norm
    3. An example for two voice records of the word ‘exact’ in American (blue) and British (red) English pronunciation
    4. The same example for two voice records of the word ‘exact’ in American(blue) and British (red) English pronunciation（an optimal alignment in terms of least square error）
    5. An example for the DAG representation of the optimization problem for the DTWdistancemeasure between two time series of length four
    6. comparison between DTWand ED for two Cylinder instances
    7. Clustering of CBF instances using z-normalized DTW and ED
    8. An example for the Sakoe-Chiba band constraint (left) and the Itakura parallelogram constraint (right)
    9. Pseudo-code for the computation of the constrained DTW measure with Sakoe-Chiba restriction
    10. PCA example
    11. low-pass / high-pass
    12. Daubechies-4 coefficients / captured normalized variance

* 不懂
    1. 酉变换（2.2.1）

## 3 - Parallelization of the UCR-Suite

1. The UCR-Suite
    1. Subsequence Alignment in Streams
    2. windowed z-Normalization
    3. Warping Envelops
    4. Lemire’s Efficient StreamedMin-Max-Algorithm
    5. Assembly of the Building Blocks

## 4 - Towards Elastic Subsequence Alignment with Linear Cost

## 5 - Lie-Group-Valued Time Series

## 6 -Conclusion & Future Research 