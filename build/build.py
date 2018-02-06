import re
import json
import urllib.request

# Create a request with a valid User-Agent
req = urllib.request.Request(
    'https://tailwindcss.com/docs/',
    data=None,
    headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/35.0.1916.47 Safari/537.36'
    }
)

# Pull the html from the main docs page and find all /docs links
docs = urllib.request.urlopen(req)
links = re.findall('href="(.+?tailwindcss\.com/docs/.*?)"', docs.read().decode('utf-8'))
found = []
pages = []

# Setup our data in a "pages" variable
for url in sorted(set(links)):

    url = url.replace('https://tailwindcss.com', '')
    topic = url.split('/')[2].title().replace('-', ' ').split('#')[0]
    slug = url.split('/')[2].split('#')[0]
    url = 'https://tailwindcss.com/docs/' + slug

    if (topic not in found):
        found.append(topic)
        pages.append({
            'topic': topic,
            'slug': slug,
            'url': url
        })

# Setup JSON data for package.json
with open('../package.json', 'r') as f:
    data = json.load(f)
    data['activationCommands']['atom-workspace'] = []

    for page in pages:
        data['activationCommands']['atom-workspace'].append(
            "tailwind-docs:{}".format(page['slug'])
        )


# Format each link as a sublime command, regenerate the command file
with open('../package.json', 'w') as f:
    json.dump(data, f, indent=4)

# Build tailwind-docs.js file
with open('../lib/tailwind-docs.js', 'w+') as f:
    f.write("'use babel';\n\n")
    f.write("const {shell} = require('electron');\n")
    f.write("import { CompositeDisposable } from 'atom';\n\n")
    f.write("export default {\n\n")
    f.write("\tsubscriptions: null,\n\n")
    f.write("\tactivate(state) {\n")
    f.write("\t\tthis.subscriptions = new CompositeDisposable();\n\n")

    for page in pages:
        f.write("\t\tthis.subscriptions.add(atom.commands.add('atom-workspace', { \n"
            + "\t\t\t'tailwind-docs:{}': () => this.openUrl('{}')\n".format(page['slug'], page['url'])
            + "\t\t}));\n")

    f.write("\t }, \n\n")
    f.write("\topenUrl(url) { shell.openExternal(url); }\n};\n")


# Let the user know we're finished
print('Tailwind Docs - Package files have been built.')
