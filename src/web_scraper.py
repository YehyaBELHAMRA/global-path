import os
from firecrawl import FirecrawlApp
from google.cloud import storage

# Initialize Firecrawl (requires API key)
app = FirecrawlApp(api_key=os.environ.get("FIRECRAWL_API_KEY"))

# Your list contains wildcards (e.g., dofi.ibz.be/fr/themes/ressortissants-dun-pays-tiers/travail/*)
# Firecrawl's 'crawl' endpoint automatically handles sub-pages.
start_urls = [
    "https://www.guichet.public.lu/fr/citoyens/immigration/plus-3-mois/ressortissant-tiers/hautement-qualifie.html",
    "https://www.dofi.ibz.be/fr/themes/third-country-nationals/travail",
    "https://www.economie-emploi.brussels/autorisation-travail-carte-bleue"
    # Add the rest from your URL_list.txt
]


def scrape_and_save_to_markdown(urls):
    docs = []
    for url in urls:
        print(f"Scraping {url}...")
        try:
            # Using scrape for single pages. Use app.crawl_url() for the wildcard domains.
            result = app.scrape_url(url, params={'formats': ['markdown']})
            markdown_content = result.get('markdown')

            # Save locally temporarily
            filename = url.replace("https://", "").replace("/", "_") + ".md"
            with open(filename, "w", encoding="utf-8") as f:
                f.write(markdown_content)
            docs.append((filename, url))
        except Exception as e:
            print(f"Failed to scrape {url}: {e}")
    return docs