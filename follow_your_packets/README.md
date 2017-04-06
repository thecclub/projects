Follow your packets
====================

OBJECTIVE
------------

Everyone of us open google.com for searching many times in a day. How many of us actually wonder what path our [packet](https://en.wikipedia.org/wiki/Network_packet) is taking while going to servers of google.com? It is time to find that out. :smiley:

PROCEDURE
-------------

1. Open [terminal](https://en.wikipedia.org/wiki/Traceroute) on your linux machine.
2. Type `[traceroute](https://en.wikipedia.org/wiki/Traceroute) google.com`. You should be seeing something like this.

![traceroute](https://cloud.githubusercontent.com/assets/4705438/24766145/dd14177c-1b17-11e7-921a-f5e77c160dea.gif)

3. This will show all [hop](https://en.wikipedia.org/wiki/Hop_(networking)) taken by a packet before reaching the destination i.e. google.com.

NOTE
--------------

1. It is possible that traceroute might not be installed on your machine. 
	* If you have ubuntu or ubuntu based os then type `sudo apt-get install traceroute` on your terminal.
	* If you have redhat based os then type `sudo yum install traceroute` on your terminal.
2. In the above output lines with `* * *` are the one where corresponding server does not reply to our traceroute request. More detailed explanation can be read [here](http://serverfault.com/questions/334029/what-does-mean-when-traceroute)

Bonus
---------------

Also give [mtr](https://en.wikipedia.org/wiki/MTR_(software)) a shot. 

Tags/Category
----------------

`Linux`|`Easy` 