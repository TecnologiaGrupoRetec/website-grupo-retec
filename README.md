# RETEC - Painel Administrativo & Blog Dinâmico

Este repositório contém o website institucional da **RETEC**, agora equipado com uma área administrativa dinâmica e segura para gerenciamento de postagens do blog integrada ao **Supabase (PostgreSQL)** e ao **Vercel Blob Storage**.

---

## 🛠️ Arquitetura do Sistema

O projeto foi modernizado utilizando **Next.js (App Router)** e as seguintes soluções na nuvem:

```
[ Painel Admin (Frontend) ] ──> [ Next.js API Routes (Backend) ]
                                          │
                  ┌───────────────────────┴───────────────────────┐
                  ▼                                               ▼
     [ Supabase (PostgreSQL) ]                         [ Vercel Blob Storage ]
  Persistência estruturada do                     Banco de imagens na nuvem
  conteúdo (Tabela de posts)
```

---

## ✨ Funcionalidades Implementadas

1. **Autenticação Segura baseada em Cookies (HTTP-Only)**:
   * Proteção total contra ataques XSS.
   * Sessão assinada via token Base64 com verificação estrita de chaves secretas em produção.
   * Redirecionamento automático e proteção de rotas no cliente e no servidor.

2. **Editor Estruturado no Painel Administrativo**:
   * Permite criar publicações dinâmicas adicionando blocos de texto (parágrafos ou subtítulos) sob demanda.
   * Armazenamento flexível usando a coluna de tipo `JSONB` (`corpo_texto`) no PostgreSQL.

3. **Gerenciador Híbrido de Imagens (Uploads)**:
   * **Em Produção**: Envia as fotos diretamente para o **Vercel Blob Storage** (nuvem).
   * **Em Desenvolvimento**: Possui um fallback automático para gravar os arquivos localmente na pasta `public/uploads` caso a chave do Vercel Blob não esteja configurada.

4. **Sincronização em Tempo Real (Cache Bypass & Revalidation)**:
   * Renderização dinâmica do lado do servidor (`force-dynamic`).
   * Invalidação forçada do cache de borda da Vercel (`revalidatePath`) imediatamente ao salvar ou excluir um artigo.
   * Cabeçalhos de resposta HTTP (`Cache-Control: no-store`) combinados com opções de requisição (`cache: 'no-store'`) para evitar que navegadores sirvam dados defasados.

---

## ⚙️ Variáveis de Ambiente (`.env.local`)

Crie um arquivo `.env.local` na raiz do projeto contendo as seguintes configurações:

```bash
# Vercel Blob Storage 
BLOB_STORE_ID="seu_store_id"
BLOB_READ_WRITE_TOKEN="seu_token_de_leitura_escrita"

# Supabase 
NEXT_PUBLIC_SUPABASE_URL="https://seu-projeto.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="sua_chave_service_role" # Requerido para pular regras RLS no backend

# Credenciais de Acesso do Admin - Painel Administrativo
ADMIN_USERNAME="seu_usuario"
ADMIN_PASSWORD="sua_senha_secreta"
SESSION_SECRET="uma_chave_longa_e_aleatoria"
```

---

## 🚀 Como Rodar e Testar Localmente

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   * O projeto estará disponível em [http://localhost:3000](http://localhost:3000).
   * O painel administrativo estará acessível em [http://localhost:3000/admin](http://localhost:3000/admin).

3. **Verificar Compilação (Build de Produção)**:
   ```bash
   npm run build
   ```

---

## 📦 Guia de Deploy na Vercel (Passo a Passo)

1. Faça o commit e envie seu código para o repositório do **GitHub**.
2. Conecte o repositório à **Vercel**.
3. No painel do projeto na Vercel, acesse **Settings -> Environment Variables** e cadastre as variáveis listadas no tópico acima (`ADMIN_USERNAME`, `ADMIN_PASSWORD`, etc.).
4. Acesse a aba **Storage** no console da Vercel, crie um novo **Blob** e conecte-o ao projeto. (A Vercel inserirá a variável `BLOB_READ_WRITE_TOKEN` de forma automática).
5. Solicite uma nova implantação (**Redeploy**).

Pronto! O sistema estará rodando na nuvem integrado ao Supabase e ao Vercel Blob de forma totalmente otimizada.

---

## Desing e Normas de estrutura de páginas - Grupo Retec

### Paleta Principal (Sass Variables)
| Variável | Valor Hex | Uso Recomendado |
| :--- | :--- | :--- |
| `$primary` | `#002D5D` | Azul escuro principal da marca (títulos em páginas claras) |
| `$secondary` | `#3AA0DB` | Azul claro de destaque (eyebrows, links, botões) |
| `$detail` | `#74B88E` | Verde detalhe (badges, checkmarks, destaques secundários) |
| `$neutral` | `#999999` | Cinza neutro padrão |
| `$neutral-light` | `#D9D9D9` | Cinza claro para linhas de divisão e bordas suaves |
| `$surface` | `#F2F3FA` | Fundo cinza-azulado suave para seções secundárias |
| `$text-neutral` | `#6F6F6F` | Cinza focado em legibilidade de textos secundários |
| `$white` | `#FFFFFF` | Fundos claros de páginas e textos em seções escuras |
| `$black` | `#000000` | Sombras, sobreposições e contrastes máximos |



