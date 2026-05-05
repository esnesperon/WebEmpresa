---
title: "FindEdge"
category: "SaaS"
description: "Plateforme d'analyse pour la crypto, les actions et les fonds d'investissement avec analyse quantitative, screeners intelligents, rapports d'analyste et alertes en temps réel."
image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2070&auto=format&fit=crop"
date: 2025-01-15
featured: true
link: "https://findedge.es"
tags: ["SaaS", "Next.js", "TypeScript", "Crypto", "Actions", "Analytique", "Stripe"]
---

FindEdge est une plateforme SaaS full-stack d'analyse financière construite avec Next.js 16. Elle fournit des données crypto et boursières en temps réel, l'analyse de plus de 46 000 fonds d'investissement, des outils d'analyse quantitative, des graphiques multi-bourse, des screeners intelligents, de la cartographie technique, de l'analyse fondamentale, un comparateur de fonds, la force des devises, des alertes Telegram, un chat en temps réel avec des communautés et un programme d'affiliation.

Elle dispose d'un système d'abonnement à 3 niveaux (Gratuit/Pro/Premium) basé sur Stripe qui contrôle l'accès aux indicateurs premium et aux données de bourse.

## Fonctionnalités clés

- **Tableau de bord de marché** : Vue d'ensemble en temps réel des crypto, actions et fonds avec indice Fear & Greed, graphiques de marché et tableau triable alimenté par TanStack Table
- **Analyse d'actions** : Graphique en chandelier interactif, statistiques de cotation, valeur intrinsèque de Graham, cascade de revenus depuis les 10-K de la SEC, analyse de performance avec ratio de Sharpe et drawdown maximum
- **Rapport d'analyste actions** : 14 sections, scoring 0-100, 8 graphiques interactifs, 8 narratifs IA, qualité financière, valorisation, gouvernance, contexte macro et concurrence
- **Classement des fonds** : Score composite avec percentiles, 13 métriques de risque, heatmap de performance, drawdown underwater, radar chart 6 axes et 6 tableaux de position
- **Rapport d'analyste fonds** : FE Score 0-100, 9 sections, portefeuille, risque, coûts, alternatives et narratifs IA
- **Daily Radar** : Screening de l'univers de fonds avec alertes de notation, 7 classements core, 7 graphiques interactifs, style box et 6 analyses exclusives
- **Screeners quantitatifs** : Funding Spike, Imbalance, Trend Reversion, VWAP, Hurst, Gap Scanner, analyse sectorielle, Momentum Scanner et Market Breadth
- **Rapport Macro** : Classification de régime, signal 3 Fuses, jauge de probabilité de récession, 22 cartes de métriques avec percentile 20 ans, 14 graphiques, 9 sections IA
- **Gestionnaire de portefeuille** : 4 types d'actifs, P&L FIFO, multi-devises, export fiscal pour l'Espagne, les USA, le Mexique, l'Argentine, la Colombie et le Chili
- **Chat en temps réel et communautés** : 5 canaux globaux, communautés avec liens d'invitation, messages vocaux, pièces jointes
- **Alertes Telegram** : Prix, taux de financement, alertes de screener et résumé quotidien du marché

## Stack technologique

- Next.js 16 (App Router) + TypeScript 5.8
- Tailwind CSS 3.4 + Clerk v7 pour l'authentification
- PostgreSQL 16 + PostgREST + Valkey 8 (compatible Redis)
- Stripe v20 pour les paiements et Connect pour les affiliés
- ECharts + Lightweight Charts v5 pour la visualisation
- TanStack React Table + next-intl v4 pour l'i18n (7 langues)
- Sentry 10, PostHog, Resend pour les emails transactionnels
- Scrapling (Python) pour le scraping de fonds depuis Finect

## Internationalisation

7 langues complètes (EN, ES, ZH, KO, FR, DE, IT) avec 258+ clés de traduction dans le namespace des rapports d'actions et 52 explications de tooltips de métriques.