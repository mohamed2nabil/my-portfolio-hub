with open('src/app/data-analysis/page.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace scand.jpeg with my photo.jpeg
text = text.replace('scand.jpeg', 'my%20photo.jpeg')

with open('src/app/data-analysis/page.jsx', 'w', encoding='utf-8') as f:
    f.write(text)
