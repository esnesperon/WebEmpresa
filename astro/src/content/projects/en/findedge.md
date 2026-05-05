---
title: "FindEdge"
category: "SaaS"
description: "Analytics platform for crypto, stocks and investment funds with quantitative analysis, smart screeners, analyst reports and real-time alerts."
image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2070&auto=format&fit=crop"
date: 2025-01-15
featured: true
link: "https://findedge.es"
tags: ["SaaS", "Next.js", "TypeScript", "Crypto", "Stocks", "Analytics", "Stripe"]
---

FindEdge is a full-stack financial analytics SaaS platform built with Next.js 16. It provides real-time crypto and stock market data, analytics for 46,000+ investment funds, quantitative analysis tools, multi-exchange charting, smart screeners, technical mapping, fundamental analysis, fund comparator, currency strength, Telegram alerts, real-time chat with communities, and an affiliate program.

It features a 3-tier subscription system (Free/Pro/Premium) based on Stripe that gates premium indicators and exchange data.

## Key Features

- **Market Dashboard**: Real-time overview of crypto, stocks and funds with Fear & Greed Index, market charts and sortable table powered by TanStack Table
- **Stock Analysis**: Interactive candlestick chart, quote stats, Graham Intrinsic Value, income breakdown waterfall from SEC 10-K, performance analyzer with Sharpe ratio and max drawdown
- **Stock Analyst Report**: 14 sections, 0-100 composite scoring, 8 interactive charts, 8 AI-generated narratives, financial quality, valuation, governance, macro context and competition
- **Fund Ranking**: Composite score with percentiles, 13 risk metrics, performance heatmap, drawdown underwater, 6-axis radar chart and 6 position tables
- **Fund Analyst Report**: FE Score 0-100, 9 sections, portfolio, risk, costs, alternatives and AI narratives
- **Daily Radar**: Fund universe screening with rating alerts, 7 core rankings, 7 interactive charts, style box and 6 exclusive analyses
- **Quantitative Screeners**: Funding Spike, Imbalance, Trend Reversion, VWAP, Hurst, Gap Scanner, Sector Analysis, Momentum Scanner and Market Breadth
- **Macro Report**: Regime classification, 3 Fuses signal, recession probability gauge, 22 metric cards with 20Y percentile, 14 interactive charts, 9 AI sections
- **Portfolio Manager**: 4 asset types, FIFO P&L, multi-currency, tax-ready CSV export for Spain, USA, Mexico, Argentina, Colombia and Chile
- **Real-Time Chat & Communities**: 5 global channels, communities with invite links, voice messages, file attachments
- **Telegram Alerts**: Price, funding rate, screener gap alerts and daily market summary

## Tech Stack

- Next.js 16 (App Router) + TypeScript 5.8
- Tailwind CSS 3.4 + Clerk v7 for authentication
- PostgreSQL 16 + PostgREST + Valkey 8 (Redis-compatible)
- Stripe v20 for payments and Connect for affiliates
- ECharts + Lightweight Charts v5 for visualization
- TanStack React Table + next-intl v4 for i18n (7 languages)
- Sentry 10, PostHog, Resend for transactional emails
- Scrapling (Python) for fund scraping from Finect

## Internationalization

7 complete languages (EN, ES, ZH, KO, FR, DE, IT) with 258+ translation keys in the stock report namespace and 52 metric tooltip explanations.