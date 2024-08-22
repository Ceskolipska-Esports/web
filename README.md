# web

Toto je webová aplikace organizace Českolipská Esports.

## Používání

Pro normální použití jděte na adresu https://ceskolipskaesports.cz.

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

Cloudflare Pages sestavuje dvě verze aplikace:

- `preview` - sestavována z větve `dev`, zde můžeme testovat změny před integrací do `master`u.
  Merge větve `dev`do `master`u vyžaduje úspěšné sestavení na Cloudflare Pages, a v budoucnosti 
	bude vyžadovat i úspěšné testy (`vitest` i `playwright`, ale nejdřív je někdo musí napsat.)

- `production` - sestavována z větve `master`, hlavní sestavení

Obě větve momentálně používají proměnné pro produkci, což není ideální, ale pravděpodobně to není
žádný velký problém.

## Spuštění

Git repo je propojeno s Cloudflare Pages, které projekt vždy sestaví z nejnovějšího commitu
na větvi master. Dotenv-vault pak stáhne proměnné pro produkci a projekt se spustí.
