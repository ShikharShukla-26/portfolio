<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Shikhar Shukla | Developer &amp; Researcher</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&amp;display=swap" rel="stylesheet"/>
<style>
        /* Geist font placeholder using system stack for linear-like look */
        @font-face {
            font-family: 'Geist';
            src: local('System Font'), local('-apple-system'), local('BlinkMacSystemFont'), local('Segoe UI'), local('Roboto'), local('Helvetica Neue'), local('Arial'), local('sans-serif');
        }
        
        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }

        /* Subtle glow effects */
        .hover-glow:hover {
            box-shadow: 0 0 15px rgba(0, 112, 243, 0.15);
            border-color: rgba(0, 112, 243, 0.5);
        }
        
        /* Noise texture for background */
        .noise-bg {
            position: relative;
        }
        .noise-bg::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            opacity: 0.03;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            z-index: 50;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-lowest": "#0e0e0e",
                        "on-secondary-container": "#b7b5b4",
                        "surface-container-highest": "#353535",
                        "on-surface": "#e2e2e2",
                        "on-primary": "#002e6b",
                        "background": "#000000", /* Overridden to match dark theme requirement #000000 */
                        "tertiary-fixed": "#e3e2e2",
                        "on-primary-fixed-variant": "#004397",
                        "on-secondary-fixed-variant": "#474746",
                        "on-primary-container": "#ffffff",
                        "secondary-fixed": "#e5e2e1",
                        "secondary-fixed-dim": "#c8c6c5",
                        "surface-tint": "#aec6ff",
                        "tertiary-fixed-dim": "#c7c6c6",
                        "on-secondary": "#313030",
                        "surface-container-low": "#1b1b1b",
                        "primary-container": "#0070f3", /* Accent color */
                        "inverse-surface": "#e2e2e2",
                        "on-tertiary-container": "#ffffff",
                        "primary-fixed": "#d8e2ff",
                        "inverse-primary": "#0059c5",
                        "secondary": "#c8c6c5",
                        "surface": "#111111", /* Card background */
                        "primary-fixed-dim": "#aec6ff",
                        "surface-dim": "#131313",
                        "on-surface-variant": "#c1c6d7",
                        "error-container": "#93000a",
                        "on-secondary-fixed": "#1c1b1b",
                        "surface-container": "#1f1f1f",
                        "surface-bright": "#393939",
                        "on-error": "#690005",
                        "on-error-container": "#ffdad6",
                        "on-tertiary-fixed-variant": "#464747",
                        "on-background": "#e2e2e2",
                        "on-tertiary": "#303031",
                        "secondary-container": "#474746",
                        "tertiary": "#c7c6c6",
                        "on-tertiary-fixed": "#1b1c1c",
                        "error": "#ffb4ab",
                        "surface-variant": "#353535",
                        "tertiary-container": "#767676",
                        "outline": "#333333", /* Subtle borders #333 */
                        "outline-variant": "#414754",
                        "surface-container-high": "#2a2a2a",
                        "on-primary-fixed": "#001a43",
                        "primary": "#aec6ff",
                        "inverse-on-surface": "#303030"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "unit-xl": "64px",
                        "margin-desktop": "48px",
                        "margin-mobile": "16px",
                        "unit-sm": "8px",
                        "container-max": "1200px",
                        "gutter": "24px",
                        "unit-md": "16px",
                        "unit-xs": "4px",
                        "unit-lg": "32px"
                    },
                    "fontFamily": {
                        "headline-xl": ["Geist"],
                        "headline-lg-mobile": ["Geist"],
                        "label-md": ["Geist"],
                        "headline-md": ["Geist"],
                        "body-lg": ["Geist"],
                        "headline-lg": ["Geist"],
                        "body-md": ["Geist"],
                        "label-sm": ["Geist"],
                        "headline-xl-mobile": ["Geist"]
                    },
                    "fontSize": {
                        "headline-xl": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "1.2", "letterSpacing": "-0.03em", "fontWeight": "600" }],
                        "label-md": ["14px", { "lineHeight": "1.4", "letterSpacing": "0.02em", "fontWeight": "500" }],
                        "headline-md": ["24px", { "lineHeight": "1.3", "letterSpacing": "-0.02em", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "-0.01em", "fontWeight": "400" }],
                        "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.03em", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "1.6", "letterSpacing": "0em", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "500" }],
                        "headline-xl-mobile": ["36px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700" }]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-background text-on-background font-body-md antialiased selection:bg-primary-container selection:text-white noise-bg">
<!-- TopNavBar Component -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 border-b border-outline-variant/30 backdrop-blur-md">
<div class="max-w-[1200px] mx-auto flex justify-between items-center h-16 px-margin-desktop">
<div class="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface tracking-tighter">
                Shikhar Shukla
            </div>
<div class="hidden md:flex gap-gutter items-center">
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors duration-200 font-label-md text-label-md" href="#projects">Projects</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors duration-200 font-label-md text-label-md" href="#research">Research</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface transition-colors duration-200 font-label-md text-label-md" href="#about">About</a>
</div>
<div>
<a class="bg-primary-container text-white px-4 py-2 rounded-DEFAULT font-label-md text-label-md hover:opacity-90 transition-opacity active:scale-95 transition-transform duration-100 flex items-center gap-2" href="mailto:contact@example.com">
<span>Get in Touch</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</nav>
<!-- Main Content Canvas -->
<main class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop pt-[120px] pb-unit-xl">
<!-- Hero Section -->
<section class="min-h-[614px] flex flex-col justify-center items-start pt-unit-xl pb-unit-xl" id="hero">
<div class="max-w-3xl">
<h1 class="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-unit-sm tracking-tighter">
                    Shikhar Shukla
                </h1>
<p class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface-variant mb-unit-lg font-normal opacity-80">
                    Full Stack Developer &amp; Behavioral Product Researcher
                </p>
<div class="border-l-2 border-outline pl-6 mb-unit-xl py-2">
<p class="font-body-lg text-body-lg text-on-surface italic opacity-90 max-w-2xl">
                        "I build products and study why people use them the way they do."
                    </p>
</div>
<div class="flex flex-wrap gap-4 items-center">
<a class="bg-primary-container text-white px-6 py-3 rounded-DEFAULT font-label-md text-label-md hover:bg-[#0059c5] transition-colors flex items-center gap-2" href="mailto:hello@example.com">
<span class="material-symbols-outlined text-[18px]">mail</span>
                        Get in Touch
                    </a>
<a class="bg-transparent border border-outline text-on-surface px-6 py-3 rounded-DEFAULT font-label-md text-label-md hover:border-on-surface hover:bg-surface transition-all flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-[18px]">article</span>
                        Substack
                    </a>
</div>
</div>
</section>
<!-- Projects Section -->
<section class="py-unit-xl" id="projects">
<div class="flex items-center gap-4 mb-unit-lg">
<h2 class="font-headline-md text-headline-md text-on-surface">Engineering Work</h2>
<div class="h-px bg-outline flex-grow opacity-50"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<!-- Card 1 -->
<div class="group bg-surface border border-outline p-6 rounded-DEFAULT flex flex-col justify-between hover-glow transition-all duration-300 relative overflow-hidden h-[240px]">
<div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-10 transition-opacity">
<span class="material-symbols-outlined text-6xl">local_shipping</span>
</div>
<div>
<div class="flex justify-between items-start mb-4">
<h3 class="font-headline-md text-headline-md text-on-surface">Shiv Trans Inc</h3>
<span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">flag</span> USA
                            </span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-[80%]">Logistics website platform developed for a USA-based client.</p>
</div>
<div class="mt-auto pt-4 border-t border-outline/50 flex justify-between items-center">
<div class="flex gap-2">
<span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant">Next.js</span>
<span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant">TypeScript</span>
</div>
<a class="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors flex items-center gap-1" href="#">
                            View Project <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
<!-- Card 2 -->
<div class="group bg-surface border border-outline p-6 rounded-DEFAULT flex flex-col justify-between hover-glow transition-all duration-300 relative overflow-hidden h-[240px]">
<div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-10 transition-opacity">
<span class="material-symbols-outlined text-6xl">receipt_long</span>
</div>
<div>
<div class="flex justify-between items-start mb-4">
<h3 class="font-headline-md text-headline-md text-on-surface">Booksly</h3>
<span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">flag</span> UK
                            </span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-[80%]">VAT reconciliation platform engineered for complex UK tax flows.</p>
</div>
<div class="mt-auto pt-4 border-t border-outline/50 flex justify-between items-center">
<div class="flex gap-2"><span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant">Next.js</span><span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant">NestJS</span><span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant">MongoDB</span></div>
<a class="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors flex items-center gap-1" href="#">
                            View Project <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
<!-- Card 3 -->
<div class="group bg-surface border border-outline p-6 rounded-DEFAULT flex flex-col justify-between hover-glow transition-all duration-300 relative overflow-hidden h-[240px]">
<div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-10 transition-opacity">
<span class="material-symbols-outlined text-6xl">real_estate_agent</span>
</div>
<div>
<div class="flex justify-between items-start mb-4">
<h3 class="font-headline-md text-headline-md text-on-surface">Appear Appraisals</h3>
<span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">flag</span> Canada
                            </span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-[80%]">Real estate appraisal platform streamlining property evaluation.</p>
</div>
<div class="mt-auto pt-4 border-t border-outline/50 flex justify-between items-center">
<div class="flex gap-2"><span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant">React</span><span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant">Laravel</span></div>
<a class="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors flex items-center gap-1" href="#">
                            View Project <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
<!-- Card 4 -->
<div class="group bg-surface border border-outline p-6 rounded-DEFAULT flex flex-col justify-between hover-glow transition-all duration-300 relative overflow-hidden h-[240px]">
<div class="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-10 transition-opacity">
<span class="material-symbols-outlined text-6xl">medical_services</span>
</div>
<div>
<div class="flex justify-between items-start mb-4">
<h3 class="font-headline-md text-headline-md text-on-surface">OPD.CARE</h3>
<span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">public</span> Global
                            </span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant max-w-[80%]">Healthcare platform optimizing patient-doctor scheduling flows.</p>
</div>
<div class="mt-auto pt-4 border-t border-outline/50 flex justify-between items-center">
<div class="flex gap-2"><span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant">MySQL</span><span class="bg-[#1A1A1A] border border-outline px-2 py-1 rounded-sm font-label-sm text-label-sm text-on-surface-variant">React</span></div>
<a class="font-label-md text-label-md text-on-surface group-hover:text-primary-container transition-colors flex items-center gap-1" href="#">
                            View Project <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
<!-- Behavioral Research Section -->
<section class="py-unit-xl" id="research">
<div class="flex items-center gap-4 mb-unit-lg">
<h2 class="font-headline-md text-headline-md text-on-surface">How I think about products</h2>
<div class="h-px bg-outline flex-grow opacity-50"></div>
</div>
<div class="flex flex-col gap-4">
<!-- Research Item 1 -->
<a class="group block bg-surface border border-outline p-6 rounded-DEFAULT hover:border-on-surface transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4" href="#">
<div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-primary-container transition-colors">
                            "YouTube Is Not Your Problem. Tomorrow Is."
                        </h3>
<p class="font-body-md text-body-md text-on-surface-variant">An exploration of behavioral procrastination and temporal discounting in digital consumption.</p>
</div>
<div class="shrink-0">
<span class="bg-[#1A1A1A] border border-outline px-3 py-1.5 rounded-sm font-label-sm text-label-sm text-on-surface flex items-center gap-2">
                            Read Essay <span class="material-symbols-outlined text-[14px]">north_east</span>
</span>
</div>
</a>
<!-- Research Item 2 -->
<a class="group block bg-surface border border-outline p-6 rounded-DEFAULT hover:border-on-surface transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4" href="#">
<div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-primary-container transition-colors">
                            "How YouTube Controls Your Thinking Before You Notice."
                        </h3>
<p class="font-body-md text-body-md text-on-surface-variant">Analyzing algorithmic influence and the illusion of agency in suggestion-driven interfaces.</p>
</div>
<div class="shrink-0">
<span class="bg-[#1A1A1A] border border-outline px-3 py-1.5 rounded-sm font-label-sm text-label-sm text-on-surface flex items-center gap-2">
                            Read Essay <span class="material-symbols-outlined text-[14px]">north_east</span>
</span>
</div>
</a>
</div>
</section>
<!-- About Section -->
<section class="py-unit-xl border-t border-outline/30 mt-unit-lg" id="about">
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
<div class="md:col-span-4 flex justify-center md:justify-start mb-8 md:mb-0">
<div class="relative w-48 h-48 md:w-64 md:h-64 rounded-DEFAULT overflow-hidden border border-outline grayscale hover:grayscale-0 transition-all duration-500 hover-glow">
<!-- Image placeholder requiring prompt -->
<div class="w-full h-full bg-surface-container flex items-center justify-center bg-cover bg-center" data-alt="A professional, high-quality headshot of a person, clean studio lighting, neutral background, sharp focus, professional attire, for a portfolio profile picture." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGanCfv0ARR8iM8Ix2n2AuOjGIDg-hoMEMx0E553mTM-4mHUW9ZyzT-YBD-ipNvrHA-IVHiWi0OY600orfkNqZjjU6n_6C61EvndxXsF5aSAZLEl-2JLpwHF0l-bZKMkMftjQTenFtEgV0SW-Pmray7TITU4l5N7LUb_sz3-RwopTEkyHKOf479e1GjHbHlvXdEdzsEvCoy66boAHCuVgnfs9RBHKXk4noH-OEoWuLJk5HA0Zt8Y2htLUNlcUFObpSUu7PdpQKaRc');">
</div>
</div>
</div>
<div class="md:col-span-8">
<h2 class="font-headline-md text-headline-md text-on-surface mb-6">About Shikhar</h2>
<div class="font-body-lg text-body-lg text-on-surface-variant space-y-4"><p>I'm a full stack developer who got curious about why people use products the way they do. I build web applications for clients across USA, UK and Canada. On the side I write about human behavior and technology — mostly by observing myself making the same mistakes repeatedly.</p></div>
<div class="mt-8 flex gap-4">
<a class="text-on-surface-variant hover:text-primary-container transition-colors flex items-center gap-2 font-label-md text-label-md" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
<span class="material-symbols-outlined">link</span> LinkedIn
                        </a>
<a class="text-on-surface-variant hover:text-primary-container transition-colors flex items-center gap-2 font-label-md text-label-md" href="https://twitter.com" rel="noopener noreferrer" target="_blank">
<span class="material-symbols-outlined">chat</span> Twitter
                        </a>
</div>
</div>
</div>
</section>
</main>
<!-- Footer Component -->
<footer class="w-full py-unit-xl border-t border-outline-variant/30 bg-surface dark:bg-surface">
<div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-unit-md">
<div class="font-label-md text-label-md font-bold text-on-surface">
                Shikhar Shukla
            </div>
<div class="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left opacity-80">
                © 2024 Shikhar Shukla. Built for performance.
            </div>
<div class="flex gap-6">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface underline decoration-outline-variant transition-all opacity-80 hover:opacity-100" href="#">Email</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface underline decoration-outline-variant transition-all opacity-80 hover:opacity-100" href="#">Twitter</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface underline decoration-outline-variant transition-all opacity-80 hover:opacity-100" href="#">LinkedIn</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface underline decoration-outline-variant transition-all opacity-80 hover:opacity-100" href="#">Substack</a>
</div>
</div>
</footer>
</body></html>