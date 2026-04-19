import { BlogPost, FAQ, NavLink, Service, TeamMember, Testimonial } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "service-1",
    slug: "virtual-consultations",
    title: "Virtual Consultations",
    shortDesc:
      "Remote physiotherapy through secure video calls, apps, and online platforms instead of in-person visits.",
    fullDesc:
      "Virtual physiotherapy is the delivery of physiotherapy services remotely using video calls, apps, or online platforms instead of in-person visits. We assess your condition based on what you tell us and what we observe, then provide appropriate exercises and advice for structured recovery at home.",
    icon: "Dumbbell",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80",
    benefits: [
      "Attend sessions from home",
      "Consistent treatment schedule",
      "Clear exercise guidance",
      "Lower travel burden",
      "Ongoing professional support",
    ],
    steps: [
      "Online assessment",
      "Condition review",
      "Personalised exercise plan",
      "Live progress sessions",
      "Plan refinement",
    ],
    relatedSlugs: [
      "physiotherapy-at-home",
      "mobility-and-movement-improvement",
      "musculoskeletal-physiotherapy",
    ],
  },
  {
    id: "service-2",
    slug: "physiotherapy-at-home",
    title: "Physiotherapy at Home",
    shortDesc:
      "In-home physiotherapy for people who have difficulty attending clinic appointments.",
    fullDesc:
      "Our physiotherapists provide assessment and treatment in the comfort of your own home when clinic attendance is difficult. We assess your movement and posture during everyday activities such as walking and balancing, then build a practical treatment plan around your home routine.",
    icon: "Activity",
    image:
      "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=800&q=80",
    benefits: [
      "Comfort of home setting",
      "Functional movement focus",
      "Reduced travel stress",
      "Safer mobility practice",
      "Family-inclusive care",
    ],
    steps: [
      "Home-based assessment",
      "Posture and movement review",
      "Hands-on and exercise treatment",
      "Daily activity integration",
      "Regular reassessment",
    ],
    relatedSlugs: [
      "virtual-consultations",
      "elderly-care-falls-prevention-physiotherapy",
      "post-operative-recovery-support",
    ],
  },
  {
    id: "service-3",
    slug: "mobility-and-movement-improvement",
    title: "Mobility & Movement Improvement",
    shortDesc:
      "Enhancing joint function, flexibility, and overall movement quality for a confident, active lifestyle.",
    fullDesc:
      "This service focuses on restoring efficient movement patterns and improving confidence in daily activity. Through targeted physiotherapy, we work on joint function, flexibility, and movement quality to help you move better, reduce stiffness, and stay active safely.",
    icon: "Heart",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80",
    benefits: [
      "Better flexibility",
      "Smoother joint function",
      "Improved confidence",
      "Reduced stiffness",
      "Safer physical activity",
    ],
    steps: [
      "Movement assessment",
      "Joint and flexibility screening",
      "Targeted exercise therapy",
      "Functional movement retraining",
      "Progress tracking",
    ],
    relatedSlugs: [
      "musculoskeletal-physiotherapy",
      "neurological-physiotherapy",
      "orthopedic-physiotherapy",
    ],
  },
  {
    id: "service-4",
    slug: "post-operative-recovery-support",
    title: "Post-Operative Recovery Support",
    shortDesc:
      "Structured rehabilitation to rebuild strength and restore movement after surgery.",
    fullDesc:
      "We guide you through a structured post-operative programme to rebuild strength, restore movement, and return smoothly to daily activities. Treatment progression is tailored to your surgery type, healing stage, and personal goals.",
    icon: "Brain",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    benefits: [
      "Faster functional recovery",
      "Safer activity progression",
      "Strength rebuilding",
      "Improved confidence",
      "Daily-life reintegration",
    ],
    steps: [
      "Post-op physiotherapy assessment",
      "Movement restoration phase",
      "Strength reconditioning",
      "Functional retraining",
      "Return-to-routine planning",
    ],
    relatedSlugs: [
      "orthopedic-physiotherapy",
      "physiotherapy-at-home",
      "mobility-and-movement-improvement",
    ],
  },
  {
    id: "service-5",
    slug: "neurological-physiotherapy",
    title: "Neurological Physiotherapy",
    shortDesc:
      "Specialist assessment and rehabilitation for stroke, parkinsonism, MS, and brain injury.",
    fullDesc:
      "We specialize in the assessment of neurological conditions such as stroke, parkinsonism, MS, and brain injury. Our physiotherapists create tailored treatment plans to enhance movement, balance, coordination, and independence through evidence-based neurological rehabilitation.",
    icon: "Shield",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    benefits: [
      "Improved balance",
      "Better coordination",
      "Enhanced independence",
      "Task-specific rehabilitation",
      "Condition-focused support",
    ],
    steps: [
      "Neurological assessment",
      "Personalized goal setting",
      "Movement and balance training",
      "Coordination-focused exercises",
      "Independence progression",
    ],
    relatedSlugs: [
      "elderly-care-falls-prevention-physiotherapy",
      "mobility-and-movement-improvement",
      "musculoskeletal-physiotherapy",
    ],
  },
  {
    id: "service-6",
    slug: "musculoskeletal-physiotherapy",
    title: "Musculoskeletal Physiotherapy",
    shortDesc:
      "Individualised care for musculoskeletal conditions to relieve pain, restore function, and prevent re-injury.",
    fullDesc:
      "We manage a broad range of musculoskeletal conditions, providing individualised physiotherapy care for patients at every activity level. Treatment is designed to relieve pain, restore function, and reduce future injury risk through evidence-based techniques and hands-on support.",
    icon: "Hands",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    benefits: [
      "Pain relief",
      "Function restoration",
      "Injury prevention",
      "Personalized rehab plans",
      "Evidence-based treatment",
    ],
    steps: [
      "Clinical musculoskeletal assessment",
      "Pain source identification",
      "Manual and exercise therapy",
      "Functional retraining",
      "Long-term prevention planning",
    ],
    relatedSlugs: [
      "mobility-and-movement-improvement",
      "orthopedic-physiotherapy",
      "neurological-physiotherapy",
    ],
  },
  {
    id: "service-7",
    slug: "orthopedic-physiotherapy",
    title: "Orthopedic Physiotherapy",
    shortDesc:
      "Comprehensive orthopedic assessment, tailored treatment, and customized exercise rehabilitation programmes.",
    fullDesc:
      "We provide orthopedic physiotherapy for people recovering from surgery, managing chronic pain, or returning to sport. Each programme includes detailed assessment, personalised treatment, and progressive exercise rehabilitation tailored to your age, condition, and goals.",
    icon: "Activity",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80",
    benefits: [
      "Post-surgery support",
      "Improved joint function",
      "Structured pain management",
      "Return-to-sport guidance",
      "All-age care planning",
    ],
    steps: [
      "Orthopedic assessment",
      "Diagnosis-led planning",
      "Personalized treatment",
      "Exercise rehabilitation",
      "Outcome review",
    ],
    relatedSlugs: [
      "post-operative-recovery-support",
      "musculoskeletal-physiotherapy",
      "mobility-and-movement-improvement",
    ],
  },
  {
    id: "service-8",
    slug: "elderly-care-falls-prevention-physiotherapy",
    title: "Elderly Care and Falls Prevention Physiotherapy",
    shortDesc:
      "Support for reduced mobility, poor balance, muscle weakness, and independence in older adults.",
    fullDesc:
      "Our physiotherapists commonly help elderly individuals with reduced mobility, poor balance, muscle weakness, and decreased independence. Physiotherapy improves muscle strength, balance, and quality of life with activities of daily living. We also work alongside family members and carers to help patients reach their maximum potential.",
    icon: "Shield",
    image:
      "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=800&q=80",
    benefits: [
      "Improved balance and stability",
      "Greater confidence at home",
      "Stronger muscles",
      "Better daily independence",
      "Family and carer collaboration",
    ],
    steps: [
      "Falls and mobility assessment",
      "Strength and balance programme",
      "Functional daily-living practice",
      "Home routine advice",
      "Family and carer support",
    ],
    relatedSlugs: [
      "physiotherapy-at-home",
      "neurological-physiotherapy",
      "mobility-and-movement-improvement",
    ],
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "team-1",
    name: "Dr. Sarah Mitchell",
    title: "Lead Physiotherapist & Clinical Director",
    bio: "Sarah founded Ekantik Physio after 12 years in NHS and private practice. She specialises in complex musculoskeletal cases and sports rehabilitation, and is a Fellow of the Chartered Society of Physiotherapy.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    linkedin: "https://www.linkedin.com/in/dr-sarah-mitchell-physio",
    specialties: ["Musculoskeletal", "Sports Rehab", "Clinical Leadership"],
  },
  {
    id: "team-2",
    name: "Dr. Arun Sharma",
    title: "Sports Rehabilitation Specialist",
    bio: "Arun has worked with Premier League football clubs and Olympic athletes. His expertise in biomechanics and performance physio makes him one of London's most sought-after sports physios.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    linkedin: "https://www.linkedin.com/in/dr-arun-sharma-physio",
    specialties: ["Sports Injuries", "Biomechanics", "Performance Physio"],
  },
  {
    id: "team-3",
    name: "Dr. Claire Bennett",
    title: "Neurological Physiotherapist",
    bio: "Claire brings 9 years of specialist neurological rehab experience. She has worked extensively with stroke survivors and patients with Parkinson's, creating life-changing outcomes for complex cases.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    linkedin: "https://www.linkedin.com/in/dr-claire-bennett-neuro",
    specialties: ["Stroke Rehab", "Parkinson's", "Neurological Rehab"],
  },
  {
    id: "team-4",
    name: "Dr. James Okafor",
    title: "Manual Therapy & Pain Specialist",
    bio: "James is a certified Manual Therapy practitioner with additional qualifications in dry needling and pain science. He holds advanced certifications from the International Federation of Manual Therapy.",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
    linkedin: "https://www.linkedin.com/in/dr-james-okafor-pain",
    specialties: ["Manual Therapy", "Dry Needling", "Chronic Pain"],
  },
  {
    id: "team-5",
    name: "Dr. Priya Patel",
    title: "Elderly Care & Rehabilitation Physio",
    bio: "Priya is passionate about healthy ageing and fall prevention. With a background in geriatric medicine, she designs evidence-based programmes that help older patients maintain their independence.",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80",
    linkedin: "https://www.linkedin.com/in/dr-priya-patel-rehab",
    specialties: ["Elderly Care", "Falls Prevention", "Osteoporosis"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Emma Richardson",
    condition: "Chronic Lower Back Pain",
    quote:
      "After nearly two years of persistent lower back pain, I had started to accept discomfort as normal. The team at Ekantik Physio changed that within weeks by explaining my pain triggers and creating a clear strength and mobility plan. Every session felt purposeful, and I could feel my confidence returning. I now commute, sleep, and exercise without the constant fear of flare-ups.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    location: "Islington, London",
  },
  {
    id: "testimonial-2",
    name: "Michael Thornton",
    condition: "ACL Post-Surgery Rehab",
    quote:
      "I came to Ekantik Physio after ACL reconstruction and was worried I would never get back to weekend football. Dr. Arun built a structured rehab programme with realistic milestones and excellent progress checks. The return-to-sport testing gave me confidence that my knee was genuinely ready, not just feeling better. I am back on the pitch and stronger than I was pre-injury.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    location: "Hammersmith, London",
  },
  {
    id: "testimonial-3",
    name: "Priya Sundaram",
    condition: "Shoulder Impingement",
    quote:
      "As someone who works long hours at a desk, my shoulder pain was affecting both work and sleep. Ekantik's assessment was thorough and the treatment combined hands-on care with specific exercises I could do at home in short blocks. The pain settled quickly and my range of movement improved far beyond what I expected. The team are warm, professional, and incredibly knowledgeable.",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80",
    rating: 5,
    location: "Canary Wharf, London",
  },
  {
    id: "testimonial-4",
    name: "Robert Clarke",
    condition: "Stroke Rehabilitation",
    quote:
      "Following my stroke, simple tasks felt overwhelming and I had little confidence walking outside. Dr. Claire worked with me and my family to set practical goals and celebrate progress every week. Her neurological rehab programme improved my balance, coordination, and independence at home. Six months later I can move around the neighbourhood independently, which means everything to me.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    location: "Richmond, London",
  },
  {
    id: "testimonial-5",
    name: "Fatima Al-Hassan",
    condition: "Knee Replacement Recovery",
    quote:
      "I started physiotherapy shortly after my knee replacement and was nervous about pain and mobility. The plan at Ekantik was paced perfectly and helped me regain movement sooner than my consultant expected. The clinicians were patient, encouraging, and always explained why each exercise mattered. I can now climb stairs confidently and enjoy long walks again.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    rating: 5,
    location: "Southwark, London",
  },
  {
    id: "testimonial-6",
    name: "David Osei",
    condition: "Sports Injury - Hamstring",
    quote:
      "I tore my hamstring during sprint training and needed to recover quickly for competition season. Ekantik gave me a progressive rehab plan that balanced loading, speed drills, and recovery work. What impressed me most was the attention to running mechanics and prevention strategies, not just pain relief. I returned to training feeling faster, stronger, and far more resilient.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    rating: 5,
    location: "Hackney, London",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "physiotherapy-exercises-lower-back-pain",
    title: "Top 5 Physiotherapy Exercises to Relieve Lower Back Pain",
    excerpt:
      "Discover five clinically effective physiotherapy movements that improve spinal stability, reduce stiffness, and support long-term back health.",
    body: `Lower back pain is one of the most common reasons people seek physiotherapy in London, but the right movement strategy can make a substantial difference. At Ekantik Physio, we focus on exercises that improve control, mobility, and resilience rather than short-term fixes. A personalised plan always works best, but there are proven foundational movements many people benefit from.

The first key exercise is diaphragmatic breathing with core bracing, which helps reset tension and improve deep abdominal support. Next is the modified dead bug, ideal for improving trunk stability without overloading sensitive structures. Third, the glute bridge restores hip strength and reduces excess strain on the lumbar region. Fourth, gentle thoracic rotations can improve spinal mobility and reduce compensatory stiffness. Fifth, sit-to-stand progressions build practical lower-body strength for daily activities.

Technique and dosage matter as much as exercise choice. Pain should remain manageable, and movements should be progressed gradually based on symptom response. We often use a traffic-light approach: green means continue, amber means modify, red means stop and reassess. This keeps patients active while reducing flare-ups.

If you have persistent symptoms for more than six weeks, recurring episodes, or pain that affects sleep and work, a clinical assessment is essential. Our physiotherapists at Ekantik Physio can identify your specific drivers and create a safe progression plan. With the right guidance, most people can regain comfort, confidence, and long-term control over their back pain.`,
    author: "Dr. Sarah Mitchell",
    authorImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80",
    date: "12 March 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    category: "Pain Management",
    tags: ["Lower Back Pain", "Exercise Therapy", "Core Stability"],
  },
  {
    id: "blog-2",
    slug: "recover-faster-after-surgery",
    title: "How Physiotherapy Helps You Recover Faster After Surgery",
    excerpt:
      "Post-operative physiotherapy improves mobility, reduces complications, and supports a faster return to normal life.",
    body: `Surgery is often only the first step in recovery. What happens in the weeks that follow has a major influence on long-term outcomes, particularly after orthopaedic procedures such as knee replacement, hip replacement, ACL reconstruction, or spinal interventions. Physiotherapy provides the structure needed to restore movement safely and confidently.

In the early phase, treatment focuses on pain control, swelling reduction, and restoring basic joint movement. This can include gentle mobility drills, circulatory exercises, and targeted muscle activation. As healing progresses, sessions shift toward rebuilding strength, improving balance, and reintroducing functional activities like stairs, standing endurance, and walking tolerance.

A common mistake is doing either too little or too much too soon. Guided rehab helps you progress at the right pace using objective markers such as range of motion, load tolerance, and gait quality. This reduces the likelihood of stiffness, weakness, and compensatory movement patterns that can delay results.

At Ekantik Physio, each post-surgical programme is coordinated with your consultant recommendations and adapted around your goals. Whether your priority is returning to work, sports, or independent mobility, we provide a clear roadmap and regular reassessment to keep your recovery on track.`,
    author: "Dr. Arun Sharma",
    authorImage:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80",
    date: "28 March 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    category: "Surgical Recovery",
    tags: ["Post-Surgery", "ACL Rehab", "Joint Replacement"],
  },
  {
    id: "blog-3",
    slug: "physiotherapy-for-seniors-london",
    title: "Physiotherapy for Seniors: Staying Mobile & Independent in London",
    excerpt:
      "Learn how tailored physiotherapy helps older adults maintain strength, prevent falls, and stay active with confidence.",
    body: `Healthy ageing is not about avoiding activity - it is about choosing the right activity with the right support. Physiotherapy for seniors focuses on preserving mobility, strength, and confidence so that everyday tasks remain manageable and safe. This is especially important in busy urban settings where balance and endurance are tested daily.

At Ekantik Physio, we begin with a detailed mobility and falls-risk assessment. We then design a targeted exercise programme that improves lower-limb strength, postural control, and reaction time. Sessions are practical and measurable, often focusing on real-life tasks such as standing from chairs, stair climbing, and walking on varied surfaces.

Many older adults also manage multiple conditions, including arthritis, osteoporosis, and post-operative deconditioning. Physiotherapy helps reduce joint stiffness, improve movement efficiency, and support safe progression without overload. Education is equally important - understanding pacing, footwear, home setup, and movement habits can significantly reduce falls.

Families often tell us that the biggest benefit is renewed confidence. When people feel steadier and stronger, they engage more in social activity, exercise, and independent living. If you or a loved one are noticing declining mobility, early physiotherapy can make a meaningful long-term difference.`,
    author: "Dr. Priya Patel",
    authorImage:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&q=80",
    date: "10 April 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=800&q=80",
    category: "Elderly Care",
    tags: ["Falls Prevention", "Healthy Ageing", "Mobility"],
  },
  {
    id: "blog-4",
    slug: "sports-injury-prevention-tips",
    title: "7 Expert Tips to Prevent Sports Injuries This Season",
    excerpt:
      "Reduce injury risk with practical prevention strategies used by elite sports physiotherapists.",
    body: `Injury prevention is one of the most valuable investments any athlete can make. Whether you play football, run, cycle, lift, or train for endurance events, small improvements in preparation and recovery can significantly reduce time lost to injury.

Start with a structured warm-up that includes mobility, activation, and gradual intensity progression. Build load progressively rather than making sudden jumps in mileage, speed, or volume. Prioritise strength training to improve tendon resilience and joint control, and include unilateral work to address side-to-side deficits. Recovery fundamentals - sleep, hydration, and nutrition - are equally critical for tissue adaptation.

Technique and biomechanics matter, particularly when symptoms begin to appear. Ignoring early warning signs often turns minor overload into longer-term injury. We recommend a clear monitoring system for pain, fatigue, and performance metrics so adjustments can be made early.

At Ekantik Physio, we assess movement patterns and training demands to create personalised prevention plans for active Londoners. A few targeted interventions each week can keep you competing, progressing, and enjoying your sport all season.`,
    author: "Dr. Arun Sharma",
    authorImage:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80",
    date: "22 April 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    category: "Sports Rehab",
    tags: ["Injury Prevention", "Athlete Care", "Performance"],
  },
  {
    id: "blog-5",
    slug: "understanding-chronic-pain",
    title: "Understanding Chronic Pain: Why It Persists and What to Do",
    excerpt:
      "Chronic pain is complex, but with the right strategy, long-term improvements are possible.",
    body: `Chronic pain is often misunderstood as purely a structural issue, but modern pain science shows a broader picture. Pain can persist due to nervous system sensitisation, stress, sleep disruption, movement avoidance, and previous injury history - even after tissue healing has occurred.

This does not mean pain is "in your head." It means recovery needs a multi-dimensional approach. Physiotherapy helps by combining education, graded movement, strength progression, and nervous system calming strategies. Understanding why symptoms fluctuate can reduce fear and restore confidence in movement.

Manual therapy and exercise both have value, but consistency and progression are key. We work with patients to establish realistic goals, identify flare-up triggers, and build routines that improve function over time. Improvements are often seen first in sleep, walking tolerance, and daily activity levels before full symptom resolution.

At Ekantik Physio, chronic pain care is collaborative and personalised. We focus on what matters most to you - work, family life, sport, or independence - and create a practical roadmap for sustainable recovery.`,
    author: "Dr. James Okafor",
    authorImage:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&q=80",
    date: "5 May 2025",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    category: "Pain Management",
    tags: ["Chronic Pain", "Pain Science", "Rehabilitation"],
  },
  {
    id: "blog-6",
    slug: "neurological-physio-stroke-recovery",
    title: "Neurological Physiotherapy: A Guide to Stroke Recovery",
    excerpt:
      "Stroke recovery can continue for months and years with targeted neurorehabilitation.",
    body: `Stroke recovery is highly individual, and meaningful progress is possible far beyond the early weeks. Neurological physiotherapy focuses on relearning movement patterns, improving balance, and restoring functional independence through task-specific repetition and guided progression.

Initial priorities often include safe transfers, standing control, and gait retraining. As confidence improves, therapy can include stair practice, upper-limb function, coordination drills, and dual-task training for real-world environments. Family education plays an important role in helping patients continue progress between sessions.

Consistency is one of the strongest predictors of recovery. A clear home programme, regular reassessment, and realistic goal-setting help maintain momentum and motivation. Even modest functional gains can dramatically improve quality of life and reduce caregiver burden.

At Ekantik Physio, our neurological team supports both patients and families through each stage of recovery. We combine evidence-based techniques with compassionate, practical care to help people rebuild independence and confidence after stroke.`,
    author: "Dr. Claire Bennett",
    authorImage:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80",
    date: "18 May 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    category: "Neurological",
    tags: ["Stroke Rehab", "Neurological Physio", "Recovery"],
  },
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "What happens at the first appointment?",
    answer:
      "Your first appointment includes a detailed assessment, discussion of your goals, movement testing, and a clear treatment plan. In most cases, you will also begin treatment on the same day with practical guidance to continue at home.",
    category: "Appointments",
  },
  {
    id: "faq-2",
    question: "How many sessions will I need?",
    answer:
      "The number of sessions depends on your condition, recovery stage, and goals. Some patients improve within 3-4 visits, while complex or post-surgical cases may need a longer programme with staged reviews.",
    category: "Treatment",
  },
  {
    id: "faq-3",
    question: "Do you accept NHS referrals?",
    answer:
      "We are an independent private clinic and do not process NHS referrals directly. However, many patients combine NHS medical care with private physiotherapy for faster access and continuity.",
    category: "Referrals",
  },
  {
    id: "faq-4",
    question: "Do I need a GP referral?",
    answer:
      "No GP referral is required to book with us. You can self-refer directly through our appointment page or by calling the clinic.",
    category: "Referrals",
  },
  {
    id: "faq-5",
    question: "What should I wear to physiotherapy?",
    answer:
      "Wear comfortable clothing that allows easy movement and access to the affected area. For lower-limb issues, shorts are helpful; for shoulder or neck concerns, a vest or loose top is ideal.",
    category: "Appointments",
  },
  {
    id: "faq-6",
    question: "Is physiotherapy painful?",
    answer:
      "Physiotherapy should be therapeutic, not overwhelming. Some techniques and exercises can feel challenging, but your therapist will adjust intensity to keep treatment safe, effective, and appropriate to your tolerance.",
    category: "Treatment",
  },
  {
    id: "faq-7",
    question: "Do you offer home visits?",
    answer:
      "Yes, home visits are available across selected London areas for patients with reduced mobility or neurological needs. Contact us to confirm availability and scheduling.",
    category: "Services",
  },
  {
    id: "faq-8",
    question: "How do I book?",
    answer:
      "You can book online through our appointment page, call us on +44 20 7946 0821, or email info@ekantikphysio.co.uk. Our team will help you choose the right specialist and timeslot.",
    category: "Appointments",
  },
  {
    id: "faq-9",
    question: "What is the cancellation policy?",
    answer:
      "We kindly request at least 24 hours notice for cancellations or rescheduling. Late cancellations may incur a fee to protect clinician time and patient availability.",
    category: "Appointments",
  },
  {
    id: "faq-10",
    question: "Do you treat children?",
    answer:
      "Yes, we provide physiotherapy for older children and adolescents depending on clinical need. Please contact us before booking so we can match your child with the most suitable clinician.",
    category: "Services",
  },
  {
    id: "faq-11",
    question: "Can physiotherapy help my condition?",
    answer:
      "Physiotherapy can help a wide range of musculoskeletal, neurological, and post-surgical conditions. If you are unsure, we recommend an initial assessment where we can advise whether treatment is appropriate.",
    category: "Treatment",
  },
  {
    id: "faq-12",
    question: "What is the difference between physio and osteopathy?",
    answer:
      "Both professions support movement and pain recovery. Physiotherapy is typically rooted in rehabilitation science, exercise therapy, and functional restoration, while osteopathy often emphasises manual approaches; both can be effective depending on your needs.",
    category: "Education",
  },
];

export const NAV_LINKS: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
