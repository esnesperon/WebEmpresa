---
title: "NutriFit RAG"
category: "RAG"
description: "Agente RAG agéntico especializado en nutrición y gimnasio que responde consultas personalizadas sobre dietas, rutinas y suplementación."
image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
date: 2024-11-20
featured: true
tags: ["RAG", "Nutrición", "Gimnasio", "IA", "Agentic"]
---

NutriFit RAG es un sistema de generación aumentada por recuperación (RAG) agéntico diseñado para el ámbito de la nutrición y el fitness. A diferencia de un chatbot convencional, este agente toma decisiones activas sobre qué fuentes consultar, cómo combinar la información y cuándo pedir aclaraciones al usuario.

## Arquitectura

- **Base de conocimiento curada**: Artículos científicos sobre nutrición, guías de entrenamiento, tablas de composición de alimentos y protocolos de suplementación
- **Retrieval multimodal**: Búsqueda semántica en documentos de nutrición + recuperación estructurada en bases de datos de alimentos
- **Razonamiento agéntico**: El agente descompone consultas complejas ("¿qué dieta sigo si entrenó por la mañana y soy intolerante a la lactosa?") en sub-tareas, consulta múltiples fuentes y sintetiza una respuesta coherente
- **Memoria conversacional**: Mantiene contexto de la conversación para sugerencias progresivas y seguimiento de objetivos

## Capacidades

- Planes nutricionales personalizados según objetivos, restricciones y preferencias
- Recomendaciones de rutinas de gimnasio adaptadas al nivel y equipamiento disponible
- Análisis de suplementación con interacciones y dosificaciones basadas en evidencia
- Seguimiento de progresión y ajuste dinámico de recomendaciones
- Explicación de cada sugerencia con referencias a la fuente consultada

## Tecnología

- LLM con capacidades de razonamiento y function calling
- Base de datos vectorial para embeddings de documentos nutricionales
- Pipeline de ingesta automática de nuevas fuentes
- API REST para integración con apps móviles y web