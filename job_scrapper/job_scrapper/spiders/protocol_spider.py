import math
import re
import typing

import scrapy
from scrapy.http.response.html import HtmlResponse


class TheProtocolSpider(scrapy.Spider):
    name = 'protocol'
    start_urls = ['https://theprotocol.it/']
    _range_generator: typing.Optional[typing.Generator[int, None, None]] = None
    _regex_pattern = re.compile('\d+')

    POSTING_PER_PAGE = 25
    

    def parse(self, response: HtmlResponse):
        main_selector = response.xpath('//*[@id="__next"]')

        if not self._range_generator:
            self._set_range_generator(main_selector)
    
        a_tag_list = main_selector.xpath('.//div/div[2]/div/div/section[2]/div/div[4]/div/a')
        for a_tag in a_tag_list:
            yield {
                'company': a_tag.xpath('.//div/div[1]/div/text()').get(),
                'job_title': a_tag.xpath('.//div/div[1]/div[2]/div[1]/div/h2/text()').get(),
                'location': a_tag.xpath('.//div/div[2]/div/div/span/text()').get(),
                'tags': a_tag.xpath('.//div/div[3]/div/div/span/text()').getall()
            }

        try:
            next_url = f'{self.start_urls[0]}/?pageNumber={next(self._range_generator)}'
        except StopIteration as _:
            pass
        else:
            yield response.follow(next_url, callback=self.parse)


    def _set_range_generator(self, selector: scrapy.Selector) -> None:
        # Add exception handling
        total_postings_number_raw = selector.xpath('.//div/div[2]/div/div/section[2]/div/div[2]/button[1]/span').get()
        total_postings_number = int(self._regex_pattern.search(total_postings_number_raw).group())
        total_pages_number = math.ceil(total_postings_number / self.POSTING_PER_PAGE)

        self._range_generator = (page_number for page_number in range(2, total_pages_number + 1))
