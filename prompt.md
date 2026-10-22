# ROLE & OBJECTIVE
Act as a Principal Frontend Architect and Institutional UI/UX Designer specializing in tier-1 global energy, EPC (Engineering, Procurement, and Construction), and infrastructure conglomerates (benchmarking Siemens Energy, GE Vernova, NNPC Ltd, and Bechtel).

Build a complete, production-ready, multi-section corporate and investor-relations frontend website using **semantic HTML5, Tailwind CSS (via CDN with custom configuration), and Vanilla JavaScript** for **Gilgal Exploration & Allied Services Limited (RC 1235316)**.

The website must serve two primary audiences:
1. **Institutional Project Finance Committees & DFIs** (KeyBank USA, United Bank for Africa, Export Credit Agencies, Infrastructure Funds) conducting Stage-1 Bankability & KYC Due Diligence.
2. **Industrial Offtakers, Government Regulators, and EPC Partners** in Nigeria's Niger Delta corridor (NUPRC, NMDPRA, NERC, Delta State Electricity Commission).

---

# STRICT ANTI-"AI SLOP" DESIGN RULES (MANDATORY)
You MUST adhere to the following strict design constraints to prevent generic AI-generated template aesthetics:
1. **NO Neon or Cyberpunk Gradients:** Do not use purple, magenta, cyan, or glowing SaaS gradients.
2. **NO Generic 3-Column Rounded Card Grids with Emojis:** Do not use `rounded-3xl` floating cards with drop-shadows and generic centered icons. Use sharp, architectural layouts (`rounded-none` or `rounded-sm`), visible 1px structural borders (`border-slate-200` / `border-slate-800`), exposed technical hairlines, and asymmetric Swiss-grid layouts.
3. **NO Invented "Lorem Ipsum" or Fake Testimonials:** Every single metric, address, registration number, thermodynamic figure, and dollar value MUST come strictly from the provided ground-truth dataset below.
4. **Typography & Hierarchy:** Pair a commanding, authoritative geometric/grotesk heading font (`Space Grotesk` or `Plus Jakarta Sans` via Google Fonts) with a clean editorial sans-serif body (`Inter`) and a technical monospace font (`JetBrains Mono` or `IBM Plex Mono`) for all financial tables, MW capacities, BOQ figures, survey beacons, and registration IDs.
5. **Color Palette:**
   - **Primary Deep Navy / Industrial Slate:** `#0A1120` (Surface Dark) and `#0F172A` (Slate 900)
   - **Gilgal Corporate Cobalt Blue:** `#0047AB` / `#1D4ED8` (Primary Brand Accent)
   - **Gas Flame / Safety Amber:** `#D97706` / `#EA580C` (Industrial Highlight & Callouts)
   - **Clean Technical Off-White / Alabaster:** `#F8FAFC` and `#F1F5F9` (Light Section Backgrounds)
   - **Emerald Compliance Green:** `#059669` (For ESG, Clean Energy, and Statutory Verification badges)

---

# GROUND-TRUTH CORPORATE & PROJECT DATA (USE VERBATIM)

### 1. Corporate Identity & Statutory Particulars
- **Company Name:** Gilgal Exploration & Allied Services Limited
- **Tagline:** "Powering Industry. Energizing Communities. Building Tomorrow."
- **Safety Motto:** "Safety starts with me. Stop! Think! Then act!"
- **Registration & Tax IDs:** RC 1235316 | TIN: 31237553-0001 | FIRS ID: 2301110028518
- **Statutory Compliance:** CAC Registered, FIRS Tax Clearance, Industrial Training Fund (ITF), National Pension Commission (PENCOM), Nigeria Social Insurance Trust Fund (NSITF), Audited Financial Statements (2022, 2023, 2024).
- **Leadership:** Engr. Harrison Odiri Ogoh (Managing Director / CEO & Project Sponsor).
- **Site Survey Reference:** Delta State Survey Beacon `SC/DT B104X 5948`.
- **Global Office Network:**
  - **Nigeria Operational Office:** No. 111 Effurun/Sapele Road, Opp. Ecobank, Warri, Delta State, Nigeria.
  - **Nigeria Registered Office:** 43 Enerhen Road, Enerhen, Warri, Delta State (Also noted: No. 60 Effurun/Sapele Road, Warri).
  - **USA Head Office:** No. 4200 Bagonia Cove, Apt 212, Sanford / Orlando, Florida 32771-6521, USA | Tel: +1 (407) 533-3518.
  - **USA Second Office:** 24325 East Louisiana Place, Aurora, Colorado 80018-6097, USA | Tel: +1 (303) 332-1994.
  - **Nigeria Telephones:** +234 703 758 5753 | +234 706 950 1633 | +234 703 385 4936.
  - **Official Emails:** harrisonogoh3@gmail.com | dro.whiteigbe@gmail.com | gilgalexploration.2@gmail.com.

### 2. Vision, Mission & Core Capabilities
- **Vision:** To be a foremost indigenous developer of energy and infrastructure in Nigeria, setting new standards of excellence, innovation and reliability, and empowering communities through sustainable development.
- **Mission:** To deliver high-quality, well-engineered projects that monetize Nigeria’s gas resources, expand reliable power supply, and create lasting value for shareholders, host communities and the wider economy.
- **7 Core Services:** (1) Oil & Gas Services, (2) Engineering (FEED & Detailed), (3) Construction & Civil Works, (4) Project Management, (5) Real Estate Development, (6) Consultancy, (7) General Supply & Marketing of Petroleum Products.
- **In-House Heavy Civil Plant & Equipment (Direct & via Dominant Engineering Limited lease):** D6 & D8 Class Bulldozers, Excavators, Tractors, Tippers, Mobile Cranes, Air Compressors, Concrete Mixers, Poker Vibrators, Compactors, Rammers, Power Saws, and Project Fleet Vehicles.

---

# REQUIRED PAGE ARCHITECTURE & INTERACTIVE SECTIONS

Build a cohesive, single-page institutional application with smooth scroll navigation, sticky technical top-bar, and rich interactive tabs/calculators:

### SECTION 1: Top Statutory & Global Office Utility Bar + Sticky Header
- **Top Utility Bar (Dark Slate `#0A1120`, Monospace text):** Displays `RC: 1235316` | `TIN: 31237553-0001` | `FIRS ID: 2301110028518` | `HSE Policy: Stop! Think! Then Act!` on the left, and quick office switches (`Warri, NG` | `Orlando, FL` | `Aurora, CO`) on the right.
- **Main Navbar:** Clean industrial brand mark ("GILGAL EXPLORATION & ALLIED SERVICES LTD."), links to `Corporate Profile`, `Flagship $1.5B CCGT Complex`, `$8.9M First Project BOQ`, `CCGT & LNG Engineering`, `Regulatory & ESG`, and a high-contrast CTA button: `Investor Data Room (GEAS/BP/2026/001)`.

### SECTION 2: Architectural Hero Section (Split Industrial Layout)
- **Left Column:**
  - Document classification badge: `FINANCING MEMORANDUM REF: GEAS/BP/2026/001 • DELTA STATE, NIGERIA`.
  - High-impact headline: **"Integrated Gas-to-Power, Regasification & LPG Monetization Infrastructure."**
  - Sub-headline detailing the conversion of Niger Delta associated and non-associated flare gas into **250–500 MW Combined Cycle Electricity** and **50,000–100,000 MT LPG Storage & Distribution**.
  - Dual CTAs: Primary button (`Explore Flagship Programme`) and Secondary technical button (`View $8.9M Entry Project BOQ`).
- **Right Column (Executive Telemetry Grid):**
  - A sharp, 2x3 bordered bento grid displaying real-time project parameters in monospace typography:
    1. **Generation Capacity:** `250 MW – 500 MW` (Modular GE TM2500 / LM2500 + HRSG)
    2. **LPG Tank Farm:** `50,000 – 100,000 MT` (Pressurized Bullet Storage & Bottling)
    3. **Gas Intake:** `50 – 250 MMSCFD` (Associated & Non-Associated Feedstock)
    4. **Phase I & II CAPEX:** `$1.50 Billion USD` (70% Senior Debt / 30% Equity)
    5. **Fast-Track Entry Project:** `$8.90 Million USD` (10 MW Power + 300,000L LPG Plant)
    6. **Target COD:** `Month 31` (EBITDA Margin: 25%–35% | Min DSCR: 1.30x)

### SECTION 3: Corporate Profile, Leadership & Heavy Plant Capability
- **Asymmetric 12-Column Grid:**
  - **Vision & Mission Statement Block** styled like an annual report executive callout.
  - **Managing Director Profile Card:** Highlighting **Engr. Harrison Odiri Ogoh** (Managing Director / Project Sponsor), emphasizing indigenous Delta State leadership combined with US representative presence in Florida and Colorado.
  - **7 Core EPCIC Services Matrix:** Interactive or cleanly bordered technical list of the 7 core services.
  - **Civil Execution Advantage Drawer/Grid:** Showcasing the in-house heavy equipment fleet (D6/D8 Bulldozers, Mobile Cranes, Excavators via Dominant Engineering Limited) that de-risks early site preparation and foundation works.

### SECTION 4: Interactive Dual-Track Project Explorer (The Core Showcase)
Create a JavaScript-powered **Interactive Tabbed Switcher** allowing investors and engineers to toggle between the three operational tracks:

- **TAB 1: Flagship Complex ($1.5B Phase I & II Integrated Masterplan)**
  - **7-Stage Development Lifecycle Ribbon:** (1) Project Initiation -> (2) Feasibility & Planning -> (3) Engineering & Design (FEED) -> (4) Financing -> (5) Construction -> (6) Commissioning -> (7) Operations (COD Month 31).
  - **5-Stage Site Construction Timeline:** Stage 1: Ground Preparation (3 Mos) -> Stage 2: Civil Foundation (5 Mos) -> Stage 3: Mechanical Installation (6 Mos) -> Stage 4: Electrical & Automation (4 Mos) -> Stage 5: Commissioning (2 Mos).
  - **Capital Cost Breakdown Table ($1.5 Billion Total):**
    - Gas Turbine Plant (250MW): `$600 Million` (40.0%)
    - LPG Tank Farm: `$350 Million` (23.3%)
    - Gas Processing & Conditioning: `$180 Million` (12.0%)
    - Contingency: `$170 Million` (11.3%)
    - Transmission Infrastructure: `$120 Million` (8.0%)
    - Land & Site Development: `$80 Million` (5.3%)
  - **Financing & Repayment Structure Card:** 70% Senior Debt (`$1.05B` via KeyBank USA, UBA, DFIs, ECAs) / 30% Equity (`$450M`), 12–15 Year Tenor, 3-Year Grace Period, 7–10 Year Payback, 5 Revenue Streams (PPA Electricity Sales, LPG Storage Fees, LPG Trading Margins, Capacity Charges, Carbon Reduction Credits).

- **TAB 2: Immediate Entry Project ($8.9M — 10 MW Gas Plant + 300,000L LPG Facility)**
  - Explain the strategic rationale: An immediately deliverable, fully-costed project (Months 0–12) establishing cash flow and institutional track record.
  - **Interactive Bill of Quantities (BOQ) Filterable Table:** Allow users to filter or view all 4 CAPEX categories with exact line-item costs totaling **US$8,900,000**:
    1. **Power Plant ($4,500,000):** 2x Refurbished 5 MW Gas Turbine Generator Packages ($2,600,000), Transformer & Switchgear ($650,000), Installation & Commissioning ($450,000), Turbine Foundations ($400,000), Fuel Gas Station & Piping ($250,000), SCADA & Instrumentation ($150,000).
    2. **LPG Storage & Bottling Plant ($1,570,000):** 300,000-Litre LPG Bullet Tanks ($850,000), Pumps, Compressors & Manifold ($180,000), LPG Filling Carousel ($180,000), LPG Piping & Safety Systems ($120,000), Fire Protection ($120,000), Loading Bay ($80,000), Weighing Scales ($40,000).
    3. **Civil Infrastructure & Buildings ($1,150,000):** Perimeter Fence 2m RC below + 1m RC above ground ($320,000), 4-Room Office/Control Building ($180,000), Internal Roads & Drainage ($150,000), Fire-Water System ($150,000), Site Preparation ($120,000), Cable Trenches ($100,000), Workshop & Store ($80,000), Gatehouse & Security ($50,000).
    4. **Operations, Logistics & Delivery ($1,680,000):** Contingency ($930,000), Engineering, Permits & Project Management ($450,000), Initial Spare Parts & Tools ($120,000), Pickup Truck ($70,000), Forklift ($60,000), Utility Van ($50,000).

- **TAB 3: LNG Regasification-to-Power Module**
  - Present the **9-Step Process Flow Diagram (PFD)** built with clean HTML/CSS technical nodes and SVG directional connectors:
    `LNG Carrier (-162°C)` → `Cryogenic Unloading Terminal` → `Insulated LNG Storage Tanks` → `LNG Transfer Pumps` → `Vaporizers / Regasification Unit` → `Gas Metering & Pressure Regulation` → `Gas Pipeline` → `CCGT Power Plant` → `National / State Transmission Grid`.
  - Highlight Safety Systems: Gas leak detection, Emergency Shutdown Systems (ESD), Fire & Gas monitoring, ASME/API/ISO compliance.

### SECTION 5: Combined-Cycle (CCGT) Thermodynamic & Engineering Benchmark
Build a dedicated, high-credibility **"Engineering & Thermodynamic Proof"** section modeled on the Niger Delta 25 MW Single-Shaft Gas Turbine (GE Frame 5 / MS 5001 / LM2500 class) + Siemens SST-150 Steam Bottoming Cycle benchmark:
- **Interactive Process Block Diagram:** Show how Associated Gas enters the Gas Receiving & Conditioning unit (Separation, Filtration, Dehydration, Compression) and splits into the **LPG Stream** (Bullet Tanks, Refrigeration, Loading Bays) and **Fuel Gas Stream** (Gas Turbine Generator -> HRSG -> Steam Turbine Generator -> Condenser -> Switchyard).
- **Thermodynamic Performance Comparison Cards (Dry Open Cycle vs. Combined Cycle Retrofit):**
  - **Base Gas Turbine Output:** `25.0 MW` (Simple Cycle Thermal Efficiency: `26.6%`, Exhaust Gas Flow: `124.1 kg/s`, Exhaust Gas Outlet Temp $T_d$: `487°C`).
  - **HRSG Heat Recovery:** Captures `42.46 MW` of waste exhaust heat (Economizer + Evaporator + Superheater) with a `10°C` Pinch Point, `190°C` Stack Temperature ($T_a$), and `257.1°C` Evaporator Saturation Temp.
  - **Steam Turbine Bottoming Plant (Siemens SST-150 model benchmark):** Generates an additional `12.9 MW` net power (`14.61 MW` actual ST output minus `1.76 MW` feed pump input) at `45 bar` steam saturation pressure, `467°C` inlet temperature, `13.747 kg/s` steam mass flow rate, `89.06%` isentropic efficiency, and `3.85 kg/kW·h` Specific Steam Consumption (SSC).
  - **Condenser Parameters:** `0.1 bar` condenser pressure, `29.61 MW` capacity, cooling water mass flow of `1,180.42 kg/s` (`29.8°C` inlet to `35.8°C` outlet, `37.50%` condenser efficiency).
  - **Combined Cycle Result:** Total Output rises to **`37.9 MW`** (+51.6% power boost) and Overall Combined Cycle Efficiency ($\eta_{CC}$) jumps from **`26.60%` to `48.81%`** (+84% efficiency gain) with zero additional fuel burned.

### SECTION 6: Regulatory Framework, Risk Matrix & Stage-1 Bankability Readiness
- **Statutory & Regulatory Alignment Grid:**
  - **Electricity Act 2023 & Delta State Electricity Power Sector Law 2024:** Direct intrastate generation, transmission, and bilateral PPA licensing.
  - **Petroleum Industry Act (PIA) 2021:** Governed by **NUPRC** (Upstream gas supply & flare commercialization) and **NMDPRA** (Midstream/Downstream gas processing, LPG storage, bottling, and distribution).
  - **Environmental & Local Content:** **EIA Act / NESREA** environmental compliance and **NOGICD Act / NCDMB** Nigerian Content compliance, plus PIA Host Community Development Agreements.
- **Interactive Risk & Mitigation Matrix:** Display the 8 principal project risks (`Feedstock Availability`, `Offtake/Payment`, `Foreign Exchange`, `Regulatory Delay`, `Construction/Technical`, `Market Volatility`, `Security/Community`, `Funding/Cost Overrun`), their ratings (`High` / `Medium`), and concrete institutional mitigations.
- **Economic & ESG Impact Counter:** `1,500+ Direct Jobs`, `5,000+ Indirect Jobs`, Flare Gas Elimination, Diesel Self-Generation Displacement.

### SECTION 7: Institutional Data Room & Contact Footer
- **Data Room Inquiry Form:** Designed for Project Finance Officers, EPC Partners, and Industrial Offtakers. Includes a dropdown for Inquiry Type (`Senior Debt / DFI Participation`, `Strategic / EPC Equity`, `Industrial PPA Offtake`, `LPG Bulk Offtake`, `Regulatory / Compliance Verification`), Name, Institution, Email, and Message.
- **Comprehensive Footer:** Full Nigeria and USA office addresses, RC/TIN/FIRS numbers, telephone hotlines, confidentiality disclaimer (`Document Ref: GEAS/BP/2026/001 - Version 3.0`), and copyright.

---

# TECHNICAL IMPLEMENTATION REQUIREMENTS
1. **Single-File Complete Delivery:** Output a single, self-contained `index.html` file containing all semantic HTML, Tailwind CSS CDN configuration, Google Fonts (`Space Grotesk`, `Inter`, `JetBrains Mono`), custom CSS rules for technical grid hairlines, and Vanilla JS.
2. **Interactive JavaScript Features:**
   - Working tab switcher for the 3 Project Tracks (`$1.5B Masterplan`, `$8.9M First Project BOQ`, `LNG Regasification PFD`).
   - Working category filter for the `$8.9M Bill of Quantities` table (`All Items`, `Power Plant`, `LPG Plant`, `Civil & Buildings`, `Operations`) that dynamically recalculates and highlights the displayed subtotal.
   - Interactive **CCGT Efficiency & Power Output Calculator / Simulator** based on the paper's saturation pressure (20 bar to 50 bar) and stack temperature (170°C to 190°C) data table, allowing engineers to inspect howHRSG capacity and combined cycle efficiency ($\eta_{CC}$) respond at the optimal 45 bar / 190°C design point.
   - Mobile-responsive navigation drawer and smooth scrolling.
3. **Zero Placeholders:** Do not use `// TODO` or `<!-- Add rows here -->`. Write out every single BOQ row, office address, regulatory body, and thermodynamic parameter in full.