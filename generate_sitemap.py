import json

f = open('./data/presentations.json', 'r', encoding='utf8') 
presentations = json.load(f)
f.close()

f = open('./data/papers.json', 'r', encoding='utf8') 
publications = json.load(f)
f.close()






def urlEntry(url):
    out = "<url>\n"
    out += "  <loc>" + url + "</loc>\n"
    #out += "  <lastmod>2018-06-04</lastmod>\n"
    out += "</url>\n"
    return out



f = open('./public/sitemap.xml', 'w') 
f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> \n')

f.write(urlEntry("https://davidburn1.github.io"))
f.write(urlEntry("https://davidburn1.github.io/presentations"))
f.write(urlEntry("https://davidburn1.github.io/publications"))
f.write(urlEntry("https://davidburn1.github.io/news"))

for entry in publications:
    f.write(urlEntry("https://davidburn1.github.io/publications/" + entry['key'])) 

for entry in presentations:
    f.write(urlEntry("https://davidburn1.github.io/presentations/" + entry['key'])) 

f.write('</urlset> \n')
f.close()






# <?xml version="1.0" encoding="UTF-8"?>
# <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
#   <url>
#     <loc>http://www.example.com/foo.html</loc>
#     <lastmod>2018-06-04</lastmod>
#   </url>
# </urlset>