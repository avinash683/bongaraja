from pathlib import Path
import re, subprocess
root=Path(__file__).parent/'dist'
html=(root/'index.html').read_text(); js=(root/'app.js').read_text()
for ref in re.findall(r'(?:src|href)="([^"#]+)"',html):
 if not ref.startswith(('http','mailto:')): assert (root/ref).is_file(),ref
for name in re.findall(r"file:'([^']+)'",js): assert (root/'assets'/f'{name}.webp').is_file(),name
assert 'tridiveshmishra@gmail.com' in js and '918310371519' in js
subprocess.run(['node','--check',str(root/'app.js')],check=True)
print('PASS: JavaScript syntax, artwork assets, local references, enquiry destinations')
