---
title: "FindEdge"
category: "SaaS"
description: "Plataforma de analytics para crypto, bolsa y fondos de inversión con análisis cuantitativo, screeners inteligentes, informes de analyst y alertas en tiempo real."
image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2070&auto=format&fit=crop"
date: 2025-01-15
featured: true
link: "https://findedge.es"
tags: ["SaaS", "Next.js", "TypeScript", "Crypto", "Stocks", "Analytics", "Stripe"]
---

FindEdge es una plataforma SaaS full-stack de analytics financiero construida con Next.js 16. Proporciona datos en tiempo real de crypto y bolsa, análisis de 46.000+ fondos de inversión, herramientas de análisis cuantitativo, charting multi-exchange, screeners inteligentes, mapeo técnico, análisis fundamental, comparador de fondos, fuerza de divisas, alertas vía Telegram, chat en tiempo real con comunidades y un programa de afiliados.

Cuenta con un sistema de suscripción de 3 niveles (Free/Pro/Premium) basado en Stripe que controla el acceso a indicadores premium y datos de exchange.

## Funcionalidades principales

- **Dashboard de Mercado**: Vista general en tiempo real de crypto, bolsa y fondos con índice Fear & Greed, gráficos de mercado y tabla sortable con TanStack Table
- **Análisis de Acciones**: Gráfico de velas interactivo, rangos de cotización, valor intrínseco Graham, desglose de ingresos tipo waterfall desde 10-K, analizador de rendimiento con Sharpe ratio y max drawdown
- **Informe de Analyst para Acciones**: 14 secciones, scoring 0-100, 8 gráficos interactivos, 8 narrativas IA, calidad financiera, valoración, gobernanza, contexto macro y competencia
- **Ranking de Fondos**: Score compuesto con percentiles, 13 métricas de riesgo, heatmap de rendimiento, drawdown underwater, radar chart 6 ejes y 6 tablas de posición
- **Informe Analyst de Fondos**: FE Score 0-100, 9 secciones, cartera, riesgo, costes, alternativas y narrativas IA
- **Daily Radar**: Screening del universo de fondos con alertas de rating, 7 rankings core, 7 gráficos interactivos, style box y 6 análisis exclusivos
- **Screeners Cuantitativos**: Funding Spike, Imbalance, Trend Reversion, VWAP, Hurst, Gap Scanner, Sector Analysis, Momentum Scanner y Market Breadth
- **Macro Report**: Clasificación de régimen, 3 Fuses signal, probabilidad de recesión, 22 métricas con percentil 20Y, 14 gráficos, 9 secciones IA
- **Portfolio Manager**: 4 tipos de activos, P&L FIFO, multi-divisa, exportación fiscal para España, USA, México, Argentina, Colombia y Chile
- **Chat en Tiempo Real**: 5 canales globales, comunidades, mensajes de voz, archivos adjuntos
- **Alertas Telegram**: Precio, funding rate, gaps de screener, resumen diario de mercado

## Stack Tecnológico

- Next.js 16 (App Router) + TypeScript 5.8
- Tailwind CSS 3.4 + Clerk v7 para autenticación
- PostgreSQL 16 + PostgREST + Valkey 8 (Redis-compatible)
- Stripe v20 para pagos y Connect para afiliados
- ECharts + Lightweight Charts v5 para visualización
- TanStack React Table + next-intl v4 para i18n (7 idiomas)
- Sentry 10, PostHog, Resend para emails transaccionales
- Scrapling (Python)

## Internación

7 idiomas completos (EN, ES, ZH, KO, FR, DE, IT) con 258+ claves de traducción en el namespace de stock reports y 52 tooltips de métricas.