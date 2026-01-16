export const funnelConfig = {
  "meta": {
    "version": 1,
    "theme": {
      "mode": "dark",
      "library": "headlessui",
      "immersive": true
    },
    "notes": "All links are internal page ids or external checkout/application URLs that you can swap without touching code."
  },
  "startPageId": "free_book_optin",
  "pages": {
    "free_book_optin": {
      "id": "free_book_optin",
      "type": "lead_magnet",
      "slug": "/free-website-revenue-guide",
      "title": "Fix Your Website Revenue Leaks",
      "hero": {
        "headline": "Your \"professional\" website might be leaking revenue every month.",
        "subheadline": "Tie Up Loose Ends is a strategic guide for growth-stage business owners to find conversion leaks, choose the right investment level, and turn your site into a revenue system—not a static brochure.",
        "imageKey": "free_book_cover"
      },
      "countdown": {
        "title": "Limited Time Bonus Offer",
        "subtitle": "Get the Rapid Audit Checklist when you download today.",
        "label": "Bonus Expires In",
        "timer": { "days": "00", "hours": "00", "minutes": "15", "seconds": "00" }
      },
      "features": [
        "Identify conversion leaks, bounce triggers, and friction points",
        "Stop guessing: template vs agency vs custom using ROI-based logic",
        "Follow a phased rollout plan (Weeks 1–24) so improvements compound"
      ],
      "primaryCta": {
        "label": "Get the Free Book",
        "action": "opt_in",
        "nextPageId": "thank_you_segment"
      },
      "bonuses": [
        {
          "title": "Bonus: Website Essentials Guide",
          "imageKey": "website_essentials_guide",
          "description": "A comprehensive roadmap covering what you need to get started and a step-by-step guide to building your first basic website.",
          "items": [
            "Core Requirements",
            "Platform Selection",
            "Design & Structure",
            "Launch Process"
          ]
        }
      ],
      "footer": {
        "tagline": "Instant download. No fluff. Actionable framework.",
        "description": "Built for owners who want their website to generate revenue over time—lead capture, credibility, automation, performance, and compliance."
      },
      "noThankYou": {
        "label": "No thanks, I’ll skip the free guide",
        "nextPageId": "social_media_uncensored_book"
      }
    },
    "thank_you_segment": {
      "id": "thank_you_segment",
      "type": "thank_you_segmentation",
      "slug": "/thank-you-segment",
      "title": "Your Guide Is On Its Way",
      "hero": {
        "headline": "Your guide is on the way.",
        "subheadline": "Check your inbox (and spam folder) in the next 5 minutes. Now choose your fastest next step—so you don't get stuck in \"I'll fix the website later.\""
      },
      "sectionTitle": "Which scenario best describes your current situation?",
      "segments": [
        {
          "id": "segment_underperforming_site",
          "label": "My website exists, but it's underperforming",
          "description": "If you have traffic (or even modest traffic) but leads don't match the opportunity, start here.",
          "icon": "<svg class=\"w-8 h-8\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\"></path></svg>",
          "buttonText": "Diagnose My Website",
          "nextPageId": "diagnose_site_offer"
        },
        {
          "id": "segment_rebrand",
          "label": "I need to transform my brand from the ground up",
          "description": "If you need comprehensive brand strategy, positioning, and messaging developed with expert guidance.",
          "icon": "<svg class=\"w-8 h-8\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z\"></path></svg>",
          "buttonText": "Explore Brand Workshop",
          "nextPageId": "brand_workshop_application"
        },
        {
          "id": "segment_done_for_you",
          "label": "I want someone to do it all for me",
          "description": "If you want a complete done-for-you implementation—from audit to launch to ongoing optimization.",
          "icon": "<svg class=\"w-8 h-8\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\"></path></svg>",
          "buttonText": "Apply for Done-For-You",
          "nextPageId": "done_for_you_application"
        },
        {
          "id": "segment_attention",
          "label": "I need more attention/content growth",
          "description": "If your main constraint is traffic and attention, not the site itself.",
          "icon": "<svg class=\"w-8 h-8\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 10V3L4 14h7v7l9-11h-7z\"></path></svg>",
          "buttonText": "Show Me the Viral System",
          "nextPageId": "viral_system_offer"
        },
        {
          "id": "segment_everything",
          "label": "I want everything (systems + implementation paths)",
          "description": "If you're building long-term skills and want the full library + playbooks.",
          "icon": "<svg class=\"w-8 h-8\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10\"></path></svg>",
          "buttonText": "Explore The Vault",
          "nextPageId": "vault_offer"
        },
        {
          "id": "segment_fast_site",
          "label": "I need a website built fast (3 days)",
          "description": "If you need a live, working website with hands-on guidance—launched in 3 focused days.",
          "icon": "<svg class=\"w-8 h-8\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"></path></svg>",
          "buttonText": "Build Your Website in 3 Days",
          "nextPageId": "build_website_3_days_workshop"
        },
        {
          "id": "segment_simple_site",
          "label": "I need a clean, simple website",
          "description": "If you want a professional, high-performing website without a full brand overhaul or complex functionality.",
          "icon": "<svg class=\"w-8 h-8\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\"></path></svg>",
          "buttonText": "Start My Website Build",
          "nextPageId": "website_plans_page"
        },
        {
          "id": "segment_funnel_build",
          "label": "I need a funnel that converts",
          "description": "If you’re ready to capture leads or sales with a done-for-you funnel—including pages, automation, and tracking.",
          "icon": "<svg class=\"w-8 h-8\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z\"></path></svg>",
          "buttonText": "Build My Funnel",
          "nextPageId": "funnel_plans_page"
        }
      ]
    },
    "diagnose_site_offer": {
      "id": "diagnose_site_offer",
      "type": "tripwire_dual_offer",
      "slug": "/diagnose-my-website",
      "title": "Diagnose Your Underperforming Website",
      "hero": {
        "headline": "Stop guessing what's wrong with your website.",
        "subheadline": "Get a clear diagnosis of conversion leaks, friction points, and the highest-ROI fixes—so you know exactly what to do next.",
        "imageKey": "audit_dashboard"
      },
      "countdown": {
        "title": "Limited Time Bonus Offer",
        "subtitle": "Get the 'What is a Sales Funnel' Ebook FREE when you purchase today. This bonus is only available while the timer is active.",
        "label": "Bonus Expires In",
        "timer": { "days": "00", "hours": "00", "minutes": "15", "seconds": "00" }
      },
      "bonuses": [
        {
          "title": "Bonus: Free Ebook – What is a Sales Funnel",
          "imageKey": "sales_funnel_ebook",
          "description": "Receive this comprehensive guide for free when you purchase today.",
          "items": [
             "Understanding Funnel Mechanics", 
             "Conversion Strategies", 
             "Traffic Sources"
          ]
        }
      ],
      "offers": [
        {
          "id": "marketing_audit_47",
          "name": "Marketing Audit",
          "price": 47,
          "image": "https://www.genspark.ai/api/files/s/Ad6K2mTq",
          "priceDisplay": "$47",
          "description": "Best if you want the roadmap and you (or your team) will implement.",
          "includes": [
            "Prioritized list of leaks + fixes",
            "Right-sized investment guidance",
            "Implementable next-step plan",
            "Written for non-technical owners",
            "Delivered within 3-5 business days"
          ],
          "primaryCta": {
            "label": "Get the $47 Audit",
            "action": "checkout",
            "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/b8PxXG8Y"
          }
        },
        {
          "id": "marketing_audit_297",
          "name": "Audit + Strategy Call",
          "price": 297,
          "image": "https://www.genspark.ai/api/files/s/rLm1r8V2",
          "priceDisplay": "$297",
          "tag": "MOST POPULAR",
          "description": "Best if you want the roadmap plus help confirming priorities and sequencing.",
          "includes": [
            "Everything in Marketing Audit",
            "60-minute strategy call",
            "Priority sequencing guidance",
            "Live Q&A and clarification",
            "Recording of the session"
          ],
          "primaryCta": {
            "label": "Get the $297 Audit + Call",
            "action": "checkout",
            "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/v8O2X1m2"
          }
        }
      ],
      "features": [
        { "title": "Conversion leaks", "description": "Where people drop" },
        { "title": "Bounce triggers", "description": "What makes people leave fast" },
        { "title": "Friction points", "description": "What adds hesitation" },
        { "title": "Trust gaps", "description": "Credibility blockers" },
        { "title": "Tracking issues", "description": "You can't improve what you can't measure" },
        { "title": "Cost of waiting", "description": "What the delay is actually costing" }
      ],
      "outcomes": [
        { "title": "What to fix first", "description": "highest ROI" },
        { "title": "What can wait", "description": "lowest ROI" },
        { "title": "What level of rebuild fits your stage", "description": "not your ego" },
        { "title": "What to track", "description": "so improvements compound" }
      ],
      "faqs": [
        {
          "question": "Who is this for?",
          "answer": "Growth-stage owners and teams who want a website that performs: leads, credibility, tracking, automation."
        },
        {
          "question": "What if I'm not technical?",
          "answer": "That's fine. The audit is written to be understood by non-technical owners, and can be handed directly to a designer/developer."
        },
        {
          "question": "Should I choose $47 or $297?",
          "answer": "Choose $47 if you just want the plan. Choose $297 if you want help prioritizing, sequencing, and confirming what will move revenue fastest."
        },
        {
          "question": "Is the audit a \"website critique\"?",
          "answer": "No. It's a decision system + prioritized plan, focused on revenue and leakage—not opinions."
        },
        {
          "question": "Do you guarantee results?",
          "answer": "The audit guarantees clarity and prioritization. Results depend on implementation quality and traffic/offer fundamentals."
        }
      ],
      "faqBlockKey": "diagnose_site_faq",
      "noThankYou": {
        "label": "No thanks, I’ll skip the audit",
        "nextPageId": "viral_system_offer"
      }
    },
    "viral_system_offer": {
      "id": "viral_system_offer",
      "type": "course_offer",
      "slug": "/viral-system",
      "title": "The Viral System",
      "hero": {
        "headline": "Stop Guessing. Start Building Content That Performs.",
        "subheadline": "Your truth-first framework for how social platforms actually work—plus a repeatable system to create viral content on any platform.",
        "imageKey": "viral_system_mockup"
      },
      "countdown": {
        "title": "Enrollment Bonus",
        "subtitle": "Enroll today and get a Free Social Media Audit included with The Viral System. This bonus is only available while the countdown is live.",
        "label": "Audit Bonus Expires In",
        "timer": { "days": "00", "hours": "00", "minutes": "30", "seconds": "00" }
      },
      "bonuses": [
        {
          "title": "Free Social Media Audit",
          "description": "Get a personalized audit of your social media channels when you enroll today.",
          "items": [
             "Channel Analysis",
             "Content Recommendations",
             "Growth Strategy"
          ]
        }
      ],
      "offer": {
        "id": "viral_system_497",
        "name": "How To Go Viral Course Package",
        "price": 497,
        "priceDisplay": "$497",
        "positioning": "Get Lifetime Access — $497",
        "description": "Both courses + all future updates. One-time payment.",
        "includes": [
          "How To Go Viral On Any Platform (12 modules)",
          "Social Media Uncensored (complete framework)",
          "All future course updates",
          "Lifetime access",
          "Platform-agnostic strategies",
          "Downloadable resources"
        ],
        "primaryCta": {
          "label": "Get Lifetime Access Now",
          "action": "checkout",
          "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/v4XKDJ8K"
        }
      },
      "courses": [
        {
          "title": "How To Go Viral On Any Platform",
          "description": "A practical, platform-agnostic course that teaches you how viral content actually works—so you can stop guessing, stop chasing follower counts, and start building repeatable content systems that perform.",
          "points": [
            "Treat content like a product",
            "Identify what people are already curious about",
            "Package ideas into clear themes",
            "Read performance signals correctly",
            "Ethical research + mirroring techniques",
            "Turn views into real momentum"
          ]
        },
        {
          "title": "Social Media Uncensored",
          "description": "Ryan Perez's no-fluff guide to cracking virality on platforms like Instagram, TikTok, X, and more. Harnessing his autistic strength for pattern recognition—and backed by a 300K-follower audience and 96M impressions—Perez reveals the real mechanics behind algorithms, engagement, controversial content, and monetization.",
          "points": [
            "Truth-first framework for how platforms work",
            "Attention and behavior mechanics",
            "Why most creators get stuck",
            "Algorithm insights",
            "Engagement strategies",
            "Monetization paths"
          ]
        }
      ],
      "curriculum": [
        "Rethinking the Value of Followers",
        "Content as Products",
        "The Key to Understanding Content Performance",
        "Themed Content Strategy",
        "Leveraging Human Curiosity",
        "Friends vs. Fans",
        "Navigating the Lifecycle of Social Media Accounts and Competitors",
        "A Guide to Mirroring and Market Research",
        "Leveraging Community and Timing",
        "The Power of Call-to-Action (CTA)",
        "Timing, Storytelling, and Trolls",
        "Navigating Biases for Viral Content"
      ],
      "outcomes": [
        { "title": "Stop Guessing, Start Building", "description": "Learn how to build repeatable content systems that perform—no more \"post and pray\"" },
        { "title": "Understand Platform Psychology", "description": "Master the real mechanics behind algorithms, attention, and behavior" },
        { "title": "Predict What Will Hit", "description": "Use curiosity triggers and performance signals to forecast success before posting" },
        { "title": "Build Real Community", "description": "Turn viewers into engaged fans and followers into customers" },
        { "title": "Create Viral-Ready Content", "description": "Design posts that spark curiosity, conversation, and shares naturally" },
        { "title": "Read the Data Correctly", "description": "Interpret performance metrics and use them to improve systematically" }
      ],
      "instructor": {
        "name": "Ryan Perez",
        "title": "Pattern recognition specialist with proven viral success",
        "bio": "Ryan Perez harnesses his autistic strength for pattern recognition to decode what actually makes content go viral. His frameworks are backed by real results: a 300K+ follower audience and 96 million impressions across platforms.",
        "note": "Instead of theory, you get battle-tested systems from someone who has cracked the code on Instagram, TikTok, X, and more. This isn't motivation—it's mechanics.",
        "stats": [
          { "value": "300K+", "label": "Followers" },
          { "value": "96M", "label": "Impressions" },
          { "value": "Multiple", "label": "Viral Posts" }
        ]
      },
      "faqs": [
        { "question": "Is this for beginners or experienced creators?", "answer": "Both. It teaches the fundamental mechanics of virality that apply regardless of experience level." },
        { "question": "Does this work for my platform?", "answer": "Yes. The core principles of curiosity, attention, and packaging apply to Instagram, TikTok, YouTube, X, and LinkedIn." },
        { "question": "Is this just theory, or will I learn practical steps?", "answer": "It is practical. Module 8 specifically covers mirroring and research, which is a hands-on technique." },
        { "question": "Do I need a big following to benefit?", "answer": "No. In fact, learning this before you have a following prevents you from building an audience that doesn't care." },
        { "question": "What if I don't want to be controversial?", "answer": "You don't have to be. Virality comes from curiosity and emotion, not just controversy." },
        { "question": "Is this a subscription or one-time payment?", "answer": "One-time payment of $497 for lifetime access." }
      ],
      "faqBlockKey": "viral_system_faq",
      "noThankYou": {
        "label": "No thanks, just the book ($9.99)",
        "nextPageId": "social_media_uncensored_book"
      }
    },
    "vault_offer": {
      "id": "vault_offer",
      "type": "bundle_offer",
      "slug": "/vault",
      "title": "The Vault",
      "hero": {
        "headline": "The Vault: All-Access, Forever",
        "subheadline": "Your lifetime key to the entire learning library—every course, every mini-course, and every future update added to the platform.",
        "imageKey": "vault_library"
      },
      "offer": {
        "id": "vault_997",
        "name": "The Vault - 200+ Courses & Mini-Courses",
        "price": 997,
        "priceDisplay": "$997",
        "positioning": "Lifetime Access",
        "description": "Pay once. Access forever. All future content included.",
        "includes": [
          "200+ Courses",
          "Mini Playbooks",
          "Community",
          "Future Updates"
        ],
        "primaryCta": {
          "label": "Get Lifetime Access Now",
          "action": "checkout",
          "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/94gxk20y"
        }
      },
      "countdown": {
        "title": "Limited Time Offer",
        "subtitle": "Unlock The Vault now and get The Viral System free as a limited-time bonus. The Vault will increase to regular pricing in 2 days.",
        "label": "Bonus Ends In",
        "timer": { "days": "02", "hours": "23", "minutes": "59", "seconds": "50" }
      },
      "bonuses": [
        {
          "title": "Bonus: The Viral System",
          "description": "Get the complete Viral System course free when you unlock The Vault today.",
          "imageKey": "viral_system_mockup",
          "items": [
            "Viral System Course",
            "Social Media Uncensored",
            "Content Frameworks"
          ]
        }
      ],
      "topics": [
        { "title": "Design + UI Systems", "description": "Make your work look premium and feel intentional" },
        { "title": "Automation & A.I. + Prompt Library", "description": "Speed up thinking and production" },
        { "title": "Programming + Technical Implementation", "description": "Build systems that scale and perform" },
        { "title": "Sales + Funnels + Personas", "description": "Build offers and experiences that convert" },
        { "title": "Psychology Profiles + Logical Fallacies", "description": "Understand behavior, sharpen persuasion" },
        { "title": "Content + Social + Platforms + Virality", "description": "Generate ideas and build distribution" },
        { "title": "Marketing, Money + Time Systems", "description": "Better decisions, better execution" },
        { "title": "Private Community Access", "description": "Connect with other builders and share insights" }
      ],
      "playbooks": {
        "title": "Mini Playbooks Included",
        "description": "Step-by-step guides for real scenarios you can implement immediately",
        "items": [
          "Form submissions", "Login flows", "Search functionality", "File uploads",
          "Checkout processes", "Webhooks", "Background jobs", "UI state management",
          "Password resets", "Email verification", "Pagination", "Rate limiting",
          "Caching strategies", "Feature flags", "API request/response patterns",
          "Session management", "Two-factor authentication", "Data validation",
          "Error handling", "Security best practices", "+ More added regularly"
        ]
      },
      "benefits": [
        { "title": "Pay Once, Access Forever", "description": "One payment gets you lifetime access. No subscriptions, no renewals, no surprise charges." },
        { "title": "All Future Content Included", "description": "Every course, mini-course, and playbook we add to The Vault is automatically yours at no extra cost." },
        { "title": "Your Access Never Expires", "description": "Learn at your own pace. Come back anytime. Your account stays active forever." },
        { "title": "Price Increases Do Not Affect You", "description": "Lock in today rate. When prices go up, your access remains without paying a cent more." },
        { "title": "No Subscription Fatigue", "description": "Most platforms charge monthly or yearly. That adds up fast. With The Vault, you pay once and never worry about renewals again." }
      ],
      "faqs": [
        { "question": "What does \"lifetime access\" actually mean?", "answer": "It means you pay once and have access to the platform and all its content for the life of the product. No recurring fees." },
        { "question": "How many courses are included right now?", "answer": "Currently 200+ courses and mini-courses across all disciplines." },
        { "question": "Will I have to pay for future courses?", "answer": "No. All future content added to The Vault is included in your one-time purchase." },
        { "question": "Can I cancel my membership?", "answer": "Since there is no recurring billing, there is nothing to cancel. You have access forever." },
        { "question": "Is there a community included?", "answer": "Yes, private community access is included." },
        { "question": "Why is there no refund policy?", "answer": "Due to the immediate access to digital content and the lifetime nature of this offer, all sales are final." }
      ],
      "disclaimer": "All sales are final. Due to the immediate access to digital content and the lifetime nature of this offer, we cannot provide refunds. Make sure this is right for you before purchasing.",
      "faqBlockKey": "vault_faq",
      "noThankYou": {
        "label": "No thanks",
        "nextPageId": "free_book_optin"
      }
    },
    "brand_workshop_application": {
      "id": "brand_workshop_application",
      "type": "high_ticket_application",
      "slug": "/brand-workshop",
      "title": "Premium Workshop Series",
      "renderInlineForm": false,
      "ctaCard": {
          "title": "A Strategic Investment in Your Brand",
          "description": "This is not a quick fix. This is a comprehensive brand transformation process that requires leadership commitment, collaborative participation, and strategic thinking. If you are ready to do the deep work that creates lasting brand value, this workshop is for you.",
          "secondaryActionLabel": "Apply for Next Available Quarter"
      },
      "hero": {
        "headline": "Transform Your Brand in 6 Strategic Sessions",
        "subheadline": "Work directly with senior brand strategists to define your brand essence, clarify your target audience, and develop a cohesive strategy that drives business growth.",
        "imageKey": "brand_session"
      },
      "offer": {
        "id": "brand_workshop_9997",
        "name": "Brand Transformation Workshop",
        "price": 9997,
        "priceDisplay": "$9,997",
        "features": [
          "6 Sessions",
          "Brand Strategy",
          "Leadership Teams",
          "50+ Page Document"
        ],
        "primaryCta": {
          "label": "Apply for Workshop",
          "action": "application",
          "applicationUrl": "https://bowtiekreative.formaloo.me/wqbhq2"
        }
      },
      "countdown": {
        "title": "Fast-Action Bonus",
        "subtitle": "Apply now and, if accepted, you’ll get The Vault + The Viral System free as a fast-action bonus.",
        "label": "Bonus available until this timer expires",
        "timer": { "days": "00", "hours": "01", "minutes": "45", "seconds": "00" }
      },
      "bonuses": [
        {
          "title": "Fast-Action Bonus Package",
          "description": "Get The Vault + The Viral System free when you apply now and are accepted.",
          "imageKey": "viral_system_mockup",
          "items": [
             "The Vault (Lifetime Access)",
             "The Viral System Course"
          ]
        }
      ],
      "qualification": {
        "disclaimer": "Limited availability. Only 2 spots per quarter.",
        "urgencyText": "Current spots are filling quickly.",
        "questions": [
          "What is your current monthly revenue?",
          "What is your target monthly revenue 12 months from now?",
          "Link to your current website and main social profiles.",
          "What’s broken or missing in your current brand?",
          "Do you have a team to help implement, or will you be solo?",
          "Are you prepared to invest ~$10k in brand strategy and development in the next 30 days?"
        ]
      },
      "agenda": [
        {
          "title": "Brand Foundation & Discovery",
          "duration": "2-3 hours",
          "items": [
            "Pre-workshop brand audit presentation",
            "Competitive analysis review",
            "Mission, vision, and values definition workshop",
            "Brand purpose and promise identification",
            "Stakeholder alignment exercise"
          ]
        },
        {
          "title": "Audience & Market Research",
          "duration": "2-3 hours",
          "items": [
            "Target audience research findings",
            "Customer persona development workshop",
            "Behavioral insights and pain points mapping",
            "Customer journey analysis",
            "Market positioning opportunities"
          ]
        },
        {
          "title": "Brand Positioning Strategy",
          "duration": "2-3 hours",
          "items": [
            "Competitive differentiation framework",
            "Unique value proposition development",
            "Brand positioning statement creation",
            "Strategic brand pillars definition",
            "Category design and market positioning"
          ]
        },
        {
          "title": "Messaging & Voice Architecture",
          "duration": "2-3 hours",
          "items": [
            "Brand messaging hierarchy development",
            "Core messaging platform creation",
            "Brand voice and tone guidelines",
            "Key message testing and refinement",
            "Communications playbook structure"
          ]
        },
        {
          "title": "Visual Direction & Identity",
          "duration": "2-3 hours",
          "items": [
            "Visual brand attributes workshop",
            "Mood boarding and visual exploration",
            "Design direction recommendations",
            "Brand expression frameworks",
            "Visual consistency guidelines"
          ]
        },
        {
          "title": "Implementation & Roadmap",
          "duration": "2-3 hours",
          "items": [
            "Comprehensive brand strategy review",
            "Implementation prioritization",
            "Launch roadmap development",
            "Internal rollout strategy",
            "Success metrics and measurement plan"
          ]
        }
      ],
      "deliverables": [
        {
          "title": "Comprehensive Brand Strategy Document",
          "description": "50+ page detailed brand strategy covering all workshop findings, frameworks, and strategic recommendations"
        },
        {
          "title": "Brand Messaging Playbook",
          "description": "Complete messaging architecture, voice guidelines, and communication frameworks for consistent brand expression"
        },
        {
          "title": "Workshop Recordings & Materials",
          "description": "Full recordings of all 6 sessions plus presentation decks, worksheets, and collaborative outputs"
        },
        {
          "title": "Implementation Roadmap",
          "description": "Prioritized action plan with timeline, milestones, and next steps for bringing your brand strategy to life"
        },
        {
          "title": "Pre-Workshop Research Package",
          "description": "Brand audit, competitive analysis, and market research to inform strategic discussions"
        },
        {
          "title": "30-Day Post-Workshop Support",
          "description": "Email support for questions during implementation and refinement of workshop deliverables"
        }
      ],
      "audience": [
        {
          "title": "Established Companies",
          "description": "Organizations ready to elevate their market presence with a comprehensive brand refresh or repositioning"
        },
        {
          "title": "Funded Startups",
          "description": "Venture-backed companies launching with purpose and needing a strong brand foundation from day one"
        },
        {
          "title": "Growing Businesses",
          "description": "Companies experiencing growth but lacking clear brand differentiation in competitive markets"
        },
        {
          "title": "Leadership Teams",
          "description": "Executive teams committed to strategic brand development and willing to invest time in the process"
        }
      ],
      "faqs": [
        {
          "question": "How long does the workshop series take?",
          "answer": "Typically 6-8 weeks, with one session per week to allow for processing and strategy work in between."
        },
        {
          "question": "Who should attend from our team?",
          "answer": "We recommend core decision-makers (Founders, C-suite, Marketing Leads) to ensure alignment."
        },
        {
          "question": "Are the sessions virtual or in-person?",
          "answer": "Sessions are conducted virtually via Zoom for efficiency and recording purposes, but can be in-person for an additional travel fee."
        },
        {
          "question": "What happens before the first session?",
          "answer": "We conduct a deep-dive audit of your current brand and competitors to prepare our initial strategy findings."
        },
        {
          "question": "Can we customize the workshop focus areas?",
          "answer": "Yes, while we have a proven framework, we tailor the depth of each session to your specific challenges."
        },
        {
          "question": "What if we need to reschedule a session?",
          "answer": "We understand business moves fast. We allow rescheduling with 48 hours notice."
        },
        {
          "question": "Do you help with implementation after the workshop?",
          "answer": "You get 30 days of email support. We also offer separate implementation retainers if you need hands-on help."
        },
        {
          "question": "How quickly can we start?",
          "answer": "Depends on availability. We limit intake to 2 clients per quarter. Apply now to check current openings."
        }
      ],
      "noThankYou": {
        "label": "No thanks, just the ebook ($27)",
        "nextPageId": "brand_identity_ebook"
      }
    },
    "brand_identity_ebook": {
      "id": "brand_identity_ebook",
      "type": "low_ticket_ebook",
      "slug": "/create-memorable-brand-identity",
      "title": "Creating a Memorable Brand Identity",
      "hero": {
        "headline": "Strategic Framework: Creating a Memorable Brand Identity",
        "subheadline": "A strategic framework for building brands that resonate, endure, and drive business value through intentional design.",
        "imageKey": "brand_identity_book"
      },
      "offer": {
        "id": "brand_identity_27",
        "name": "Creating a Memorable Brand Identity",
        "price": 27,
        "priceDisplay": "$27",
        "positioning": "Get the eBook - $27",
        "description": "Digital Download. Instant Access.",
        "includes": [
          "Complete strategic framework",
          "6 comprehensive chapters",
          "Actionable templates and worksheets",
          "Industry-proven methodologies",
          "Instant digital download",
          "Lifetime access"
        ],
        "primaryCta": {
          "label": "Get Creating a Memorable Brand Identity",
          "action": "checkout",
          "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/Z8DzVL06"
        }
      },
      "courses": [
        {
          "title": "What You'll Get",
          "description": "A complete roadmap for creating a brand identity that stands out, resonates with your audience, and drives lasting business value.",
          "points": [
            "Comprehensive Framework: Step-by-step methodology",
            "Strategic Positioning: Define unique value proposition",
            "Visual Identity Design: Create cohesive visual systems",
            "Audience Connection: Build authentic relationships",
            "Business Growth: Translate strategy into results",
            "Industry Proven: Tactics used by leading brands"
          ]
        }
      ],
      "curriculum": [
        "Chapter 1: Brand Foundation (Purpose, Mission, Values)",
        "Chapter 2: Strategic Positioning (Market Analysis, UVP)",
        "Chapter 3: Visual Identity (Logo, Color, Typography)",
        "Chapter 4: Brand Voice & Messaging (Storytelling, Tone)",
        "Chapter 5: Brand Experience (Touchpoints, Journey)",
        "Chapter 6: Implementation & Growth (Guidelines, Scaling)"
      ],
      "outcomes": [
        { "title": "Entrepreneurs", "description": "launching new ventures" },
        { "title": "Marketing Pros", "description": "building brand strategies" },
        { "title": "Design Teams", "description": "creating visual identities" },
        { "title": "Business Owners", "description": "rebranding or refreshing" },
        { "title": "Startups", "description": "establishing market presence" },
        { "title": "Consultants", "description": "advising clients" }
      ],
      "noThankYou": {
        "label": "No thanks, just show me Social Media Uncensored",
        "nextPageId": "social_media_uncensored_book"
      }
    },
    "done_for_you_application": {
      "id": "done_for_you_application",
      "type": "high_ticket_application",
      "slug": "/done-for-you-implementation",
      "title": "90-Day Implementation Package",
      "renderInlineForm": false,
      "countdown": {
        "title": "Limited Spots Available This Quarter",
        "subtitle": "Apply for our done-for-you funnels and implementation and get The Viral System free if you move forward while this bonus window is open.",
        "label": "Bonus Window Closing",
        "timer": { "days": "06", "hours": "23", "minutes": "59", "seconds": "55" }
      },
      "bonuses": [
        {
          "title": "Bonus: The Viral System",
          "description": "Get the complete Viral System course free when you apply and move forward during this window.",
          "imageKey": "viral_system_mockup",
          "items": [
             "Viral System Course",
             "Social Media Uncensored"
          ]
        }
      ],
      "ctaCard": {
          "title": "Ready to Stop Losing Money?",
          "description": "Limited to 3 clients per quarter. We review each application to ensure we're a good fit.",
          "secondaryActionLabel": "Submit Application"
      },
      "hero": {
        "headline": "Stop Losing Money to a Broken Website",
        "subheadline": "Your website can look \"professional\" and still bleed revenue every month. This is a done-for-you 90-day implementation package that turns your site into a revenue system.",
        "imageKey": "done_for_you_team"
      },
      "offer": {
        "id": "done_for_you_19997",
        "name": "Website Revenue Regeneration",
        "price": 19997,
        "priceDisplay": "$19,997",
        "positioning": "90-Day Done-For-You Implementation",
        "features": [
          "Revenue Leak Audit + ROI Roadmap",
          "90-Day Done-For-You Implementation",
          "Emergency Healing (Weeks 1-4)",
          "Regeneration Foundation (Weeks 5-8)",
          "Nervous System Install (Weeks 9-12)",
          "Launch + Proof Report",
          "Post-Launch Optimization Recommendations",
          "Ongoing Support During Implementation"
        ],
        "primaryCta": {
          "label": "Apply Now",
          "action": "application",
          "applicationUrl": "https://bowtiekreative.formaloo.me/2wmj41"
        }
      },
      "qualification": {
        "disclaimer": "Limited availability. Application review required.",
        "urgencyText": "Applications close in 6 days. Apply before spots are filled.",
        "questions": [
          "What is your current monthly and annual revenue?",
          "What is your primary offer (link if applicable)?",
          "What is your traffic source mix right now?",
          "Have you worked with an agency or consultant before? What happened?",
          "What budget have you set aside for this project in the next 30 days?",
          "Who are the decision-makers, and are they involved in this application?"
        ]
      },
      "agenda": [
        {
          "title": "Revenue Leak Audit + ROI Roadmap",
          "duration": "Initial",
          "items": ["Clear priorities", "Cost-of-delay math", "Plan built around sales process"]
        },
        {
          "title": "Emergency Healing",
          "duration": "Weeks 1–4",
          "items": ["Speed & UX friction removal", "Conversion path fixes", "Compliance baseline", "Reliability"]
        },
        {
          "title": "Regeneration Foundation",
          "duration": "Weeks 5–8",
          "items": ["Rebuild key money pages", "Services/pricing/booking/checkout flows", "Trust + Clarity signals"]
        },
        {
          "title": "Nervous System Install",
          "duration": "Weeks 9–12",
          "items": ["Analytics + event tracking", "Dashboards", "Lead routing", "Basic nurture automations"]
        },
        {
          "title": "Launch + Proof",
          "duration": "Final",
          "items": ["Measurable before/after baseline", "Post-launch optimization report"]
        }
      ],
      "audience": [
        {
          "title": "Growth-Stage Businesses",
          "description": "You have a proven offer and existing traffic, but conversions are leaving money on the table"
        },
        {
          "title": "Revenue-Focused",
          "description": "You want more qualified leads, higher conversions, and measurable ROI—not just a pretty redesign"
        },
        {
          "title": "Ready to Scale",
          "description": "You need a website that performs like an asset and scales with your business growth"
        },
        {
          "title": "Data-Driven",
          "description": "You want tracking you can trust and systems that keep improving based on real performance data"
        }
      ],
      "outcomes": [
        { "title": "Faster Performance", "description": "Lightning-fast page loads that keep visitors engaged and reduce bounce rates" },
        { "title": "Conversion-Ready", "description": "Clear messaging, trust signals, and friction-free paths that turn visitors into customers" },
        { "title": "Tracking You Trust", "description": "Complete visibility into what is working with dashboards that show real ROI" },
        { "title": "Continuous Improvement", "description": "Automated systems and optimization frameworks that compound results over time" }
      ],
      "noThankYou": {
        "label": "No Thanks, Show Me 3-Day Workshop",
        "nextPageId": "build_website_3_days_workshop"
      }
    },
    "build_website_3_days_workshop": {
      "id": "build_website_3_days_workshop",
      "type": "live_workshop_application",
      "slug": "/build-your-website-in-3-days",
      "title": "Hands-On Workshop",
      "renderInlineForm": false,
      "countdown": {
        "title": "Registration Closing Soon",
        "subtitle": "Join this 3-Day Website Workshop and get The Viral System free when you reserve your spot before the timer expires.",
        "label": "Bonus + Registration Ends In",
        "timer": { "days": "03", "hours": "12", "minutes": "45", "seconds": "00" }
      },
      "bonuses": [
        {
          "title": "Bonus: The Viral System",
          "description": "Learn how to drive traffic to your new site with this complete social media system.",
          "imageKey": "viral_system_mockup",
          "items": [
            "Viral Content Strategy",
            "Platform Mechanics",
            "Growth Tactics"
          ]
        }
      ],
      "ctaCard": {
          "title": "Build Your Site in 3 Days",
          "description": "Go from no website to fully launched in just 3 days with expert guidance every step of the way",
          "secondaryActionLabel": "Reserve Your Workshop Spot"
      },
      "hero": {
        "headline": "Build Your Website in 3 Days",
        "subheadline": "A hands-on workshop where you build your website live, step-by-step, with guidance, templates, and real-time fixes—so you leave with a launched site, not \"homework.\"",
        "imageKey": "three_day_workshop"
      },
      "offer": {
        "id": "three_day_workshop_1997",
        "name": "Build Your Website in 3 Days Workshop",
        "price": 1997,
        "priceDisplay": "$1,997",
        "features": [
            "3 private sessions",
            "Real-time screen-share builds",
            "Priority troubleshooting",
            "Live website at the end",
            "Post-launch support"
        ],
        "primaryCta": {
          "label": "Reserve Your Workshop Spot",
          "action": "application",
          "applicationUrl": "https://bowtiekreative.formaloo.me/i3h8ly"
        }
      },
      "audienceTitle": "Who It's For",
      "audience": [
          { "title": "Service Businesses", "description": "Creators, coaches, local businesses" },
          { "title": "No Website?", "description": "People who have an offer but no site (or an outdated one)" },
          { "title": "Need Speed", "description": "Anyone who needs a simple, conversion-ready site fast" }
      ],
      "deliverablesTitle": "What You'll Leave With",
      "deliverables": [
          { "title": "A live website", "description": "Your site will be live and accessible to the world" },
          { "title": "A clear structure", "description": "Home, About, Services/Offer, Contact pages built out" },
          { "title": "Mobile-friendly design", "description": "Looks great on phones, tablets, and desktops" },
          { "title": "Basic SEO foundation", "description": "Titles, headings, metadata set up correctly" },
          { "title": "Lead capture", "description": "Contact form + CTA flow ready to convert" },
          { "title": "Simple update system", "description": "Learn how to edit and maintain it yourself" }
      ],
      "agendaTitle": "The 3-Day Build Plan",
      "agenda": [
          {
              "title": "Day 1 — Foundation + Structure",
              "duration": "2–3 hours",
              "items": ["Domain + hosting setup", "Install platform + theme", "Site map + page structure", "Brand basics", "Home page wireframe"]
          },
          {
              "title": "Day 2 — Build Pages + Lead Flow",
              "duration": "2–3 hours",
              "items": ["Services/Offer page", "About page", "Contact page + form", "CTA placement", "Basic SEO hygiene"]
          },
          {
              "title": "Day 3 — Polish + Launch + Tracking",
              "duration": "2–3 hours",
              "items": ["Mobile optimization", "Speed/performance cleanup", "Connect analytics (GA4)", "Final QA checklist", "Publish"]
          }
      ],
      "qualification": {
        "disclaimer": "Limited availability. Priority given to waitlist.",
        "questions": []
      },
      "noThankYou": {
        "label": "No Thanks, Show Me Unlimited Design",
        "nextPageId": "unlimited_design_application"
      }
    },
    "unlimited_design_application": {
      "id": "unlimited_design_application",
      "type": "high_ticket_application",
      "slug": "/unlimited-design",
      "title": "Unlimited Design Subscription",
      "hero": {
        "headline": "Unlimited Design Support for Your Brand.",
        "subheadline": "Request, refine, and ship design assets on repeat—without hiring a full-time designer.",
        "imageKey": "unlimited_design"
      },
      "offer": {
        "id": "unlimited_design_subscription",
        "name": "Unlimited Design Subscription",
        "price": null,
        "priceDisplay": "Custom / TBD",
        "primaryCta": {
          "label": "Apply for Unlimited Design",
          "action": "application",
          "applicationUrl": "https://forms.example.com/unlimited-design"
        }
      },
      "qualification": {
        "disclaimer": "This service is best for teams with ongoing design needs (campaigns, landing pages, social content, and more).",
        "questions": [
          "How many design requests do you anticipate per month?",
          "What types of assets do you need most frequently?",
          "Do you have established brand guidelines?",
          "Who will be the primary point of contact for approvals?"
        ]
      },
      "noThankYou": {
        "label": "No thanks, show me the Brand Book",
        "nextPageId": "brand_book_ebook"
      }
    },
    "brand_book_ebook": {
      "id": "brand_book_ebook",
      "type": "low_ticket_ebook",
      "slug": "/create-memorable-brand-book",
      "title": "Create a Memorable Brand Book",
      "hero": {
        "headline": "Document Your Brand So Anyone Can Execute It.",
        "subheadline": "A practical guide to building a brand book your team can actually use.",
        "imageKey": "brand_book"
      },
      "offer": {
        "id": "brand_book_tbd",
        "name": "Create a Memorable Brand Book – Ebook",
        "price": null,
        "priceDisplay": "$TBD",
        "primaryCta": {
          "label": "Get the Brand Book Guide",
          "action": "checkout",
          "checkoutUrl": "https://checkout.example.com/brand-book"
        }
      },
      "noThankYou": {
        "label": "No thanks, just show me Social Media Uncensored",
        "nextPageId": "social_media_uncensored_book"
      }
    },
    "social_media_uncensored_book": {
      "id": "social_media_uncensored_book",
      "type": "book_offer",
      "slug": "/social-media-uncensored",
      "title": "Social Media Uncensored",
      "hero": {
        "headline": "300K+ Followers | 96M Impressions",
        "subheadline": "Explore The Naked Truth About Social Media to Help You Go Viral.",
        "imageKey": "smu_book_cover"
      },
      "offer": {
        "id": "smu_999",
        "name": "Social Media Uncensored",
        "price": 9.99,
        "priceDisplay": "$9.99",
        "positioning": "Get the Book Now",
        "description": "Digital book. Instant access.",
        "includes": [
          "Battle-tested strategies from 96M+ impressions",
          "Autism-enhanced pattern recognition insights",
          "Platform-agnostic viral tactics",
          "No fluff, just actionable tactics"
        ],
        "primaryCta": {
          "label": "Get Social Media Uncensored Now",
          "action": "checkout",
          "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/M8qDJZme"
        }
      },
      "benefits": [
        { "title": "Not Your Average Guide", "description": "A no-holds-barred exposé of what really drives virality on platforms like Instagram, TikTok, and X." },
        { "title": "Autism-Enhanced Insights", "description": "Ryan leverages unique pattern recognition to reveal hidden algorithms and bold tactics." },
        { "title": "Battle-Tested Strategy", "description": "Not theory—proven strategies from someone who has cracked the code on multiple platforms." },
        { "title": "Stop Guessing", "description": "Ryan peels back the layers of the digital world to show you exactly what works, what doesn't, and why." }
      ],
      "outcomes": [
        { "title": "Why hashtags are dying", "description": "and what's replacing them" },
        { "title": "Turn controversy into cash", "description": "without destroying your brand" },
        { "title": "Hidden viral patterns", "description": "that platforms don't want you to know" },
        { "title": "Step-by-step tactics", "description": "to dominate Instagram, TikTok, X, and beyond" },
        { "title": "Autism-enhanced insights", "description": "unique pattern recognition that reveals what others miss" },
        { "title": "No fluff, no theory", "description": "just proven strategies that generated 96 million impressions" }
      ],
      "instructor": {
        "name": "Ryan Perez",
        "title": "Social Media Strategist and Author",
        "bio": "Ryan Perez is a neurodivergent social media strategist with over 300,000 followers and 96 million impressions across platforms. As the founder of Digital Stem Cell and Bow Tie Kreative, Ryan has helped countless creators and businesses amplify their voice and go viral.",
        "note": "His autism-enhanced pattern recognition has allowed him to crack the code on virality where traditional marketers have failed.",
        "stats": [
          { "value": "300K+", "label": "Followers" },
          { "value": "96M", "label": "Impressions" },
          { "value": "100%", "label": "Battle-Tested" }
        ]
      },
      "testimonials": [
        {
          "quote": "Ryan spoke from the heart about inclusion through an intersectional lens. His passion kept the entire room engaged—no one nodded off in the back row.",
          "author": "Ty McKinney",
          "role": "Community Psychologist"
        },
        {
          "quote": "Ryan isn't just a voice for neurodivergent people, he's a voice for people. His stories land with raw honesty and real hope.",
          "author": "Britton Ledingham",
          "role": "Journalist & Podcast Host"
        },
        {
          "quote": "Ryan captivated our Virtual Gurus community twice. His toolkit for neurodivergent entrepreneurs was pure gold—I filled a whole page with actionable notes.",
          "author": "Candace",
          "role": "Community Coordinator, Virtual Gurus"
        },
        {
          "quote": "Ryan's keynote on neurodiversity in business was eye-opening. His humility, insight and tool demos left us inspired and equipped to serve our clients better.",
          "author": "Kelly Evitt",
          "role": "Community Coordinator, Virtual Gurus"
        }
      ]
    },
    "website_plans_page": {
      "id": "website_plans_page",
      "type": "service_listing",
      "slug": "/websites",
      "title": "Website Plans",
      "hero": {
        "headline": "Build a Website That Works as Hard as You Do",
        "subheadline": "Stop putting up with a “pretty but passive” site.\nGet a custom-built website designed for conversions, clarity, and momentum—without the agency price tag or DIY headaches.",
        "imageKey": "websites_hero"
      },
      "countdown": {
        "title": "Fast-Action Bonus",
        "subtitle": "Start a website plan today and get The Viral System free as a fast-action bonus. This bonus is only valid while the timer is active.",
        "label": "Bonus Expires In",
        "timer": { "days": "00", "hours": "23", "minutes": "59", "seconds": "00" }
      },
      "bonuses": [
        {
          "title": "Bonus: The Viral System",
          "description": "Get the complete Viral System course free when you start your website plan today.",
          "imageKey": "viral_system_mockup",
          "items": [
             "Viral System Course",
             "Social Media Uncensored"
          ]
        }
      ],
      "intro": {
        "body": [
          "If you’re here, your site needs to do better.",
          "Because a website isn’t just a digital business card. It’s your first impression, sales engine, proof of credibility, 24/7 customer filter, and lead gen gateway.",
          "And right now, most small businesses are losing customers long before anyone books a call, checks out, or sends a message.",
          "If that sounds familiar, you’re in the right place."
        ],
        "whyBowTie": {
          "headline": "Why choose Bow Tie Kreative?",
          "bullets": [
            "You don’t need a $20K build to win online.",
            "You shouldn’t settle for cookie-cutter templates.",
            "Your website should grow with you—not get stale.",
            "Support shouldn’t disappear after launch."
          ],
          "summary": "You get a custom site built for your business, plus ongoing hosting, maintenance, security, and revisions every month."
        }
      },
      "plans": [
        {
          "id": "website_plan_lite",
          "name": "Bow Tie Lite Website Package",
          "priceDisplay": "$19/month + $500 setup",
          "tagline": "Perfect for simple, clean starter sites.",
          "imageKey": "website_lite",
          "highlight": "Custom 1–3 page site with hosting, SSL, and basic SEO.",
          "primaryCta": {
            "label": "Start With Lite",
            "action": "navigate",
            "nextPageId": "website_plan_lite"
          }
        },
        {
          "id": "website_plan_classic",
          "name": "Classic Knot (Standard Website)",
          "priceDisplay": "$79/month + $1,500 setup",
          "tagline": "For growing businesses that need more pages and bookings.",
          "imageKey": "website_classic",
          "highlight": "Up to 5 pages, calendar integration, and GA4 setup.",
          "primaryCta": {
            "label": "Build My Standard Site",
            "action": "navigate",
            "nextPageId": "website_plan_classic"
          }
        },
        {
          "id": "website_plan_windsor",
          "name": "Windsor Growth (Unlimited Pages*)",
          "priceDisplay": "$199/month + $3,000 setup",
          "tagline": "Growth-focused builds with more pages and optimization.",
          "imageKey": "website_windsor",
          "highlight": "Up to 10 pages, conversion layouts, performance tuning.",
          "primaryCta": {
            "label": "Launch My Growth Site",
            "action": "navigate",
            "nextPageId": "website_plan_windsor"
          }
        },
        {
          "id": "website_plan_black_label",
          "name": "Black Label Studio (Unlimited + eCommerce)",
          "priceDisplay": "$399/month + $6,000 setup",
          "tagline": "Premium done-for-you experience with full eCommerce.",
          "imageKey": "website_black_label",
          "highlight": "Up to 15 pages, eCommerce, priority support, unlimited revisions.",
          "primaryCta": {
            "label": "Take Me to Black Label",
            "action": "navigate",
            "nextPageId": "website_plan_black_label"
          }
        }
      ],
      "fitSection": {
        "perfectFor": [
          "Coaches, creators, and consultants",
          "Local businesses and service pros",
          "Course creators and membership owners",
          "Businesses who’ve outgrown DIY",
          "Anyone who wants a site they’re proud of"
        ],
        "notFor": [
          "Template-only DIY seekers",
          "Build-it-yourself platforms",
          "One-and-done handoff with no support"
        ]
      },
      "ctaBlock": {
        "headline": "Ready to finally have a website that sells, filters, and converts—even when you’re offline?",
        "steps": [
          "Find the package that fits your stage.",
          "Submit onboarding.",
          "We build while you work your business."
        ],
        "primaryCta": {
          "label": "Start My Website Build",
          "action": "scroll_to_plans"
        },
        "secondaryCta": {
          "label": "No thanks, I need a Funnel instead",
          "action": "navigate",
          "nextPageId": "funnel_plans_page"
        }
      },
      "workshopPromo": {
        "headline": "Want to build it yourself?",
        "subheadline": "Join the 3-Day Workshop and launch your site live with expert guidance.",
        "primaryCta": {
          "label": "Join the 3-Day Workshop",
          "action": "navigate",
          "nextPageId": "build_website_3_days_workshop"
        }
      }
    },
    "website_plan_lite": {
      "id": "website_plan_lite",
      "type": "service_offer",
      "slug": "/websites/lite",
      "title": "Bow Tie Lite Website Package",
      "hero": {
        "headline": "Start Simple. Launch Fast. Look Professional.",
        "subheadline": "$19/month + $500 setup — custom 1–3 page site with hosting, SSL, and basic SEO.",
        "imageKey": "website_lite"
      },
      "offer": {
        "price": 19,
        "priceSetup": 500,
        "priceDisplay": "$19/month + $500 setup",
        "includes": [
          "Custom 1-page or up to 3-page website",
          "Hosting + SSL + backups",
          "Contact form + basic on-page SEO",
          "2 revisions per month"
        ],
        "turnaround": {
          "build": "7–10 business days after onboarding",
          "revisions": "3–5 business days"
        },
        "primaryCta": {
          "label": "Start With Lite",
          "action": "checkout",
          "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/L0z5QM4n"
        }
      },
      "noThankYou": {
        "label": "No thanks, show me the 3-Day Website Workshop",
        "nextPageId": "build_website_3_days_workshop"
      }
    },
    "website_plan_classic": {
      "id": "website_plan_classic",
      "type": "service_offer",
      "slug": "/websites/classic-knot",
      "title": "Classic Knot (Standard Website)",
      "hero": {
        "headline": "A Standard Website That’s Anything But Standard.",
        "subheadline": "$79/month + $1,500 setup — for growing businesses who need more pages and bookings.",
        "imageKey": "website_classic"
      },
      "offer": {
        "price": 79,
        "priceSetup": 1500,
        "priceDisplay": "$79/month + $1,500 setup",
        "includes": [
          "Everything in Lite",
          "Up to 5 custom pages",
          "Booking/calendar integration (optional)",
          "GA4 analytics setup",
          "2 revisions per month"
        ],
        "turnaround": {
          "build": "10–15 business days",
          "revisions": "2–4 business days"
        },
        "primaryCta": {
          "label": "Build My Standard Site",
          "action": "checkout",
          "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/p0E2xnmb"
        }
      },
      "noThankYou": {
        "label": "No thanks, show me the 3-Day Website Workshop",
        "nextPageId": "build_website_3_days_workshop"
      }
    },
    "website_plan_windsor": {
      "id": "website_plan_windsor",
      "type": "service_offer",
      "slug": "/websites/windsor-growth",
      "title": "Windsor Growth (Unlimited Pages*)",
      "hero": {
        "headline": "Growth-Ready Websites With Room to Scale.",
        "subheadline": "$199/month + $3,000 setup — add more pages and tune for conversions.",
        "imageKey": "website_windsor"
      },
      "offer": {
        "price": 199,
        "priceSetup": 3000,
        "priceDisplay": "$199/month + $3,000 setup",
        "includes": [
          "Everything in Classic Knot",
          "Up to 10 custom pages",
          "Conversion-focused layouts + performance tuning",
          "Unlimited revisions*",
          "Hosting + SSL included",
          "Optional eCommerce add-on (+ $99/month, up to 25 products)"
        ],
        "primaryCta": {
          "label": "Launch My Growth Site",
          "action": "checkout",
          "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/km1dZz0e"
        }
      },
      "noThankYou": {
        "label": "No thanks, show me the 3-Day Website Workshop",
        "nextPageId": "build_website_3_days_workshop"
      }
    },
    "website_plan_black_label": {
      "id": "website_plan_black_label",
      "type": "service_offer",
      "slug": "/websites/black-label-studio",
      "title": "Black Label Studio (Unlimited + eCommerce)",
      "hero": {
        "headline": "Black Label Studio: Your Flagship Website Build.",
        "subheadline": "$399/month + $6,000 setup — premium build with full eCommerce and priority support.",
        "imageKey": "website_black_label"
      },
      "offer": {
        "price": 399,
        "priceSetup": 6000,
        "priceDisplay": "$399/month + $6,000 setup",
        "includes": [
          "Everything in Windsor Growth",
          "Up to 15 custom pages",
          "Full eCommerce setup (100 products included)",
          "Priority queue support",
          "Unlimited revisions",
          "Hosting + SSL included"
        ],
        "turnaround": {
          "build": "20–35 business days",
          "revisions": "24–72 hours (priority)"
        },
        "primaryCta": {
          "label": "Take Me to Black Label",
          "action": "checkout",
          "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/V07kOq0G"
        }
      },
      "noThankYou": {
        "label": "No thanks, show me the 3-Day Website Workshop",
        "nextPageId": "build_website_3_days_workshop"
      }
    },
    "funnel_plans_page": {
      "id": "funnel_plans_page",
      "type": "service_listing",
      "slug": "/funnels",
      "title": "Funnel Programs",
      "hero": {
        "headline": "Turn Attention Into Revenue With Fully Managed Funnels",
        "subheadline": "If traffic, reach, and awareness aren’t your problem—but conversions are—your funnel is the missing piece. We’ll build, manage, optimize, and scale it for you.",
        "imageKey": "funnels_hero"
      },
      "intro": {
        "body": [
          "A funnel isn’t just a landing page. It’s the engine that moves cold strangers into warm leads, booked calls, and paying customers.",
          "Done wrong, funnels waste ad spend and time. Done right, they turn every platform, post, and dollar into predictable revenue.",
          "Bow Tie Kreative handles the setup and the ongoing optimization."
        ],
        "whatYouGet": {
          "headline": "What You Get With Bow Tie Funnel Support",
          "bullets": [
            "Offer and messaging alignment",
            "Landing, thank-you, and checkout builds",
            "Automations, tagging, and routing",
            "Lead nurturing and email sequences",
            "Reporting, iteration, and improvement",
            "Human support (not “set and forget”)"
          ],
          "summary": "You get a marketing partner—not just software."
        }
      },
      "plans": [
        {
          "id": "funnel_plan_concierge_start",
          "name": "Concierge Start Funnel Support",
          "priceDisplay": "$1,500/month + $2,500 setup",
          "tagline": "Perfect for launching your first serious funnel.",
          "imageKey": "funnels_start",
          "highlight": "Management of 1 funnel system with offer, checkout, and basic ads.",
          "primaryCta": {
            "label": "Launch My First Funnel",
            "action": "navigate",
            "nextPageId": "funnel_plan_concierge_start"
          }
        },
        {
          "id": "funnel_plan_concierge_plus",
          "name": "Concierge Plus Funnel Support",
          "priceDisplay": "$3,000/month + $3,500 setup",
          "tagline": "For businesses running multiple funnels and scaling.",
          "imageKey": "funnels_plus",
          "highlight": "Management of 2 funnels plus strategy and expanded automation.",
          "primaryCta": {
            "label": "Build My Funnel System",
            "action": "navigate",
            "nextPageId": "funnel_plan_concierge_plus"
          }
        },
        {
          "id": "funnel_plan_concierge_pro",
          "name": "Concierge Pro Funnel Support",
          "priceDisplay": "$5,000/month + $5,000 setup",
          "tagline": "Accelerated support with full sales page sets.",
          "imageKey": "funnels_pro",
          "highlight": "Management of up to 3 systems with advanced automation and ad optimization.",
          "primaryCta": {
            "label": "Scale With Pro",
            "action": "navigate",
            "nextPageId": "funnel_plan_concierge_pro"
          }
        },
        {
          "id": "funnel_plan_concierge_elite",
          "name": "Concierge Elite",
          "priceDisplay": "$8,000/month + $10,000 setup",
          "tagline": "For multi-offer brands ready for serious scale.",
          "imageKey": "funnels_elite",
          "highlight": "Management of up to 5 funnels plus creative support and deep reporting.",
          "primaryCta": {
            "label": "Go Elite",
            "action": "navigate",
            "nextPageId": "funnel_plan_concierge_elite"
          }
        }
      ],
      "fitSection": {
        "perfectFor": [
          "Businesses with a working offer",
          "Brands with a defined customer avatar",
          "Teams already driving traffic or ad spend",
          "Businesses who want to scale with systems"
        ],
        "notFor": [
          "Those without a validated offer",
          "Businesses not ready for leads",
          "DIY-only budgets"
        ]
      },
      "ctaBlock": {
        "headline": "Your next customer is already paying attention.",
        "subheadline": "Let’s build the system that turns attention into sales—every day.",
        "steps": [
          "Pick your plan.",
          "Install your funnel foundation.",
          "Scale with support and optimization."
        ],
        "primaryCta": {
          "label": "Build My Funnel",
          "action": "scroll_to_plans"
        },
        "secondaryCta": {
          "label": "No thanks, I need a Website instead",
          "action": "navigate",
          "nextPageId": "website_plans_page"
        }
      },
      "workshopPromo": {
        "headline": "Want to build it yourself?",
        "subheadline": "Join the 3-Day Workshop and launch your site live with expert guidance.",
        "primaryCta": {
          "label": "Join the 3-Day Workshop",
          "action": "navigate",
          "nextPageId": "build_website_3_days_workshop"
        }
      }
    },
    "funnel_plan_concierge_start": {
      "id": "funnel_plan_concierge_start",
      "type": "service_offer",
      "slug": "/funnels/concierge-start",
      "title": "Concierge Start Funnel Support",
      "hero": {
        "headline": "Launch Your First Serious Funnel With a Partner.",
        "subheadline": "$1,500/month + $2,500 setup — management of 1 funnel system with offer, checkout, and automation.",
        "imageKey": "funnels_start"
      },
      "offer": {
        "priceMonthly": 1500,
        "priceSetup": 2500,
        "priceDisplay": "$1,500/month + $2,500 setup",
        "includes": [
          "Management of 1 funnel system",
          "Offer and checkout setup",
          "Calendar/booking integration",
          "1 ad campaign management",
          "Email automation + sequence management",
          "Monthly funnel performance review",
          "Dedicated marketing manager",
          "Client portal access + chat support"
        ],
        "primaryCta": {
          "label": "Launch My First Funnel",
          "action": "checkout",
          "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/q8lGErme"
        }
      },
      "noThankYou": {
        "label": "No thanks, show me the 3-Day Website Workshop",
        "nextPageId": "build_website_3_days_workshop"
      }
    },
    "funnel_plan_concierge_plus": {
      "id": "funnel_plan_concierge_plus",
      "type": "service_offer",
      "slug": "/funnels/concierge-plus",
      "title": "Concierge Plus Funnel Support",
      "hero": {
        "headline": "Build a Funnel System, Not Just a Single Flow.",
        "subheadline": "$3,000/month + $3,500 setup — management of 2 funnels plus strategy and expanded automation.",
        "imageKey": "funnels_plus"
      },
      "offer": {
        "priceMonthly": 3000,
        "priceSetup": 3500,
        "priceDisplay": "$3,000/month + $3,500 setup",
        "includes": [
          "Everything in Concierge Start",
          "Management of 2 funnel systems",
          "Strategy consulting + funnel mapping",
          "Expanded email automation + segmentation",
          "Priority execution",
          "Dedicated marketing manager",
          "Portal + tracking",
          "Email + chat support"
        ],
        "primaryCta": {
          "label": "Build My Funnel System",
          "action": "checkout",
          "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/kmZRnomB"
        }
      },
      "noThankYou": {
        "label": "No thanks, show me the 3-Day Website Workshop",
        "nextPageId": "build_website_3_days_workshop"
      }
    },
    "funnel_plan_concierge_pro": {
      "id": "funnel_plan_concierge_pro",
      "type": "service_offer",
      "slug": "/funnels/concierge-pro",
      "title": "Concierge Pro Funnel Support",
      "hero": {
        "headline": "Scale With Advanced Funnels and Optimization.",
        "subheadline": "$5,000/month + $5,000 setup — management of up to 3 systems with advanced automation.",
        "imageKey": "funnels_pro"
      },
      "offer": {
        "priceMonthly": 5000,
        "priceSetup": 5000,
        "priceDisplay": "$5,000/month + $5,000 setup",
        "includes": [
          "Everything in Concierge Plus",
          "Management of up to 3 funnel systems",
          "Full sales page sets (landing + thank-you + checkout)",
          "Advanced automation + routing logic",
          "Ad optimization + testing support",
          "Marketing manager, portal, email + chat support"
        ],
        "primaryCta": {
          "label": "Scale With Pro",
          "action": "checkout",
          "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/78NgxL4y"
        }
      },
      "noThankYou": {
        "label": "No thanks, show me the 3-Day Website Workshop",
        "nextPageId": "build_website_3_days_workshop"
      }
    },
    "funnel_plan_concierge_elite": {
      "id": "funnel_plan_concierge_elite",
      "type": "service_offer",
      "slug": "/funnels/concierge-elite",
      "title": "Concierge Elite Funnel Support",
      "hero": {
        "headline": "Elite Funnel Management for Multi-Offer Brands.",
        "subheadline": "$8,000/month + $10,000 setup — management of up to 5 funnels with creative and deep reporting.",
        "imageKey": "funnels_elite"
      },
      "offer": {
        "priceMonthly": 8000,
        "priceSetup": 10000,
        "priceDisplay": "$8,000/month + $10,000 setup",
        "includes": [
          "Everything in Concierge Pro",
          "Management of up to 5 funnels",
          "Creative support for social media assets",
          "Email design support",
          "Blog publishing workflows",
          "Deeper reporting + growth planning",
          "Perfect for education brands and multi-offer creators"
        ],
        "primaryCta": {
          "label": "Go Elite",
          "action": "checkout",
          "checkoutUrl": "https://zylvie.com/bowtiekreative/cart/add/78M5dA82"
        }
      },
      "noThankYou": {
        "label": "No thanks, show me the 3-Day Website Workshop",
        "nextPageId": "build_website_3_days_workshop"
      }
    },
    "privacy_policy": {
      "id": "privacy_policy",
      "type": "legal_page",
      "slug": "/privacy",
      "title": "Privacy Policy",
      "content": "<h2>1. Introduction</h2><p>Welcome to Bow Tie Kreative. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p><h2>2. Data We Collect</h2><p>We may collect, use, store and transfer different kinds of personal data about you including identity data, contact data, technical data, and usage data.</p><h2>3. How We Use Your Data</h2><p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: to perform the contract we are about to enter into or have entered into with you; where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests; where we need to comply with a legal or regulatory obligation.</p>"
    },
    "terms_conditions": {
      "id": "terms_conditions",
      "type": "legal_page",
      "slug": "/terms",
      "title": "Terms & Conditions",
      "content": "<h2>1. Agreement to Terms</h2><p>By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws.</p><h2>2. Use License</h2><p>Permission is granted to temporarily download one copy of the materials on Bow Tie Kreative's website for personal, non-commercial transitory viewing only.</p><h2>3. Disclaimer</h2><p>All the materials on Bow Tie Kreative's website are provided \"as is\". Bow Tie Kreative makes no warranties, may it be expressed or implied, therefore negates all other warranties.</p>"
    },
    "refund_policy": {
      "id": "refund_policy",
      "type": "legal_page",
      "slug": "/refund-policy",
      "title": "Refund Policy",
      "content": "<h2>Digital Products</h2><p>Due to the immediate access nature of our digital products (courses, ebooks, templates), all sales are final and non-refundable unless otherwise stated on the specific product sales page.</p><h2>Services</h2><p>Refunds for services are governed by the specific service agreement signed at the commencement of the project.</p><h2>Contact Us</h2><p>If you have any questions about our Returns and Refunds Policy, please contact us.</p>"
    },
    "case_studies_index": {
      "id": "case_studies_index",
      "type": "case_studies_index",
      "slug": "/case-studies",
      "title": "Case Studies",
      "hero": {
        "headline": "Proven Results. Real Revenue.",
        "subheadline": "Explore how we help businesses transform their digital presence into revenue-generating assets.",
        "imageKey": "case_studies_hero" 
      },
      "studies": [
        {
          "id": "cs_fundraising",
          "title": "Non-Profit Fundraising Platform",
          "category": "Web App & Funnel",
          "description": "A high-conversion donation platform that increased average donor value by 45% through strategic user flows and emotional design.",
          "image": "https://www.genspark.ai/api/files/s/6H62QGbC",
          "linkId": "cs_fundraising_detail"
        },
        {
          "id": "cs_travel",
          "title": "Adventure Travel Booking Engine",
          "category": "E-Commerce",
          "description": "Simplifying complex itinerary booking into a seamless 3-step process, resulting in a 2x increase in mobile bookings.",
          "image": "https://www.genspark.ai/api/files/s/OszQ27Wf",
          "linkId": "cs_travel_detail"
        },
        {
          "id": "cs_dining",
          "title": "Luxury Dining Reservation System",
          "category": "UI/UX Design",
          "description": "Elevating the reservation experience for a Michelin-star restaurant group, reducing no-shows by 30%.",
          "image": "https://www.genspark.ai/api/files/s/PUV0KPcp",
          "linkId": "cs_dining_detail"
        },
        {
          "id": "cs_music",
          "title": "Artist Streaming Dashboard",
          "category": "SaaS Product",
          "description": "A centralized hub for artists to track streaming metrics and fan engagement across multiple platforms.",
          "image": "https://www.genspark.ai/api/files/s/Tqm2uHiX",
          "linkId": "cs_music_detail"
        },
        {
          "id": "cs_sports",
          "title": "Pro Sports Team Management",
          "category": "Enterprise App",
          "description": "Comprehensive player and match management system for professional sports organizations.",
          "image": "https://www.genspark.ai/api/files/s/S3oQlP7W",
          "linkId": "cs_sports_detail"
        }
      ],
      "ctaBlock": {
        "headline": "Ready to write your own success story?",
        "primaryCta": {
          "label": "Start Your Project",
          "action": "navigate",
          "nextPageId": "website_plans_page"
        }
      }
    },
    "cs_fundraising_detail": {
      "id": "cs_fundraising_detail",
      "type": "case_study_detail",
      "slug": "/case-studies/fundraising",
      "title": "Non-Profit Fundraising Platform",
      "mainImage": "https://www.genspark.ai/api/files/s/6H62QGbC",
      "hero": {
        "headline": "Scaling Impact Through Design",
        "subheadline": "How we helped a global non-profit increase donations by 45%.",
        "imageKey": "" 
      },
      "info": [
        { "label": "Client", "value": "Global Aid Initiative" },
        { "label": "Services", "value": "UI/UX, Funnel Strategy, Development" },
        { "label": "Result", "value": "+45% Avg Donation" }
      ],
      "sections": [
        {
          "title": "The Challenge",
          "content": "<p>The client struggled with a high abandonment rate on their donation page. The process was clunky, non-responsive, and failed to connect emotionally with potential donors.</p>"
        },
        {
          "title": "The Solution",
          "content": "<p>We redesigned the entire donation flow, focusing on 'One-Tap Donate' functionality for mobile users and visual storytelling that highlighted the impact of every dollar. We simplified the form fields and added reassuring trust signals at key decision points.</p>",
          "image": "https://www.genspark.ai/api/files/s/W2JWmmgk" 
        },
        {
            "title": "The Outcome",
            "content": "<p>Within 3 months of launch, the new platform saw a 45% increase in average donation value and a 28% increase in recurring donor sign-ups. The mobile conversion rate doubled, proving the value of a mobile-first approach.</p>"
        }
      ],
      "ctaBlock": {
        "headline": "Need a high-converting platform?",
        "primaryCta": {
          "label": "Get a Quote",
          "action": "navigate",
          "nextPageId": "funnel_plans_page"
        }
      }
    },
    "cs_travel_detail": {
      "id": "cs_travel_detail",
      "type": "case_study_detail",
      "slug": "/case-studies/travel",
      "title": "Adventure Travel Booking Engine",
      "mainImage": "https://www.genspark.ai/api/files/s/OszQ27Wf",
      "hero": {
        "headline": "Simplifying Adventure",
        "subheadline": "Turning complex itineraries into a seamless booking experience.",
        "imageKey": "" 
      },
      "info": [
        { "label": "Client", "value": "Summit Seekers" },
        { "label": "Services", "value": "Product Design, Web App" },
        { "label": "Result", "value": "2x Mobile Bookings" }
      ],
      "sections": [
        {
          "title": "The Vision",
          "content": "<p>Summit Seekers wanted to make booking a multi-day trek as easy as booking a hotel room. The challenge was handling the complexity of dates, gear options, and group sizes without overwhelming the user.</p>"
        },
        {
          "title": "The Execution",
          "content": "<p>We built a custom booking engine that guides users through a step-by-step wizard. We used rich imagery to keep users excited and progress bars to reduce anxiety about the length of the process.</p>",
          "image": "https://www.genspark.ai/api/files/s/RDZkxLMV" 
        }
      ],
      "ctaBlock": {
        "headline": "Ready to streamline your booking flow?",
        "primaryCta": {
          "label": "Let's Talk",
          "action": "navigate",
          "nextPageId": "website_plans_page"
        }
      }
    },
    "cs_dining_detail": {
      "id": "cs_dining_detail",
      "type": "case_study_detail",
      "slug": "/case-studies/dining",
      "title": "Luxury Dining Reservation System",
      "mainImage": "https://www.genspark.ai/api/files/s/PUV0KPcp",
      "hero": {
        "headline": "A Taste of Elegance",
        "subheadline": "Digital experience matching the quality of a Michelin-star menu.",
        "imageKey": "" 
      },
      "info": [
        { "label": "Client", "value": "Azure Dining Group" },
        { "label": "Services", "value": "Branding, Web Design" },
        { "label": "Result", "value": "-30% No-Shows" }
      ],
      "sections": [
        {
          "title": "The Concept",
          "content": "<p>For a high-end restaurant, the website is the foyer. It needs to set the mood before the guest even arrives. Azure needed a site that felt exclusive but accessible.</p>"
        },
        {
          "title": "The Design",
          "content": "<p>We used dark, moody photography mixed with elegant typography to create a sense of intimacy. The reservation system was integrated seamlessly, allowing guests to see real-time availability and book special experiences.</p>",
          "image": "https://www.genspark.ai/api/files/s/BYygqf2n" 
        }
      ],
      "ctaBlock": {
        "headline": "Elevate your brand experience.",
        "primaryCta": {
          "label": "View Website Plans",
          "action": "navigate",
          "nextPageId": "website_plans_page"
        }
      }
    },
    "cs_music_detail": {
      "id": "cs_music_detail",
      "type": "case_study_detail",
      "slug": "/case-studies/music",
      "title": "Artist Streaming Dashboard",
      "mainImage": "https://www.genspark.ai/api/files/s/Tqm2uHiX",
      "hero": {
        "headline": "Data for Artists",
        "subheadline": "Empowering musicians with real-time insights.",
        "imageKey": "" 
      },
      "info": [
        { "label": "Client", "value": "BeatWave Analytics" },
        { "label": "Services", "value": "Dashboard Design, React Dev" },
        { "label": "Result", "value": "10k+ Active Users" }
      ],
      "sections": [
        {
          "title": "The Problem",
          "content": "<p>Musicians struggle to aggregate data from Spotify, Apple Music, and SoundCloud. They needed a single view of their performance.</p>"
        },
        {
          "title": "The Platform",
          "content": "<p>We designed a high-contrast, dark-mode dashboard that visualizes complex data streams into simple, actionable charts. Artists can now see where their fans are and which tracks are trending in real-time.</p>",
          "image": "https://www.genspark.ai/api/files/s/3vcraS6z" 
        }
      ],
      "ctaBlock": {
        "headline": "Need a custom dashboard?",
        "primaryCta": {
          "label": "Contact Us",
          "action": "navigate",
          "nextPageId": "website_plans_page"
        }
      }
    },
    "cs_sports_detail": {
      "id": "cs_sports_detail",
      "type": "case_study_detail",
      "slug": "/case-studies/sports",
      "title": "Pro Sports Team Management",
      "mainImage": "https://www.genspark.ai/api/files/s/S3oQlP7W",
      "hero": {
        "headline": "Winning off the Field",
        "subheadline": "Streamlining operations for professional sports franchises.",
        "imageKey": "" 
      },
      "info": [
        { "label": "Client", "value": "League One United" },
        { "label": "Services", "value": "Enterprise UX, Mobile App" },
        { "label": "Result", "value": "Efficiency +30%" }
      ],
      "sections": [
        {
          "title": "The Goal",
          "content": "<p>Coaches and managers needed a better way to track player health, match schedules, and logistics. Spreadsheets weren't cutting it.</p>"
        },
        {
          "title": "The System",
          "content": "<p>We created a comprehensive management suite with a mobile player app and a desktop admin panel. It handles everything from injury reporting to travel itineraries.</p>",
          "image": "https://www.genspark.ai/api/files/s/LjBVnPAD" 
        }
      ],
      "ctaBlock": {
        "headline": "Scale your operations.",
        "primaryCta": {
          "label": "Get Started",
          "action": "navigate",
          "nextPageId": "website_plans_page"
        }
      }
    }
  }
};