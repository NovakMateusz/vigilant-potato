# [ Project name placeholder ]

## Contributors:
- [3Rii](https://github.com/3Rii)
- [AceSpadeAble](https://github.com/AceSpadeAble)
- [NovakMateusz](https://github.com/NovakMateusz)

## Python 3.11
### Create and activate virtual environment

```console
% python3.11 -m venv venv
% source venv/bin/activate (Linux)
> venv\Scripts\activate.bat (Windows TBC)
```

### Install dependencies (while having active virtual environment)
```console
% pip install -r requirements/core.txt
```

### Starting scrapy shell
```console
% cd job_scrapper
% scrapy shell
```

### Exiting Scrapy shell (while in Scrapy shell)
```console
>>> exit()
```

### Run custom Spider and saving results to the JSON file
```console
% cd job_scrapper
% scrapy crawl protocol -O output.json
```
