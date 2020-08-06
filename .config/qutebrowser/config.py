config.load_autoconfig()

# Set sites
c.url.start_pages = 'https://searx.xyz'
c.url.default_page = 'https://searx.xyz'

# Other stuff for looks:
c.statusbar.show = 'always'
c.tabs.show = 'multiple'
c.colors.webpage.prefers_color_scheme_dark = True

# Other tweaks
c.content.javascript.can_access_clipboard = True

# Set Search Engines
c.url.searchengines = {
   "DEFAULT":'https://duckduckgo.com/?q={}',                                                                                                                                                                 
   "c": 'https://boards.4chan.org/{}/',                                                                                                                                                                      
   "r": 'https://www.reddit.com/r/{}',                                                                                                                                                                       
   "w": 'https://en.wikipedia.org/wiki/={}',                                                                                                                                                                 
} 


# "Plugins"

try:
    from qutebrowser.api import message

    # Redirect sites
    config.source('pyconfig/redirectors.py')

    # Dracula Theme
    config.source('pyconfig/dracula-theme.py')

    # Keybinds
    config.source('pyconfig/keybinds.py')

except ImportError:
    pass


# JBlock (Disabled)
# import sys, os
# sys.path.append(os.path.join(sys.path[0], 'jblock'))
# config.source("jblock/jblock/integrations/qutebrowser.py")

# Settings for jblock
# c.content.host_blocking.enabled: False
# c.content.host_blocking.lists: '["https://raw.githubusercontent.com/eEIi0A5L/adblock_filter/master/youtube_wo_tonikaku_filter.txt","https://raw.githubusercontent.com/kbinani/adblock-youtube-ads/master/signed.txt","https://raw.githubusercontent.com/llacb47/miscfilters/master/antipaywall.txt","https://raw.githubusercontent.com/eEIi0A5L/adblock_filter/master/kotori_filter.txt","https://raw.githubusercontent.com/r4vi/block-the-eu-cookie-shit-list/master/filterlist.txt","https://raw.githubusercontent.com/DandelionSprout/adfilt/master/BrowseWebsitesWithoutLoggingIn.txt","https://easylist.to/easylist/easylist.txt","https://easylist-downloads.adblockplus.org/easylist-cookie.txt","https://easylist.to/easylist/easyprivacy.txt"]'
