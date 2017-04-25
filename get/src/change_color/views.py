from django.shortcuts import render
from django.http import HttpResponse

import urllib.request
import json
# Create your views here.

def arg_handler(request):
    color = request.GET.get('color', 'red')
    text  = request.GET.get('text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit \
    	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...')
    search   = request.GET.get('gif', '')
    if search == '':
    	gif = 'https://media.giphy.com/media/CTX0ivSQbI78A/giphy.gif'
    else:
    	gif = giphy_api(search)

    return render(request, 'index.html', {'color': color, 'text': text, 'gif': gif})


def giphy_api(search):
    response = urllib.request.urlopen("http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=1").read().decode('utf-8')
    json_obj = json.loads(response)
    if len(json_obj['data']) != 0:
        gif = json_obj['data'][0]['images']['original']['url']
    else:
        gif = 'https://media.giphy.com/media/CTX0ivSQbI78A/giphy.gif'
    return gif