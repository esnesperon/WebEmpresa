---
title: "News Scraper Bot"
category: "Automation"
description: "Automated scraper that collects financial news and publishes them on Twitter with AI-generated formatting, hashtags and summaries."
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
date: 2024-07-10
featured: true
tags: ["Scraper", "Twitter", "Bot", "News", "Automation"]
---

News Scraper Bot is an automation system that monitors multiple financial news sources, processes information with AI and publishes on Twitter autonomously.

## How it works

- **Multi-source scraping**: Collects news from financial APIs (Finnhub, CryptoPanic, marketaux) and configurable RSS feeds
- **Smart filtering**: Classifies news by relevance and category (crypto, stocks, macro) using language models
- **Content generation**: Creates tweets with concise summaries, relevant hashtags and engagement-optimized formatting
- **Scheduled publishing**: Posts on Twitter with optimized schedules based on target audience
- **Trending detection**: Identifies breaking news and prioritizes them for immediate publication

## Technical features

- Data pipeline with deduplication and rate limiting
- Automatic translation to the user's language
- News cache to avoid duplicates
- Control dashboard to review and approve tweets before publication (semi-automatic mode)
- Detailed execution logs
- Error notifications via Telegram