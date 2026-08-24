# Mohamed Nabil — Portfolio Customization Content

This file is a **content source for customizing the existing portfolio template**.  
It intentionally does **not** introduce a new website structure or new sections.  
Use the existing template structure and replace its placeholder content with the material below.

---

## Identity

**Name:** Mohamed Nabil

**Professional Positioning:** Data Analyst / AI Automation & Data Analyst

**Current Status:** Information Technology student at 6 October Technological University, Cairo, Egypt.

**Education:**  
Information Technology — 6 October Technological University  
2023 – Expected 2027  
GPA: Excellent

**Email:** mohamed2nabil5@gmail.com  
**Phone:** +201145252173  
**LinkedIn:** https://www.linkedin.com/in/mohamed-nabil-41047a223/  
**GitHub:** https://github.com/mohamed2nabil

---

## Core Professional Narrative

Mohamed Nabil is a detail-oriented Data Analyst with a strong foundation in Python, SQL, Power BI, and Microsoft Excel. His work focuses on turning raw and complex datasets into structured, validated, and understandable information that supports decision-making.

The portfolio should present him as someone who does more than create charts:

- Understands the underlying business or research question.
- Cleans and validates raw datasets before analysis.
- Chooses analytical methods according to the problem.
- Builds KPIs and meaningful measures rather than only displaying numbers.
- Converts analysis into dashboards, statistical findings, or decision-ready insights.
- Can work across SQL, Python, Power BI, Excel, data collection, and automation.

A strong overall positioning line:

**“I turn raw data into clear insights, measurable KPIs, and decision-ready analytics.”**

Another suitable positioning:

**“Data Analyst focused on turning complex datasets into actionable insights through analysis, statistical methods, and interactive dashboards.”**

---

## Technical Profile

### Programming & Querying
- Python
- SQL
- MySQL
- PostgreSQL

### Data Science & Analysis
- pandas
- NumPy
- matplotlib
- seaborn
- scikit-learn
- Statistical analysis
- Exploratory Data Analysis
- Data cleaning and validation

### BI & Visualization
- Power BI
- DAX
- Power Query
- M Language
- Microsoft Excel
- Pivot Tables
- Advanced charts
- Data modeling
- Interactive dashboards

### Data Collection & Automation
- BeautifulSoup
- Scrapy
- Web scraping
- Geocoding
- Git
- GitHub
- n8n automation
- Workflow automation
- API integrations

### Statistical / Research Methods represented in projects
- Descriptive statistics
- Correlation analysis
- Multiple Linear Regression / OLS
- ARIMA / Box-Jenkins time-series analysis
- One-Way ANOVA
- Two-Way ANOVA
- Interaction analysis
- Tukey HSD
- Psychometric analysis
- Reliability analysis
- Internal consistency
- Validity analysis

---

## Project Portfolio — Recommended Project Content

### Retail Sales Data Analysis — SQL

**Repository:**  
https://github.com/mohamed2nabil/sql_analysis

**Focus:** Retail sales, customer behavior, category performance, business KPIs.

**Story:**  
The project starts with raw retail transactions and turns them into structured business analysis. Data quality is checked before the actual business questions are answered. The analysis then moves from sales performance and category behavior to customer segmentation, seasonality, transaction value, and operational timing.

**What was done:**
- Checked NULL values and data completeness.
- Validated transaction integrity and consistency.
- Used PostgreSQL for analytical querying.
- Analyzed sales by category.
- Examined customer demographics and behavior.
- Identified high-value transactions.
- Performed gender/category comparisons.
- Analyzed seasonal performance.
- Ranked top customers.
- Segmented customers by category.
- Analyzed order distribution by time shift.

**Technical depth:**
- CTEs
- Subqueries
- Window functions
- `RANK()`
- `PARTITION BY`
- `SUM()`
- `COUNT()`
- `AVG()`
- `ROUND()`
- `CASE WHEN`
- Date/time extraction
- Multi-dimensional aggregation

**Portfolio takeaway:**  
This is a strong example of using SQL as an analytical tool, not just as a way to retrieve records.

---

### Business Sales Dashboard — Excel

**Repository:**  
https://github.com/mohamed2nabil/sales-dashbord

**Focus:** Sales performance, profitability, customer growth, regional analysis, KPI monitoring.

**Core dashboard metrics documented in the repository:**
- Sales Revenue: $754,941 — 86% of target.
- Profit Margin: $891,111 — 85% of target.
- Customer Base: 9,360 customers — 84% of target.
- Monthly customer growth and seasonal patterns.

**What was done:**
- Built an interactive Excel business dashboard.
- Added monthly and quarterly analysis.
- Compared performance across multiple regions.
- Created sales trend analysis.
- Built regional profitability analysis.
- Tracked customer acquisition trends.
- Used target-versus-actual KPI indicators.

**Excel capabilities used:**
- Pivot Tables
- Interactive slicers
- Conditional formatting
- Dynamic charts
- Data connections / refresh
- Data summarization
- KPI cards

**Portfolio takeaway:**  
Shows the ability to take spreadsheet-based business data and turn it into an executive-friendly monitoring dashboard.

---

### UK Train Analytics Dashboard — Power BI

**Repository:**  
https://github.com/mohamed2nabil/UK-Train-Analytics-Dashboard

**Focus:** Revenue, journey reliability, payment preferences, station performance.

**Workflow:**
- Loaded raw train data.
- Handled missing values.
- Standardized data types.
- Analyzed journey status, ticket types, pricing, and business drivers.
- Created custom DAX measures.
- Designed a high-contrast interactive dashboard.

**KPIs documented:**
- Total Revenue: £742K
- Rolling 3M Revenue: £536K
- On-Time Performance: 87%
- MoM Growth: 34%

**Key insights documented:**
- London Kings Cross is the top-performing station by revenue.
- Credit cards account for roughly 63% of payment usage.
- 76% of journeys are on time.
- Delayed and cancelled journeys are clearly identified for further investigation.

**Portfolio takeaway:**  
A strong example of the workflow from raw operational data → cleaning → KPI design → dashboard → business interpretation.

---

### Saudi Districts Scraper & Geocoder — Python

**Repository:**  
https://github.com/mohamed2nabil/Saudi-Districts-Scraper-Geocoder-

**Focus:** Automated data collection, cleaning, geographic enrichment, and automation-ready data preparation.

**What was done:**
- Scraped Saudi cities and districts.
- Handled pagination.
- Cleaned district names.
- Removed numbering and textual noise with Regex.
- Geocoded locations to obtain latitude and longitude.
- Structured the output for downstream data workflows.
- Produced clean Excel output designed for later JSON conversion and automation workflows such as n8n.

**Libraries documented:**
- requests
- BeautifulSoup
- pandas
- openpyxl
- geopy
- arabic-reshaper
- python-bidi

**Portfolio takeaway:**  
This project demonstrates an important part of the analytics pipeline that is often invisible in dashboards: collecting messy external data, cleaning it, enriching it, and preparing it for automated use.

---

### Employee Survey Analysis Dashboard — Power BI

**Repository:**  
https://github.com/mohamed2nabil/Employee-Survey-Analysis-Dashboard

**Focus:** Employee engagement, sentiment, departmental performance, HR analytics.

**Dataset / metrics documented:**
- 15K+ responses
- 99% completion rate
- Average response score: 2.98

**What was done:**
- Cleaned and structured survey data.
- Handled different Likert-scale response types.
- Built KPI measures using DAX.
- Compared agree/disagree sentiment distributions.
- Benchmarked Staff, Supervisor, Manager, and Director results.
- Compared departmental performance.

**Key insights documented:**
- 99% completion created a strong analytical base.
- Sentiment differences were visible between leadership and operational staff.
- Human Resources and Public Works were identified as priority areas for follow-up.
- Several departments showed strong “Strongly Agree” response patterns.

**Portfolio takeaway:**  
Shows how survey data can be translated into organizational KPIs and management-facing insights.

---

### Saudi Banking Sector Analysis — Power BI

**Repository:**  
https://github.com/mohamed2nabil/problem-analysis-in-suide-arabe-with-power-bi

**Focus:** Banking complaints, service quality, regional differences, institutional performance.

**Dataset / metrics documented:**
- 600+ complaint cases analyzed.
- 80% resolved.
- 20% pending.
- Coverage across Southern, Eastern, and Central Saudi regions.

**What was done:**
- Cleaned and transformed complaint data.
- Standardized Arabic text and geographic information.
- Categorized complaint types.
- Built time-based complaint analysis from 2019–2024.
- Created regional filtering.
- Compared institutions.
- Built complaint resolution KPIs.

**Technical methods documented:**
- Power BI Desktop
- Power Query
- M Language
- DAX
- Arabic / RTL presentation
- Power BI Service

**Key insights documented:**
- Complaint volume varied by institution.
- The Central region showed concentrated banking activity.
- 80% of complaints were documented as resolved.
- Complaint activity peaked around 2020–2021.
- Regional and institutional differences can support service-quality improvement.

**Portfolio takeaway:**  
A strong example of localized analytics: the work combines data transformation, Arabic presentation, KPI design, regional analysis, and service-quality interpretation.

---

### Nashville Traffic Safety Analytics — Power BI

**Repository:**  
https://github.com/mohamed2nabil/uk-death-project-with-power-bi

**Focus:** Traffic safety, risk factors, temporal patterns, lighting conditions.

**Dataset / metrics documented:**
- 216,113 traffic incidents.
- 89,585 victims.
- 88,760 injuries.
- 825 fatalities.
- 26.16% hit-and-run rate.
- 56,930 victims recorded under daylight conditions.

**What was done:**
- Cleaned and validated traffic records.
- Removed duplicates and inconsistent entries.
- Standardized dates and categorical fields.
- Created calculated analytical fields.
- Built DAX measures.
- Added time and condition filters.
- Examined hit-and-run behavior.
- Compared vacation and non-vacation periods.
- Analyzed lighting conditions.
- Compared weekly and quarterly patterns.

**Key insights documented:**
- Daylight accounted for the largest victim category in the dataset.
- More than one quarter of accidents were classified as hit-and-run.
- Accident patterns varied across vacation periods.
- Weekdays showed higher risk than weekends.
- Lighting conditions highlighted potential infrastructure and safety priorities.

**Portfolio takeaway:**  
Demonstrates analysis of a large real-world dataset and the ability to convert safety data into practical risk indicators.

---

### Road Accident Dashboard — Excel

**Repository:**  
https://github.com/mohamed2nabil/ROAD-ACCIDENT-DASHBOARD-BY-EXCEL

**Focus:** Road safety, casualties, accident severity, environmental conditions.

**Metrics documented:**
- Total casualties: 417,883
- Fatal: 7,135
- Serious: 59,312
- Slight: 351,436

**What was done:**
- Structured and cleaned accident statistics before visualization.
- Built interactive dashboard views.
- Compared 2021 vs 2022.
- Filtered by area type, lighting conditions, and accident date.
- Examined road type and vehicle involvement.
- Analyzed casualty distributions.

**Key findings documented:**
- Rural areas recorded a higher accident rate than urban areas.
- Daylight represented a large share of reported accidents.
- Dry roads were common in the reported accident data.
- The dashboard was designed to support road-safety and infrastructure decisions.

**Portfolio takeaway:**  
Useful proof of Excel-based data modeling and dashboarding alongside Power BI work.

---

### Forecasting Net Foreign Direct Investment in Egypt — Python / Statistics

**Repository:**  
https://github.com/mohamed2nabil/Forecasting-Net-Foreign-Direct-Investment-FDI-in-Egypt-1999-2026-

**Focus:** Statistical modeling and time-series forecasting of Net Foreign Direct Investment in Egypt.

**Academic context documented in the repository:**
- Cairo University — Faculty of Graduate Studies for Statistical Research.
- Project title: نموذج إحصائي مقترح للتنبؤ بصافي الاستثمارات الأجنبية.
- Supervised by Dr. Salah Mahdy.
- Data period: 1999–2026 forecasting context.

**Workflow:**
- Started from a time-series dataset in SPSS format.
- Performed data cleaning and exploratory analysis in Python.
- Applied descriptive statistics.
- Examined correlations.
- Used OLS / multiple linear regression to study relationships.
- Used ARIMA / Box-Jenkins to model the time series.
- Used ACF/PACF diagnostics.
- Produced a forecast visualization for 2025–2026.

**Key documented findings:**
- Shapiro-Wilk normality testing was reported with P > 0.05 for the dependent variable.
- Current FDI and the previous year's value showed a strong positive correlation of r = 0.833.
- The proposed ARIMA(1,1,0) model was used to forecast the investment trend for 2025–2026 with confidence intervals.

**Portfolio takeaway:**  
This project expands the profile beyond dashboards into formal statistical analysis, model selection, diagnostics, and forecasting.

---

### EduMetric Analyzer — Statistical / Educational Research

**Repository:**  
https://github.com/mohamed2nabil/EduMetric-Analyze

**Focus:** Statistical analysis of educational and psychometric instruments.

**What the project provides:**
- Spreadsheet and PDF-based statistical analysis tools.
- Analysis of cognitive tests.
- Analysis of attitude scales.
- Specification tables.
- Reliability and validity calculations.

**Analytical capabilities documented:**
- Item difficulty
- Item discrimination
- Cognitive / affective / behavioral dimensions
- Cronbach’s alpha
- Split-half reliability
- Internal consistency validity
- Correlation with total score
- Discriminant validity for extreme groups

**Documented expected outcome:**
- Validation of the quality of research instruments.
- High reliability values in example models, reaching 0.91.

**Portfolio takeaway:**  
Shows exposure to applied statistics and research methodology, especially for academic and educational measurement.

---

### Cycling Performance Analysis — Statistical Research

**Repository:**  
https://github.com/mohamed2nabil/Cycling-Performance-Analysis

**Focus:** Statistical investigation of rider specialization and stage topography.

**Academic context:**
The repository describes the project as a complete statistical analysis prepared for a Master's application in Data Science at TU Dortmund.

**Research question:**
How does rider specialization, such as Sprinter or Climber, interact with stage topography such as Flat, Hilly, or Mountain to affect performance?

**Methodology:**
- One-Way ANOVA
- Two-Way ANOVA with interaction
- Tukey HSD
- Grouped boxplots
- Interaction plots

**Key documented finding:**
The Two-Way ANOVA identified a statistically significant interaction between rider class and stage type.

Reported result:
**F(6, 588) = 16.653, p < 0.001**

The interaction was reported as explaining approximately **13.9% of variance**.

**Portfolio takeaway:**  
This is a strong statistical storytelling project because it starts with a research question, tests a hypothesis using inferential statistics, and translates the result into a practical interpretation: performance depends on the match between rider specialization and stage characteristics.

---

### Movie Data Visualization — Python

**Repository:**  
https://github.com/mohamed2nabil/python-protofil

**Focus:** Exploratory data analysis of the movie industry.

**What was done:**
- Cleaned a large movie dataset.
- Performed exploratory analysis.
- Studied genre performance.
- Examined budget-versus-revenue relationships.
- Investigated investment opportunities.
- Created bar charts, scatter plots, correlation matrices, and distribution plots.

**Libraries:**
- pandas
- NumPy
- matplotlib
- seaborn

**Documented findings:**
- Action and Adventure were reported among the highest average revenue genres.
- Horror showed strong ROI despite lower budgets.
- A budget/revenue correlation of r = 0.74 was reported.
- The repository identified a mid-budget range of approximately $20M–$50M as attractive for profit margins.
- It also reported Q2 as a strong release period in the analyzed data.

**Portfolio takeaway:**  
Shows the Python/EDA side of the profile and the ability to use visualization for exploratory reasoning rather than dashboarding alone.

---

## Master's Student / Academic Analytics Storytelling

This should be treated as a **professional service / impact narrative only where it accurately reflects the actual work performed**.

Core story:

**“Some of my statistical analysis work started from real research questions rather than predefined dashboards. I helped Master's-level students turn research requirements into analyzable data, clean and structure datasets, select appropriate KPIs and statistical methods, and translate the results into clear findings they could use in their academic work.”**

A stronger storytelling version:

**“The goal was never simply to calculate numbers. The work started with the researcher’s question, then moved through data cleaning, validation, analysis, KPI/statistical selection, visualization, and interpretation. This helped turn raw research data into results that were easier to understand, defend, and use in the final research.”**

The portfolio should emphasize the workflow:

**Research question → Data preparation → Cleaning & validation → Method selection → KPI / statistical analysis → Visualization → Interpretation → Actionable conclusion**

The impact language should remain evidence-based. Do not claim a specific number of students, grades, publications, or thesis outcomes unless that information is supplied separately.

---

## Research / Statistical Storytelling Positioning

For statistical projects, present the work as a sequence of reasoning rather than a list of charts:

**Problem:** What research or business question needed an answer?

**Data:** What was collected, and what problems existed in the raw data?

**Preparation:** How were missing values, inconsistencies, formats, duplicates, or textual issues handled?

**Method:** Why was SQL analysis, regression, ANOVA, ARIMA, psychometric analysis, or dashboarding appropriate?

**Evidence:** What KPI, statistical test, relationship, trend, or interaction was found?

**Meaning:** What does the result actually imply?

This is particularly strong for:
- FDI forecasting
- Cycling performance analysis
- EduMetric
- Saudi banking complaints
- Employee survey analysis

---

## Data Cleaning Positioning

The portfolio should make data cleaning visible as a core analytical skill rather than a hidden technical step.

Use wording around:
- Missing-value handling
- Duplicate removal
- Data-type standardization
- Text normalization
- Category standardization
- Validation checks
- Data integrity
- Geographic standardization
- Outlier / consistency checks where applicable
- Structured transformation
- Automation-ready outputs

A useful concise message:

**“Before the dashboard or statistical model, I make the data trustworthy.”**

---

## Dashboard Philosophy

The dashboards in the portfolio should be described as decision-support tools rather than screenshots.

Core process:

**Raw data → cleaned model → KPIs → interactive visuals → patterns → decision support**

Emphasize that dashboards were built to answer questions such as:
- What is happening?
- Where is it happening?
- When is it happening?
- Which group / category / institution performs differently?
- Which KPI is above or below target?
- What requires further investigation?

---

## Strong Portfolio Keywords

Use these naturally across existing template content:

**Data Analysis, Data Cleaning, Data Validation, Exploratory Data Analysis, KPI Development, Business Intelligence, Power BI, DAX, Power Query, Excel, SQL, PostgreSQL, MySQL, Python, pandas, NumPy, Statistical Analysis, Time-Series Forecasting, ARIMA, Regression, ANOVA, Data Visualization, Web Scraping, Geocoding, Automation, n8n, Research Analytics, Dashboard Development, Decision Support.**

---

## Recommended Project Ordering

For a professional data analyst portfolio, the strongest first impression is:

1. UK Train Analytics Dashboard
2. Retail Sales / SQL Analysis
3. Saudi Banking Sector Analysis
4. Employee Survey Analysis
5. Nashville Traffic Safety Analytics
6. Saudi Districts Scraper & Geocoder
7. FDI Forecasting
8. Cycling Performance Statistical Analysis
9. EduMetric Analyzer
10. Road Accident Dashboard
11. Movie Data Visualization

This ordering balances business analytics, BI, Python/data engineering, and statistical research.

---

## GitHub Profile / Portfolio Links

GitHub profile:

https://github.com/mohamed2nabil

Key repositories reviewed for this portfolio content:

- https://github.com/mohamed2nabil/sales-dashbord
- https://github.com/mohamed2nabil/UK-Train-Analytics-Dashboard
- https://github.com/mohamed2nabil/Saudi-Districts-Scraper-Geocoder-
- https://github.com/mohamed2nabil/Employee-Survey-Analysis-Dashboard
- https://github.com/mohamed2nabil/problem-analysis-in-suide-arabe-with-power-bi
- https://github.com/mohamed2nabil/Forecasting-Net-Foreign-Direct-Investment-FDI-in-Egypt-1999-2026-
- https://github.com/mohamed2nabil/EduMetric-Analyze
- https://github.com/mohamed2nabil/Cycling-Performance-Analysis
- https://github.com/mohamed2nabil/ROAD-ACCIDENT-DASHBOARD-BY-EXCEL
- https://github.com/mohamed2nabil/sql_analysis
- https://github.com/mohamed2nabil/python-protofil
- https://github.com/mohamed2nabil/uk-death-project-with-power-bi

---

## Source / Accuracy Notes

### CV-supported facts
The uploaded CV supports:
- Name and contact details.
- Information Technology education at 6 October Technological University.
- Expected graduation in 2027.
- Excellent GPA.
- Python, SQL, Power BI, Excel, Git, GitHub, n8n, and listed libraries.
- The CV projects: Retail Sales Data Analysis, Banking Analytics Dashboard, Traffic Safety Analytics Dashboard, Road Accident Analytics Dashboard, and Movie Data Visualization.
- DataCamp and HackerRank certificates in Python, SQL, and Data Analysis.
- Arabic native proficiency and English professional proficiency.

### GitHub-supported additions
The reviewed repositories add:
- UK Train Analytics.
- Saudi district scraping/geocoding.
- Employee survey analytics.
- Saudi banking complaint analysis.
- FDI forecasting.
- EduMetric statistical/psychometric tooling.
- Cycling statistical analysis.
- More detailed SQL retail analysis.
- More detailed Python movie analysis.
- Nashville traffic analysis.

### Important wording discipline
Some GitHub README files contain broad claims such as regulatory compliance, exact refresh performance, and operational deployment characteristics. Do not copy those claims into a personal portfolio as professional experience unless they accurately describe what Mohamed actually implemented and can defend.

The portfolio should prioritize:
**what was analyzed, how the data was prepared, what methods were used, what was discovered, and why the result mattered.**
