# Bodigiti Theme

The **Bodigiti** Theme is for [Grav CMS](http://github.com/getgrav/grav).  This README.md file should be modified to describe the features, installation, configuration, and general usage of this theme.

## Description

custom theme by bodigiti

### Gulp/Node Modules - MAC OSX
Install required node_modules by running the following command using:

  sudo npm install --unsafe-perm=true --allow-root

  1) sudo (was not working, permissions where preventing creation of some directories)
  2) --unsafe-perm=true --allow-root (so this is used to override local permissions)

### Gulp/Node Modules - MAC OSX
How to customize the bodigiti theme will depend upon your client's needs (for example, whether or not they need snipcart)

However, when you copy the bodigiti theme, there are fundamental changes to make right away for your client...

1) Delete all contact form submissions that may be stored in 2 places:
  -- user > data > contact
  -- user > data > contact-form

2) Rename folders with config files in 3 places:
  -- user > rename the 0-yourdomain.com folder to your client's domain
  -- user > rename the 0-yournamedev.bodigiti.net folder to something appropriate for your client
  -- user > rename the 0-yournametest.bodigiti.net folder to something appropriate for your client
