import urllib.request
import csv
import json
import datetime
from bs4 import BeautifulSoup

ELECT_PROJECT = "https://electproject.github.io/Early-Vote-2020G/index.html"
REQUEST_HEADERS = {'User-Agent' : "bot"}

DESIRED_FIELDS = ['state', 'report_date', 'source',
    'mail_sent_req_2020', 'mail_accept_2020', 'mail_reject_2020',
    'total_early_2020', 'in_person_2020',
    'total_ballots_2016', 'total_early_2016']

def get_page(url):
    request = urllib.request.Request(url, headers=REQUEST_HEADERS)
    connect = urllib.request.urlopen(request)
    return connect.read()

def extract_data(response):
    extracted = []
    doc = BeautifulSoup(response, 'html.parser')
    print("doc",len(doc.get_text()))
    tab = doc.find(id="total-voted")
    chart_id = tab.find("div", {"class": "highchart"})['id']
    raw_data = tab.find("script").string
    print("data", len(raw_data))
    parsed = json.loads(raw_data)
    data = parsed['x']['hc_opts']['series'][0]['data']
        
    for row in data:
        extracted.append(row)
    return extracted


def write_data(data, writer):
    for row in data:
        out_row = {k: v for k, v in row.items() if k in DESIRED_FIELDS}
        writer.writerow(out_row)

date = datetime.date.today()
filename = f'electproject-{date.month}-{date.day}.csv'
with open(filename, 'w') as out_file:
    out_writer = csv.DictWriter(out_file, fieldnames=DESIRED_FIELDS)
    out_writer.writeheader()

    response = get_page(ELECT_PROJECT)
    data = extract_data(response)
    write_data(data, out_writer)
    print("done")
