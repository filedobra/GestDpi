# 🛡️ Gestione DPI - Sistema di Gestione Dispositivi di Protezione Individuale

Un'applicazione web completa per la gestione dei Dispositivi di Protezione Individuale (DPI) in ambito aziendale.

## 🚀 Demo Online

L'applicazione è disponibile online su GitHub Pages: [Clicca qui per accedere](https://TUOUSERNAME.github.io/NOMEREPOSITORY)

## 📋 Funzionalità

### 👥 Gestione Lavoratori
- ➕ Aggiunta, modifica e cancellazione di lavoratori
- 📊 Campi: Nome, Cognome, Matricola, Reparto, Mansione
- 📁 Importazione da file CSV

### 🦺 Gestione DPI
- 📦 Catalogazione dei dispositivi di protezione individuale
- 🏷️ Campi: Nome DPI, Codice SAP, Categoria, Scadenza, Note
- 📂 Categorie: Testa, Occhi, Udito, Vie Respiratorie, Mani, Corpo, Piedi, Anticaduta, Altro
- 📁 Importazione da file CSV

### 🚚 Consegna DPI
- 📝 Registrazione delle consegne ai lavoratori
- ✍️ Firma digitale del preposto e del lavoratore
- 📊 Tracciamento quantità, data e motivo della consegna
- 📈 Visualizzazione storico consegne per lavoratore

### 🔍 Ricerca e Filtraggio
- 🔎 Ricerca avanzata per lavoratori, DPI e consegne
- 🎯 Filtri multipli per ottimizzare le ricerche

### 🖨️ Stampa e Reportistica
- 📄 Generazione di PDF con verbali di consegna
- ✍️ Include firme digitali nei documenti
- 💾 Esportazione dati in formato PDF

### ⚙️ Impostazioni
- 🏢 Configurazione dati aziendali
- 💾 Gestione backup e ripristino dati
- 🌙 Tema chiaro/scuro

## 💻 Tecnologie Utilizzate

- **HTML5** - Struttura dell'applicazione
- **CSS3** - Styling moderno e responsive
- **JavaScript ES6+** - Logica applicativa
- **Canvas API** - Gestione firme digitali
- **jsPDF** - Generazione documenti PDF
- **localStorage** - Persistenza dati locale

## 📱 Compatibilità

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile e Tablet (iOS Safari, Android Chrome)
- ✅ Design responsive
- ✅ Supporto touch per firme

## 🔧 Installazione Locale

1. Scarica il file `index.html`
2. Apri il file con un browser web moderno
3. L'applicazione è pronta all'uso!

## 📊 Persistenza Dati

I dati vengono salvati nel **localStorage** del browser:
- ✅ Accesso immediato senza server
- ⚠️ Dati locali al browser utilizzato
- 💾 Backup/ripristino tramite funzione esportazione

## 🚀 Deployment su GitHub Pages

### Prerequisiti
- Account GitHub gratuito
- Repository pubblico

### Passi per il deployment

1. **Crea un nuovo repository su GitHub**
   - Vai su [github.com](https://github.com)
   - Clicca su "New repository"
   - Scegli un nome (es. `gestione-dpi`)
   - Assicurati che sia **pubblico**
   - Inizializza con README

2. **Carica il file**
   - Clicca su "Add file" > "Upload files"
   - Carica il file `index.html`
   - Scrivi un messaggio di commit
   - Clicca "Commit changes"

3. **Abilita GitHub Pages**
   - Vai nelle "Settings" del repository
   - Scorri fino a "Pages"
   - In "Source" seleziona "Deploy from a branch"
   - Seleziona "main" branch e "/ (root)"
   - Clicca "Save"

4. **Accedi al sito**
   - Dopo alcuni minuti, il sito sarà disponibile su:
   - `https://TUOUSERNAME.github.io/NOMEREPOSITORY`

## 📝 Formato CSV per Importazione

### Lavoratori
```csv
nome,cognome,matricola,reparto,mansione
Mario,Rossi,12345,Produzione,Operaio
Giulia,Bianchi,12346,Ufficio,Impiegata
```

### DPI
```csv
nome,codice_sap,categoria,scadenza_mesi,note
Casco di sicurezza,SAP001,Testa,36,Colore bianco
Guanti protettivi,SAP002,Mani,12,Taglia L
```

## 🔒 Sicurezza e Privacy

- 🔐 Nessun dato viene inviato a server esterni
- 💾 Tutti i dati rimangono nel browser locale
- 🔍 Codice sorgente completamente trasparente
- 🚫 Nessuna raccolta di dati personali

## 🆘 Supporto

Per problemi o domande:
- 📧 Contatta l'amministratore del sistema
- 📖 Consulta la documentazione integrata
- 🔧 Verifica la compatibilità del browser

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file LICENSE per maggiori dettagli.

---

**Nota**: Questa applicazione è progettata per uso aziendale interno. Assicurati di rispettare le normative sulla sicurezza sul lavoro vigenti nella tua giurisdizione.

