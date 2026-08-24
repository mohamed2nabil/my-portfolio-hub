with open('public/templates/data-analysis/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix h2
text = text.replace('Ai Automation\n<p', 'Ai Automation</h2>\n<p')

# Fix about section unclosed tags
# Right before <!-- Skills Section -->
text = text.replace('<!-- Skills Section -->', '        </div>\n    </section>\n    <!-- Skills Section -->')

with open('public/templates/data-analysis/index_fixed.html', 'w', encoding='utf-8') as f:
    f.write(text)
