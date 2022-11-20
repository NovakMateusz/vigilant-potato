import scrapy
from scrapy.http.response.html import HtmlResponse


class TheProtocolSpider(scrapy.Spider):
    name = 'protocol'
    start_urls = ['https://theprotocol.it/']

    def parse(self, response: HtmlResponse):

        selectors = response.xpath('//*[@id="__next"]').xpath('//div/div[2]/div/div/section[2]/div/div[4]/div/a')
        for a_selector in selectors:
            yield {
                'job_title': a_selector.xpath('.//div/div[1]/div[2]/div[1]/div/h2/text()').get(),
                'location': a_selector.xpath('.//div/div[2]/div/div/span/text()').get()
            }


