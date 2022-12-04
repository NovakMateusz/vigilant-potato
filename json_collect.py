from os.path import exists

import pandas as pd
import json
import os
from pandas.io.common import file_exists

# to dataframe
nfile = pd.read_json('job_scrapper/output.json')
if exists('results/results.json'):
    ofile = pd.read_json('results/results.json')
    temp_dframe = pd.DataFrame(ofile)
    dframe = temp_dframe.append(nfile, ignore_index=True)
    print(dframe)
else:
    dframe = pd.DataFrame(nfile)
    print(dframe)

# duplicates


# dataframe to json
with open('results/results.json', 'w', encoding='utf-8') as r:
    dframe.to_json(r, orient="records", force_ascii=False)

# erase output.json
# os.remove ('job_scrapper/output.json')