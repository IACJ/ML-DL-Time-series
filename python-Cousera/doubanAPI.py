import requests
r = requests.get('https://api.douban.com/v2/movie/subject/1292224') 
# 1292720, 1292052, 1295644, 1291546
data = r.json()
print(data['title'], data['rating']['average'])