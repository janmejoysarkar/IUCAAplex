#!/bin/bash
#Used to change page title.
#Run in /usr/share/jellyfin/web folder.

#https://github.com/BobHasNoSoul/jellyfin-mods/blob/main/10.9.x.md#change-the-title-of-jellyfin-in-the-browser-tab
grep -rl 'document\.title="Jellyfin"' . | while read -r file; do
    sed -i 's/document\.title="Jellyfin"/document\.title="IUCAAplex"/g' "$file"
done
grep -rl 'document.title=e||"Jellyfin"' . | while IFS= read -r file; do
    sed -i 's/document.title=e||"Jellyfin"/document.title=e||"IUCAAplex"/g' "$file"
done

#Change the title in the index.html file
#https://www.reddit.com/r/jellyfin/comments/yztvy4/change_web_page_title_jellyfin_for_custom_name_on/
sed -i 's/<title>Jellyfin/<title>IUCAAplex/' "/usr/share/jellyfin/web/index.html"
