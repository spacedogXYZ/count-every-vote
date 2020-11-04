import urllib.request
import csv
import json
import datetime
from bs4 import BeautifulSoup

ENIP_FILE = "https://voteamerica-enip-data.s3.amazonaws.com/prod/national/latest.json"
DFP_FILE = "https://dfp-election-integrity-blobs.s3.us-east-2.amazonaws.com/v0/US.json"

REQUEST_HEADERS = {'User-Agent' : "bot"}
ALL_STATES = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",]
DESIRED_FIELDS = ['state', 'report_date', 'total_votes_p', 'total_votes_s', 'eday_p', 'eday_s']

RACES = ['P', 'S']
PARTIES = ['dem', 'gop', 'oth']

def get_json(url):
    request = urllib.request.Request(url, headers=REQUEST_HEADERS)
    connect = urllib.request.urlopen(request)
    data = json.loads(connect.read())
    return data

def extract_early(data):
    extracted = {}
    for code in ALL_STATES:
        early_votes = data['state_summaries'][code].get('advance_turnout', {}).get('totalAdvVotesCast', 0)
        extracted[code] = int(early_votes)
    return extracted

def extract_data(data, early, last_updated):
    extracted = []
    report_date = last_updated.split(' ')[0]

    for code in ALL_STATES:
        state = data['stateSummaries'][code]
        row = {
            'state': code,
            'report_date': report_date
        }
        before_eday = early[code]

        for r in RACES:
            if state.get(r):
                val = state.get(r,{})
                if not val:
                    continue
                total = 0
                for p in PARTIES:
                    p_count = val.get(p,{})
                    if p_count:
                        total += p_count.get('popVote', 0)
                row[f'total_votes_{r.lower()}'] = total

        extracted.append(row)
    return extracted

def write_data(data, writer):
    for row in data:
        out_row = {k: v for k, v in row.items() if k in DESIRED_FIELDS}
        writer.writerow(out_row)

now = datetime.datetime.now()
filename = f'enip-{now.month}-{now.day}-{now.hour}-{now.minute}.csv'
with open(filename, 'w') as out_file:
    out_writer = csv.DictWriter(out_file, fieldnames=DESIRED_FIELDS)
    out_writer.writeheader()

    enip = get_json(ENIP_FILE)
    dfp = get_json(DFP_FILE)
    early = extract_early(dfp)

    latest = get_json(enip['cdnUrl'])
    data = extract_data(latest, early, enip['lastUpdated'])
    write_data(data, out_writer)

    print("done")
