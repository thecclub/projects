## OBJECTIVE
Have you ever heard about the [`HACKING`](https://en.wikipedia.org/wiki/Hacking) might be but 70% so called **JANTA** doesn't know how it's done or how to fix it. In this project we are gonna make sure he learns basics of commands like **`ping`, `nslookup` & `ssh`**. More specifically learning how to fix if he got hacked.


## Further References

  * **ping** is a computer network administration software utility used to test the reachability of a host on an Internet Protocol (IP) network. It measures the round-trip time for messages sent from the originating host to a destination computer that are echoed back to the source.
[`wiki`](https://en.wikipedia.org/wiki/Ping_(networking_utility))

```
ping google.com

PING google.com (172.217.26.174): 56 data bytes
64 bytes from 172.217.26.174: icmp_seq=0 ttl=54 time=32.116 ms
64 bytes from 172.217.26.174: icmp_seq=1 ttl=54 time=33.722 ms
64 bytes from 172.217.26.174: icmp_seq=2 ttl=54 time=32.825 ms
64 bytes from 172.217.26.174: icmp_seq=3 ttl=54 time=36.055 ms
64 bytes from 172.217.26.174: icmp_seq=4 ttl=54 time=33.884 ms
^C
--- google.com ping statistics ---
5 packets transmitted, 5 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 32.116/33.720/36.055/1.331 ms

```
  * **nslookup** - is a network administration command-line tool available for many computer operating systems for querying the Domain Name System (DNS) to obtain domain name or IP address mapping or for any other specific DNS record.
For further readings go [`here`](http://www.thegeekstuff.com/2012/07/nslookup-examples/?utm_source=tuicool)

```
nslookup 8.8.8.8
Server:		192.168.100.1
Address:	192.168.100.1#53

Non-authoritative answer:
8.8.8.8.in-addr.arpa	name = google-public-dns-a.google.com.

Authoritative answers can be found from:
```
  * **ssh** - stands for *Secure Shell* is a cryptographic network protocol for operating network services securely over an unsecured network. The best known example application is for remote login to computer systems by users. For further reading go [`here`](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-to-connect-to-a-remote-server-in-ubuntu)
```
ssh remote_username@remote_host
```
