# web

Toto je webová aplikace organizase Českolipská Esports.

## Vývoj

Jako backend používáme úžasnou službu Supabase. Pro vývoj funkcí závislých na databázi a přihlášení
uživatelů tedy budete potřebovat i lokální instanci Supabase.

```bash
git clone https://github.com/Ceskolipska-Esports/web.git # naklonujte si repo
cd web
pnpm install # nainstalujte se závislosti (pnpm samozřejmě nahraďte jménem svého správce balíčků)
pnpx dotenv-vault login && pnpx dotenv-vault@latest pull # stáhněte si tajné proměnné
pnpx supabase@latest start # spusťte lokální instanci Supabase pro vývoj
pnpm dev # spusťte vývojový server
```

## Spuštění

Git repo je propojeno s Cloudflare Pages, které projekt vždy sestaví z nejnovějšího commitu
na větvi master. Dotenv-vault pak stáhne proměnné pro produkci a projekt se spustí.

