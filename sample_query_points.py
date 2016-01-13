import json
import pandas as pd

x = pd.read_csv('/Users/BenJohnson/projects/building/csv-data/xfyi-uyt5.csv', nrows = 1000)

with open('example-queries.json', 'w') as f:
    json.dump(zip(x['longitude_wgs84'], x['latitude_wgs84']), f)