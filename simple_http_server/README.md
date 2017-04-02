imple HTTP Server
===============

### Objective

So you want to share movies with your friends and do not have a usb drive. You can use python to share these files wirelessly.

Procedure
------------

* Open up your terminal.
* Move to directory which contains the file to be shared, using `cd` command.
* Type `ifconfig` on the terminal, this will give you a list network  interfaces. 
* Look for something like `wlan0` or `en0` if you are using a wireless network or `eth0` if you are on a wired one.
* There you will find your ip address.
* Now run `python -m SimpleHTTPServer`.
* This will start the server, you will see something like `Serving HTTP on 0.0.0.0 port 8000 ...`.
* Open up the browser, in whichever device you want to get that file (make sure this device is in the same network).
* You'll see a list of files in that folder, you can now download these files.

Notes
--------
* If you are on windows and don't have python, shift to linux. You can use a Virtual Machine.

### Tags / Category
`python` | `networking`

### (2)

