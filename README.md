
You are an expert full-stack web developer and UI/UX designer tasked with building the Relate Wellness Website for clinical psychologist Grant Strong. The website is the public digital gateway to the Relate Wellness ecosystem and must prioritise clarity, professionalism, speed, accessibility, and privacy-first design. Follow the requirements in this document to generate clean, semantic HTML, modern responsive CSS, and lightweight JavaScript suitable for deployment on a static hosting platform such as Cloudflare Pages or Netlify. The site must be mobile-first, accessible, SEO-friendly, and must never store clinical or psychometric data.

Relate Wellness Website
Website Name: Relate Wellness

1. Technology Stack (Implementation First)
The Relate Wellness website must be built using a modern static-first web architecture optimised for speed, security, and low maintenance.
Development Environment
IDE:
Visual Studio Code
Recommended extensions:
• Prettier
• Live Server
• HTML CSS Support
• GitHub Copilot (optional AI assistant)

Frontend Technologies
HTML5
Used for:
• semantic page structure
• accessibility
• SEO
CSS3
Used for:
• responsive layout
• visual design
Preferred styling system:
• Tailwind CSS
JavaScript
Used for:
• navigation behaviour
• UI interactions
• tool embedding
• analytics triggers
Heavy frameworks are not required.

Version Control
Git
Repository hosting:
GitHub
Benefits:
• version history
• automated deployment
• collaboration with AI tools

Hosting / Deployment
Preferred platform:
Cloudflare Pages
Alternative:
Netlify
Benefits:
• global CDN
• fast page loading
• free SSL
• easy Git-based deployment

Media Storage
Cloudflare R2
Used for:
• audio files
• large media assets

Analytics
Privacy-friendly analytics tools:
• Plausible Analytics
• Fathom Analytics
Tracked metrics:
• page visits
• CTA clicks
• tool usage

External Platform Integrations
Relate Wellness Platform (Quenza)
Used for:
• digital mental health programs
NovoPsych
Used for:
• psychometric assessments
WhatsApp booking link
Used for:
• therapy session scheduling

2. Purpose of this Document
This document provides clear structured instructions for AI-assisted website development using an IDE such as Visual Studio Code.
The document is written so that:
• AI coding tools can interpret requirements easily
• developers can implement architecture quickly
• the website can be deployed as a fast static application

3. Product Overview
The Relate Wellness website serves as the digital front door to the Relate Wellness digital mental health ecosystem.
The website must:
• establish credibility and trust
• explain services and programs
• route visitors to therapy, programs, or tools
• embed interactive mental health tools
• connect users to external platforms
The website must not store clinical data.

4. Product Goals
Primary Goals
	1. Establish professional credibility.
	2. Convert visitors into therapy enquiries or program participants.
	3. Provide clear pathways to services.
	4. Integrate with external digital health platforms.
Secondary Goals
• support mental health education
• support thought leadership
• allow future expansion into digital mental health technology

5. Target Users
Primary Audience
Adults seeking:
• psychotherapy
• burnout recovery
• emotional regulation support
• relationship support
Secondary Audience
Professionals seeking:
• executive coaching
• leadership psychology insights
Tertiary Audience
General public seeking:
• mental health knowledge
• self-assessment tools

6. Compliance and Data Protection
The website must follow privacy-first design principles.
Compliance Targets
• POPIA (South Africa)
• GDPR principles
Critical Requirement
The website must never store:
• psychometric responses
• therapy notes
• diagnostic information
Clinical data remains within:
• NovoPsych
• Relate Wellness Platform (Quenza)

7. Website Structure (Site Map)
Pages:
	1. Home
	2. Work With Grant
	3. Therapy Services
	4. Corporate Services
	5. Digital Programs
	6. Insights
	7. Mental Health Tools
	8. Start Here
	9. Contact
Global components:
• Header navigation
• Footer navigation
• Primary CTA button
• Mobile navigation menu

8. Page Specifications
Home
Purpose: introduce Relate Wellness and route visitors.
Sections:
• hero section
• value proposition
• three pathway cards
Pathways:
• therapy
• programs
• professional / self-leadership
Primary CTAs:
• book a session
• explore programs
• try a mental health tool

Work With Grant
Purpose: establish credibility.
Content:
• professional biography
• qualifications
• therapy approach
• who the services are for
CTA:
• book consultation

Therapy Services
Purpose: explain therapy process.
Sections:
• individual therapy
• couples therapy
• executive coaching
Process explanation:
1 consultation
2 assessment
3 personalised treatment
4 progress measurement

Corporate Services
Purpose: explain organisational consulting services.
Content:
• leadership coaching
• burnout prevention
• organisational mental health

Digital Programs
Purpose: showcase Relate Wellness programs.
Programs include:
• STRONG AGAIN – burnout recovery
• Vibe Check – teen mental health
• Finding Me
• Self-Compassion program
Each program card must include:
• description
• who it helps
• program format
• CTA button

Insights
Purpose: thought leadership and education.
Content types:
• articles
• podcast episodes
• research insights

Mental Health Tools
Purpose: interactive engagement.
Examples:
• burnout screening
• mood check-in
• schema insight quiz
Tools must be embedded via iframe.

Start Here
Purpose: client onboarding guidance.
Steps:
1 book consultation
2 complete intake forms
3 access Relate Wellness Platform
4 begin therapy or programs

Contact
Content:
• WhatsApp booking link
• email contact
• professional registration details

9. Project Folder Structure
relatewellness-site
index.html
work-with-grant.html
therapy-services.html
corporate-services.html
programs.html
tools.html
insights.html
start-here.html
contact.html
css/
styles.css
js/
main.js
assets/
images/
icons/
audio/
components/
header.html
footer.html
navigation.html

10. Performance Requirements
Requirements:
• image compression
• lazy loading
• WebP images
• minimal JavaScript
Target load time:
Less than 2 seconds on mobile.

11. Accessibility Requirements
• keyboard navigation
• alt text for images
• readable colour contrast
• semantic HTML

12. SEO Requirements
• semantic HTML structure
• meta titles and descriptions
• OpenGraph metadata
• sitemap.xml
• robots.txt

13. Future Expansion
Architecture must support:
• additional tools
• new programs
• membership areas
• dedicated application platform
Example future platform:
app.relatewellness.co.za

14. Final Vision
The Relate Wellness website will function as a calm, professional digital gateway to psychological care.
It connects therapy services, digital programs, knowledge, and tools while maintaining strong ethical and privacy standards.
The architecture should allow Relate Wellness to evolve into a scalable digital mental health ecosystem originating in Africa.
<img width="1460" height="11830" alt="image" src="https://github.com/user-attachments/assets/83489207-3da3-4e07-96d7-22bcccd4f114" />
