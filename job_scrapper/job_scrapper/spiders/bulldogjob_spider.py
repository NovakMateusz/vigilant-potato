import typing

import scrapy
from scrapy.http.response.html import HtmlResponse


class BulldogJobSpider(scrapy.Spider):
    name = 'bulldog'
    start_urls = ['https://bulldogjob.pl/companies/jobs']
    _range_generator: typing.Optional[typing.Generator[int, None, None]] = None

    def parse(self, response: HtmlResponse):
        if not self._range_generator:
            self._set_range_generator(response)

        job_postings_list = response.xpath('//*[@id="__next"]/div[4]/div/div')

        for job_posting in job_postings_list[1:]:
            yield {
                'company': job_posting.xpath('.//div[2]/div/div/p/text()').get(),
                'job_title': job_posting.xpath('.//div[4]/h3/a/text()').get(),
                'location': job_posting.xpath('//div[4]/div/div[1]/div/div/text()').get()
            }

        try:
            next_url = f'{self.start_urls[0]}/s/page,{next(self._range_generator)}'
        except StopIteration as _:
            pass
        else:
            yield response.follow(next_url, callback=self.parse)


    def _set_range_generator(self, selector: scrapy.Selector) -> None:
        # Add exception handling
        last_page_number = int(selector.xpath('//*[@id="__next"]/div[4]/ul/li[8]/text()').get())
        self._range_generator = (page_number for page_number in range(2, last_page_number + 1))
