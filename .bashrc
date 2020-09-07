source /etc/profile
export EDITOR="emacs"
export NODE_PATH=$NODE_PATH:$(npm root -g)
export PATH=$PATH:/home/jo/.local/bin

# dont use this anymore
#source .bw_session


alias vim="nvim"
alias vi="nvim"
alias brc="source ~/.bashrc"

alias yt="youtube-dl"
alias ytflac="youtube-dl --add-metadata -x --audio-format flac"
alias yt-thumb="youtube-dl --write-thumbnail --skip-download"
alias yt-desc="youtube-dl --get-description --user-agent \"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)\" --skip-download"


alias project64='docker run -it --rm \
	-v $XDG_RUNTIME_DIR/pulse/native:/run/user/1000/pulse/native -e PULSE_SERVER=unix:/run/user/1000/pulse/native \
	-v /tmp/.X11-unix:/tmp/.X11-unix -e DISPLAY \
	-v ~/Games/N64:/home/wine/.wine/drive_c/N64 \
	-v ~/.config/project64/config:/home/wine/.wine/drive_c/Project64/Config \
	-v ~/.config/project64/save:/home/wine/.wine/drive_c/Project64/Save \
	jbergknoff/project64'





# Clean up
export XDG_CONFIG_HOME="$HOME/.config"
export XDG_DATA_HOME="$HOME/.local/share"
export XDG_CACHE_HOME="$HOME/.cache"
#export XAUTHORITY="$XDG_RUNTIME_DIR/Xauthority" # This line will break some DMs.
export NOTMUCH_CONFIG="${XDG_CONFIG_HOME:-$HOME/.config}/notmuch-config"
export GTK2_RC_FILES="${XDG_CONFIG_HOME:-$HOME/.config}/gtk-2.0/gtkrc-2.0"
export LESSHISTFILE="-"
export WGETRC="${XDG_CONFIG_HOME:-$HOME/.config}/wget/wgetrc"
export INPUTRC="${XDG_CONFIG_HOME:-$HOME/.config}/inputrc"
export ZDOTDIR="${XDG_CONFIG_HOME:-$HOME/.config}/zsh"
export WINEPREFIX="${XDG_DATA_HOME:-$HOME/.local/share}/wineprefixes/default"
export KODI_DATA="${XDG_DATA_HOME:-$HOME/.local/share}/kodi"
export PASSWORD_STORE_DIR="${XDG_DATA_HOME:-$HOME/.local/share}/password-store"
export TMUX_TMPDIR="$XDG_RUNTIME_DIR"
export ANDROID_SDK_HOME="${XDG_CONFIG_HOME:-$HOME/.config}/android"
export CARGO_HOME="${XDG_DATA_HOME:-$HOME/.local/share}/cargo"
export GOPATH="${XDG_DATA_HOME:-$HOME/.local/share}/go"
export ANSIBLE_CONFIG="${XDG_CONFIG_HOME:-$HOME/.config}/ansible/ansible.cfg"
export UNISON="${XDG_DATA_HOME:-$HOME/.local/share}/unison"
export HISTFILE="${XDG_DATA_HOME:-$HOME/.local/share}/history"
export GNUPGHOME="${XDG_DATA_HOME:-$HOME/.local/share}/gnupg"
export KDEHOME="${XDG_CONFIG_HOME:-$HOME/.config}/KDEHOME"


alias dotconf='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'

# tabtab source for electron-forge package
# uninstall by removing these lines or running `tabtab uninstall electron-forge`
[ -f /home/jo/.cache/yay/electron-forge/src/electron-forge-5.2.4/node_modules/tabtab/.completions/electron-forge.bash ] && . /home/jo/.cache/yay/electron-forge/src/electron-forge-5.2.4/node_modules/tabtab/.completions/electron-forge.bash
