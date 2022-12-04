from os.path import exists
import pandas as pd
import os

# json to dataframe
nfile = pd.read_json('job_scrapper/output.json')
if exists('results/results.json'):
    ofile = pd.read_json('results/results.json')
    dframe = pd.DataFrame(ofile)
    dframe = dframe.append(nfile, ignore_index=True)
    print(dframe)

    # drop duplicates
    dframe = dframe.drop_duplicates(subset=['company', 'job_title', 'location'], keep='last', ignore_index=True)
    print(dframe)
else:
    dframe = pd.DataFrame(nfile)
    print(dframe)

# dataframe to json
dframe.to_json('results/results.json', force_ascii=False, orient='records')

# looks
with open('results/results.json', 'r', encoding='utf-8') as r:
    data = r.read()
    data = data.replace(']},', ']},\n')
    data = data.replace(']}]', ']}\n]')
    data = data.replace('[{"comp', '[\n{"comp')
    data = data.replace('\\/', '/')
with open('results/results.json', 'w', encoding='utf-8') as r:
    r.write(data)

# erase output.json
os.remove('job_scrapper/output.json')
