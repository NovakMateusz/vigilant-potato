import typing

import scrapy
from scrapy.http.response.html import HtmlResponse


class TheProtocolSpider(scrapy.Spider):
    name = 'protocol'
    start_urls = ['https://theprotocol.it/']

    def parse(self, response: HtmlResponse):
        main_selector = response.xpath('//*[@id="__next"]')
        a_tag_list = main_selector.xpath('.//div/div[2]/div/div/section[2]/div/div[4]/div/a')
        for a_tag in a_tag_list:
            yield {
                'company': a_tag.xpath('.//div/div[1]/div/text()').get(),
                'job_title': a_tag.xpath('.//div/div[1]/div[2]/div[1]/div/h2/text()').get(),
                'location': a_tag.xpath('.//div/div[2]/div/div/span/text()').get(),
                'tags': a_tag.xpath('.//div/div[3]/div/div/span/text()').getall()
            }
