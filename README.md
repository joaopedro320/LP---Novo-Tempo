# LP Tempo Novo Marmoraria

Landing page de captação da **Tempo Novo Marmoraria** (Itaim Paulista, Zona Leste de São Paulo/SP), cliente QH4 no produto **Low Ticket Stones**. Pasta pronta para subir na Vercel como site estático.

## Contexto do cliente

| Item | Informação |
|---|---|
| Empresa | Tempo Novo Marmoraria, CNPJ 56.365.238/0001-75 |
| Contrato | 02/10/2026 a 02/04/2027, renovação automática |
| Contatos | Donizete e Verônika, WhatsApp (11) 96923-3519 (único número) |
| Endereço | Av. Marechal Tito, 7802, Itaim Paulista, São Paulo/SP, 08115-000 |
| Instagram | [@marmorariatemponovo](https://www.instagram.com/marmorariatemponovo/) |
| Área de entrega | Grande São Paulo e litoral norte |
| Horário | Seg a qui 8h às 17h30, sex 8h às 17h, sábado fechado |
| Materiais | Granitos, mármores, quartzos, quartzitos e lâminas ultracompactas |
| Destaque pedido | Quartzo e lâminas |
| Diferenciais do briefing | Acabamento alto padrão e customizado (cliente traz inspiração), prazo de 20 dias úteis com entrega antes disso, acabamento em 45° fino |
| Público | Alto padrão, sem recorte de idade ou gênero |
| Posicionamento marcado | Alto luxo, moderno e inovador, ousado, técnico/especialista |
| Tema obrigatório | Como escolher a melhor pedra para o seu ambiente |
| Fundo pedido | Claro |
| Paleta pedida | Azul e preto |
| Fonte | Sem preferência (aplicado o padrão QH4) |

## Identidade visual aplicada

**Paleta** (tirada do logo enviado: fundo cinza frio, wordmark marinho e o azul do mármore do ícone)

| Token | Hex | Uso |
|---|---|---|
| `--paper` | `#EEF0F2` | Fundo principal (claro, como pedido) |
| `--white` | `#FFFFFF` | Seções alternadas, cards do formulário |
| `--ink` | `#0E1C33` | Textos, botões, faixa de materiais (o "preto" da marca) |
| `--lapis` | `#2C4F86` | Acento azul: links, números, respostas |
| `--lapis-deep` | `#1B355E` | Fundo do CTA final |
| `--ice` | `#C9D6E8` | Detalhes sobre fundo escuro |
| `--graphite` | `#232A35` | Rodapé (escuro claro, sem preto absoluto) |

**Tipografia:** Poppins (títulos, peso 500/600) + Inter (corpo).

**Logo:** recortado do arquivo enviado com fundo transparente. Versões em `assets/img/`: `logo-horizontal` (header), `logo-tempo-novo` (marinho), `logo-tempo-novo-branco` (rodapé), `icone-tn` (CTA e favicons).

**Assinatura visual:** o corte a 45°. Como o briefing traz o "acabamento em 45 graus fino" como termo de busca e diferencial, as fotos, botões e caixas têm um canto chanfrado a 45°. No hero, a foto da ilha se divide em duas metades que se encontram numa emenda a 45° reais (proporção 5/6), com o selo "45°" na ponta. É a única animação de entrada "de impacto"; o resto é scroll reveal leve.

## Estrutura da página

1. **Header fixo** com logo, navegação e botão de orçamento
2. **Hero**: "Marmoraria de alto padrão perto de você, com prazo de 20 dias úteis" + animação da emenda a 45° + 3 fatos (prazo, acabamento, área)
3. **Faixa de materiais** em loop
4. **Prazo**: linha do tempo em 5 passos, baseada na área de atuação descrita pelo Donizete (medição, conferência da pedra bruta, projeto passado a limpo, serra e acabamento, conferência final), com régua "dia 1 → dia útil 20" que preenche ao rolar
5. **Quartzo e lâminas ultracompactas** (destaque pedido no briefing)
6. **Acabamento em 45°** com closes da meia-esquadria
7. **Projetos**: galeria assimétrica com lightbox
8. **Como escolher a melhor pedra**: guia interativo em abas com as 3 perguntas e respostas do briefing
9. **Orçamento**: endereço, área, horário, mapa e formulário
10. **FAQ** (8 perguntas, só com fatos do briefing)
11. **CTA final**: "Tem uma inspiração salva? Manda pra gente."
12. **Rodapé** com CNPJ, contatos e "Desenvolvido pro QH4 Growth" (link @qh4growth)
13. **Botão flutuante de WhatsApp** no canto direito

## O que já está configurado

- WhatsApp `5511969233519` em todos os CTAs, com mensagens pré-preenchidas por contexto
- Formulário sem Apps Script: monta a mensagem com todos os campos e abre direto no WhatsApp, depois leva para `obrigado.html`. Se o navegador bloquear a nova aba, abre o WhatsApp na própria aba
- Botão de envio nasce desabilitado e só libera com todos os obrigatórios válidos (`checkValidity` a cada input/change)
- Máscara de telefone `(11) 90000-0000`
- `obrigado.html` com botão "Abrir o WhatsApp" usando a mensagem padrão "Olá, acabei de preencher o formulário no site. Aguardo mais informações."
- `404.html` personalizada (a Vercel serve automaticamente)
- Acessibilidade: skip link, foco visível, abas com teclado (setas), `prefers-reduced-motion` respeitado
- Responsivo testado em 1440 px e 390 px sem rolagem horizontal

## Trocar antes de subir

- [ ] **GTM**: substituir `GTM-XXXXXXX` em `index.html`, `obrigado.html` e `404.html`
- [ ] **Domínio**: o briefing respondeu "Tempo Novo Marmoraria" no campo de domínio, então nada foi registrado ainda. Usei `https://www.temponovomarmoraria.com.br/` como placeholder em canonical, Open Graph, JSON-LD, `robots.txt` e `sitemap.xml`. Trocar pelo domínio final (buscar e substituir)

## Pendências de briefing (para alinhar com o cliente)

- **Endereço**: veio no bloco de dados para domínio/hospedagem. Confirmar se é o endereço da marmoraria (bate com o GMN?) antes de manter no rodapé, mapa e JSON-LD
- **Fotos 0 a 3 da galeria** (lavabo e balcão em pedra iluminada, escada, bancada suspensa): parecem de padrão diferente das fotos de obra. Confirmar que são projetos da Tempo Novo; se forem referência/inspiração, remover da galeria
- **Pasta de fotos do Google Photos** (link no briefing) não foi usada, só o zip enviado. Vale puxar mais fotos de quartzo e lâmina, que são o destaque
- **Depoimentos**: não incluídos. O GMN está com nota 3.6 e dois cards duplicados (um com telefone de ex-funcionário). Depois da limpeza do GMN, dá para trazer avaliações reais
- **Tempo de mercado**: o form diz que a sociedade foi desfeita em 2024 e o resumo fala em ~3 anos de operação e 6 de mercado do Donizete. Como os números não batem, a LP não cita anos
- **Ticket e números**: o form traz ticket R$ 5.454 e "600 contatos / 90 clientes", diferente do resumo comercial (30 orçamentos, até 15 fechamentos, ticket ~R$ 4.600). Não entra na LP, mas vale alinhar para o tráfego/CRM

## Fonte do conteúdo

Todo o texto vem do formulário de briefing (respondido pela Verônika) e do resumo comercial. Nada de anos de mercado, garantias, quantidade de obras ou depoimentos foi inventado. As respostas sobre pedras (lâmina para mancha e calor, mármore polido mancha e resinado dificilmente, granito na cozinha) são as respostas literais do cliente.

## Eventos de rastreamento (dataLayer)

| Evento | Quando | Parâmetros |
|---|---|---|
| `whatsapp_click` | Clique em qualquer link de WhatsApp | `local`: header, hero, destaque, escolher, info, final, rodape, flutuante, obrigado |
| `generate_lead` | Envio do formulário | `form`, `ambiente`, `material` |
| `guia_pedra` | Troca de aba no "Como escolher" | `pergunta` |
| `pagina_obrigado` | Carregamento de `obrigado.html` | |

## Estrutura da pasta

```
lp-tempo-novo/
├── index.html
├── obrigado.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── vercel.json
├── README.md
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/   (fotos em .webp 1200 px + versão -sm 640 px, logos, favicons, og-image.jpg)
```

## Publicar na Vercel

1. Descompactar o zip
2. `vercel` dentro da pasta (ou arrastar a pasta no painel da Vercel, framework "Other", sem build)
3. Apontar o domínio e trocar o placeholder do canonical
4. Testar o formulário no celular

## Checklist de entrega

- [x] SEO: title e meta description com nicho e bairro, H1 com "Marmoraria" e "Perto de você"
- [x] JSON-LD `HomeAndConstructionBusiness` (endereço, telefone, horário, área atendida, CNPJ) + `FAQPage`
- [x] Open Graph completo + Twitter Card + `og-image.jpg` 1200x630
- [x] Canonical (placeholder de domínio)
- [x] `robots.txt` e `sitemap.xml`
- [x] `site.webmanifest` e favicons
- [x] `vercel.json` com cache de assets e headers de segurança
- [x] Página de obrigado
- [x] Página 404 personalizada
- [x] `width`/`height` em todas as imagens e preload da imagem do hero
- [x] Botão flutuante de WhatsApp à direita
- [x] Rodapé "Desenvolvido pro QH4 Growth"
- [x] Scroll reveal, microinterações e parallax leve no hero
- [x] Sem erros de console (testado em Chromium, desktop e mobile)
