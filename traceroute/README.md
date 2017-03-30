## OBJECTIVE

Everyone opens google.com. Do you ever wonder what path your request is taking while reaching google.com. Lets find it out.

## PROCEDURE

1. Open [terminal](https://en.wikipedia.org/wiki/Traceroute) on your linux machine.
2. Type _traceroute google.com_
3. This will show all [hop](https://en.wikipedia.org/wiki/Hop_(networking)) taken by a [packet](https://en.wikipedia.org/wiki/Network_packet) before reaching the destination i.e. google.com

## NOTE

It is possible that traceroute might not be installed on your machine. 
* If you have ubuntu or ubuntu based os then type _sudo apt-get install traceroute_ on your terminal.
* If you have redhat based os then type _sudo yum install traceroute_ on your terminal.

If you want to something extra also give [mtr](https://en.wikipedia.org/wiki/MTR_(software)) a shot. 