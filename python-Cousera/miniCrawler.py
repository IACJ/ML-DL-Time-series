# -*- coding: utf-8 -*-
"""
miniCrawler:

在豆瓣任意找一本图书，抓取它某一页的短评并进行页面解析将短评文字抽取后输出，再对其中的评分进行抽取计算其总分。

【bookid换成自己选择的书名id】
"""
import requests
from bs4 import BeautifulSoup
import re

sum = 0
r = requests.get('https://book.douban.com/subject/bookid/comments/')
soup = BeautifulSoup(r.text, 'lxml')
pattern = soup.find_all('p', 'comment-content')
for item in pattern:
    print(item.string)
pattern_s = re.compile('<span class="user-stars allstar(.*?) rating"')
p = re.findall(pattern_s, r.text)
for star in p:
    sum += int(star)
print(sum)