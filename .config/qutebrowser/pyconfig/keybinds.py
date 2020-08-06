## Qute-Bitwarden (already installed)
## https://github.com/qutebrowser/qutebrowser/blob/master/misc/userscripts/qute-bitwarden

config.bind(',b', 'spawn --userscript qute-bitwarden -t') # Insert Username, password & copy TOTP
config.bind(',Bu', 'spawn --userscript qute-bitwarden -e') # Insert Username
config.bind(',Bp', 'spawn --userscript qute-bitwarden -w') # Insert Password
config.bind(',Bt', 'spawn --userscript qute-bitwarden -T') # Insert TOTP

## Open in MPV
config.bind(',m', 'spawn mpv {url}') # MPV Current URL 
config.bind(',M', 'hint links spawn mpv {hint-url}') # MPV Hint

## Code select (not installed with qb)
## https://github.com.cnpmjs.org/LaurenceWarne/qute-code-hint
config.bind(',c', 'hint code userscript code_select.py') # Hint code to clipboard
## Needed for this to work
c.hints.selectors["code"] = [
    # Selects all code tags whose direct parent is not a pre tag
    ":not(pre) > code",
    "pre"
]

## Readability-fork 
## Just an edit of the readability script that adds the name of the article in the h1
config.bind(',r', 'spawn --userscript readability-fork.js') # Current page to readability

## Open in Wayback Machine
config.bind('wa', 'open https://web.archive.org/web/{url}') # Current page

# For copying code hints
c.hints.selectors["code"] = [
    # Selects all code tags whose direct parent is not a pre tag
    ":not(pre) > code",
    "pre"
]
