# **Surgverse Website - Comprehensive Development Plan**

## **📋 Project Overview**

**Project Name:** Surgverse: Surgical World Foundation Models Interactive Portfolio

**Framework:** React + Node.js

**Hosting:** GitHub Pages

**Target Audience:** Researchers, surgeons, robotics engineers, medical AI professionals

---

## **🎨 Visual Design System**

**Color Palette**

```
Primary Colors:
- Surgical Blue Deep:    #1E3A8A (headers, primary buttons)
- Surgical Blue Mid:     #1E40AF (accents, links)
- Surgical Cyan:         #06B6D4 (highlights, interactive elements)
- Clinical Green:        #10B981 (success states, metrics)

Neutral Colors:
- Charcoal:              #1F2937 (contrast sections)
- Light Gray:            #F9FAFB (light backgrounds)
- Pure White:            #FFFFFF (main content areas)
- Subtle Gray:           #E5E7EB (borders, dividers)

Accent Colors:
- Warning Orange:        #F59E0B (call-to-action)
- Error Red:             #EF4444 (failure states)
- Info Blue:             #3B82F6 (informational elements)

```

**Typography**

```
Primary Font:
- Inter (Headings, UI elements)
- Weights: 400, 500, 600, 700

Secondary Font:
- Source Sans Pro (Body text)
- Weights: 400, 600

Monospace Font:
- Fira Code (Technical details, code)
- Weight: 400

Size Scale:
- H1: 64px / 4rem (Hero titles)
- H2: 48px / 3rem (Section headers)
- H3: 36px / 2.25rem (Subsection headers)
- H4: 24px / 1.5rem (Card headers)
- Body Large: 20px / 1.25rem
- Body: 16px / 1rem
- Caption: 14px / 0.875rem

```

**Spacing System**

```
Base Unit: 4px

Scale:
- xs:  4px   (tight padding)
- sm:  8px   (compact elements)
- md:  16px  (default spacing)
- lg:  24px  (section padding)
- xl:  32px  (large gaps)
- 2xl: 48px  (section margins)
- 3xl: 64px  (major section dividers)
- 4xl: 96px  (viewport spacing)

```

**Component Design Tokens**

```jsx
const designTokens = {
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    xl: '0 20px 25px rgba(0,0,0,0.15)',
    inner: 'inset 0 2px 4px rgba(0,0,0,0.06)'
  },
  transitions: {
    fast: '150ms ease-in-out',
    base: '300ms ease-in-out',
    slow: '500ms ease-in-out'
  }
}

```

---

## **📐 Detailed Page Structure & Wireframes**

**Page 1: Hero Section (100vh)**

**Visual Design:**

```
┌─────────────────────────────────────────────────────────────┐
│ [Sticky Nav: Logo | About | Research | Results | Contact] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│        [Full-screen video: Autonomous Suturing]             │
│        [Glassmorphism overlay card - centered]              │
│                                                             │
│              ┌─────────────────────────────┐               │
│              │                             │               │
│              │      SURGVERSE              │               │
│              │                             │               │
│              │  World Foundation Models    │               │
│              │  for Surgical Intelligence  │               │
│              │                             │               │
│              │  [3 Metric Pills]           │               │
│              │  • 40% Better Accuracy      │               │
│              │  • 1000x Faster             │               │
│              │  • First Surgical WFM       │               │
│              │                             │               │
│              │  [CTA Button: Explore ↓]    │               │
│              │                             │               │
│              └─────────────────────────────┘               │
│                                                             │
│                   [Scroll Indicator ↓]                      │
└─────────────────────────────────────────────────────────────┘

```

**Design Specifications:**

- Video: 30% opacity overlay, slow 20s zoom from 1.0x to 1.05x
- Glass card: `backdrop-filter: blur(20px)`, `background: rgba(255,255,255,0.1)`, border: `1px solid rgba(255,255,255,0.2)`
- Metric pills: Cyan background, white text, subtle pulse animation
- CTA button: Orange gradient with white text, hover lift effect (translateY -4px)
- Scroll indicator: Bouncing animation, cyan color

---

**Page 2: Problem Statement (Split Screen)**

**Visual Design:**

```
┌─────────────────────────────────────────────────────────────┐
│                    THE CHALLENGE                            │
│           Current Limitations vs Surgverse                  │
├──────────────────────────┬──────────────────────────────────┤
│   CURRENT SOTA MODELS    │    SURGVERSE SOLUTION           │
├──────────────────────────┼──────────────────────────────────┤
│ [Dark Background]        │ [Light Background]              │
│                          │                                  │
│ ┌────────┬────────┐     │ ┌────────┬────────┐            │
│ │ Video1 │ Video2 │     │ │ Video1 │ Video2 │            │
│ ├────────┼────────┤     │ ├────────┼────────┤            │
│ │ Video3 │ Video4 │     │ │ Video3 │ Video4 │            │
│ ├────────┼────────┤     │ ├────────┼────────┤            │
│ │ Video5 │ Video6 │     │ │ Video5 │ Video6 │            │
│ └────────┴────────┘     │ └────────┴────────┘            │
│                          │                                  │
│ ❌ Poor temporal        │ ✅ 96.7% Consistency           │
│    consistency (69%)     │                                  │
│ ❌ Geometric drift      │ ✅ 40% Better Geometry         │
│ ❌ Tissue hallucination │ ✅ Long-horizon Stability      │
│                          │                                  │
│ [Hover to compare →]    │                                  │
└──────────────────────────┴──────────────────────────────────┘

```

**Design Specifications:**

- Split: 50/50 vertical divide with animated line separator
- Video grid: 2x3, each 320px × 240px, rounded corners (12px)
- Hover state: Scale 1.05, matching video on right highlights
- Metrics: Animated counters (count-up effect), large font (32px)
- Icons: Custom SVG icons for checkmarks/crosses
- Synchronized playback button: Floating at center divide

**Interactions:**

```jsx
// Hover behavioronHoverLeft(videoIndex) => {
highlightRight(videoIndex);
showConnectionLine(videoIndex);
}

// Click behavioronClick() => {
toggleSyncPlayback();
showComparison(leftVideo, rightVideo);
}

```

---

**Page 3: Technical Pipeline (Horizontal Scroll)**

**Visual Design:**

```
┌─────────────────────────────────────────────────────────────┐
│                    HOW SURGVERSE WORKS                      │
├─────────────────────────────────────────────────────────────┤
│  ←──────────────── Scroll Horizontally ─────────────────→  │
│                                                             │
│  ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐           │
│  │ DATA │───→│TRAIN │───→│ GEN  │───→│ APP  │           │
│  └──┬───┘    └──┬───┘    └──┬───┘    └──┬───┘           │
│     │            │            │            │               │
│  ┌──▼────────┐ ┌▼────────┐ ┌▼────────┐ ┌▼────────┐      │
│  │ Sim Data  │ │ Stage 1 │ │ Predict │ │Virtual  │      │
│  │ + Real    │ │ LoRA    │ │ Future  │ │ Camera  │      │
│  │ Dataset   │ │ Adapt   │ │ Frames  │ │ Control │      │
│  └───────────┘ └─────────┘ └─────────┘ └─────────┘      │
│                                                             │
│  [Click nodes to see detailed videos]                      │
│  ════════════●─────────────────────── [Progress 25%]      │
└─────────────────────────────────────────────────────────────┘

```

**Design Specifications:**

- Container: `scroll-snap-type: x mandatory`
- Cards: 400px wide, vertical layout, white background, drop shadow
- Connecting arrows: SVG animated stroke-dashoffset
- Progress bar: Gradient fill (cyan to green), updates on scroll
- Active node: Scale 1.1, border glow effect (cyan shadow 0 0 20px)

**Node Content (Expandable):**

```
Each node expands to show:
┌─────────────────────────────────┐
│ [Node Icon]  Node Title         │
├─────────────────────────────────┤
│                                 │
│   [Video demonstration]         │
│   400×300px                     │
│                                 │
├─────────────────────────────────┤
│ • Key Point 1                   │
│ • Key Point 2                   │
│ • Key Point 3                   │
│                                 │
│ [Learn More →]                  │
└─────────────────────────────────┘

```

---

**Page 4: Applications Showcase (3-Column Cards)**

**Visual Design:**

```
┌─────────────────────────────────────────────────────────────┐
│              REAL-WORLD APPLICATIONS                        │
├──────────────┬─────────────────┬─────────────────┐         │
│   PREDICT    │    TRANSFER     │  CAMERA CONTROL │         │
├──────────────┼─────────────────┼─────────────────┤         │
│ ╔══════════╗ │ ╔═════════════╗ │ ╔═════════════╗ │         │
│ ║  Video   ║ │ ║   Video     ║ │ ║   Video     ║ │         │
│ ║  Playing ║ │ ║   Grid      ║ │ ║   Player    ║ │         │
│ ║  Here    ║ │ ║   2×3       ║ │ ║   w/        ║ │         │
│ ║          ║ │ ║             ║ │ ║   Controls  ║ │         │
│ ╚══════════╝ │ ╚═════════════╝ │ ╚═════════════╝ │         │
│              │                 │                 │         │
│ 100ms Timeline│ Generate 1000x │ Dynamic View   │         │
│ 216 Actions  │ Faster Data    │ Control        │         │
│              │                 │                 │         │
│ Imagine      │ Augment         │ Enhanced       │         │
│ surgical     │ training with   │ situational    │         │
│ futures      │ variations      │ awareness      │         │
│              │                 │                 │         │
│ [Explore →]  │ [Explore →]     │ [Explore →]    │         │
└──────────────┴─────────────────┴─────────────────┘         │

```

**Design Specifications:**

- Card: Width 360px, height 600px, white background
- Video area: 360×270px (16:9), rounded top corners
- Hover: Card lifts (translateY -8px), shadow increases (xl → 2xl)
- 3D tilt: Mouse position affects rotation (-5deg to +5deg on X/Y axis)
- Caption: 24px padding, left-aligned, 16px font

**Video Behaviors:**

```jsx
// Predict Card
<VideoPlayer
  src="predict_demo.mp4"
  controls={["timeline", "playPause"]}
  overlayText="100ms, 216 actions"
  autoPlayOnHover={true}
/>

// Transfer Card
<VideoGrid
  videos={[groundTruth, ...generatedVariations]}
  layout="2x3"
  clickToEnlarge={true}
/>

// Camera Control Card
<InteractiveCameraView
  video="camera_control_demo.mp4"
  cameraAngles={[0, 45, 90, 135, 180, 225, 270, 315]}
  userControllable={true}
/>

```

**Modal (Full-screen on click):**

```
┌─────────────────────────────────────────────────────────────┐
│ [✕ Close]                                    [Share] [↓]    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                                                             │
│              [Large Video Player]                           │
│              1280×720px                                     │
│              Full controls + speed adjustment               │
│                                                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ Technical Details:                                          │
│ • Dataset size: 10k+ frames                                │
│ • Model: Cosmos-Transfer1                                   │
│ • Inference time: 4 seconds                                │
│                                                             │
│ [← Previous]              [View Paper]      [Next →]       │
└─────────────────────────────────────────────────────────────┘

```

---

**Page 5: Results & Comparisons (Interactive Comparison)**

**Visual Design:**

```
┌─────────────────────────────────────────────────────────────┐
│          SURGVERSE VS STATE-OF-THE-ART                      │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│  │  96.7%   │  │   40%    │  │   4sec   │                 │
│  │  Surg-   │  │  Better  │  │  Generation                 │
│  │  Consist.│  │  Geometry│  │  Time    │                 │
│  └──────────┘  └──────────┘  └──────────┘                 │
│   ████████▓░    ████████▓░    ████████▓░                   │
│   vs 86.4%      vs SOTA       vs 3 min                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│           SIDE-BY-SIDE VIDEO COMPARISON                     │
│                                                             │
│  ┌────────┬────────┬────────┬────────┐                    │
│  │ Ground │  Cog   │  Veo   │  Ours  │                    │
│  │ Truth  │ Video  │(Google)│  v1    │                    │
│  ├────────┼────────┼────────┼────────┤                    │
│  │ [████] │ [████] │ [████] │ [████] │                    │
│  │ [████] │ [████] │ [████] │ [████] │                    │
│  │ [Video]│ [Video]│ [Video]│ [Video]│                    │
│  │ [████] │ [████] │ [████] │ [████] │                    │
│  │ [████] │ [████] │ [████] │ [████] │                    │
│  └────────┴────────┴────────┴────────┘                    │
│          ◀═══════|═══════▶                                 │
│          Drag to Compare                                    │
│                                                             │
│  [Sync Playback ▶] [Speed: 1x ▼] [Frame-by-Frame]        │
└─────────────────────────────────────────────────────────────┘

```

**Design Specifications:**

- Metric cards: 280px × 200px, gradient background (blue to cyan)
- Counter animation: Count-up on scroll into view (1 second duration)
- Progress bars: Animated fill on scroll, height 8px, rounded
- Video comparison: Custom comparison slider with vertical line
- Slider handle: 60px circle, white with shadow, drag cursor

**Comparison Slider Component:**

```jsx
<ComparisonSlider
  videos={[groundTruth, cogVideo, veo, ours]}
  syncPlayback={true}
  initialPosition={50}// percentage
  showLabels={true}
  sliderColor="#06B6D4"
  handleSize={60}
/>

```

**Interactive Chart (Metric Breakdown):**

```
Tooltip on hover:
┌─────────────────────────┐
│ Surg-Consistency        │
├─────────────────────────┤
│ Ours:    96.7%  ████    │
│ Veo:     96.05% ███▓    │
│ CogVideo: 91.4% ███░    │
│ Predict1: 86.43% ██▓░   │
│                         │
│ +10.27% improvement     │
└─────────────────────────┘

```

---

**Page 6: Autonomous Surgery Demo (Cinematic)**

**Visual Design:**

```
┌─────────────────────────────────────────────────────────────┐
│    BEYOND PREDICTION: AUTONOMOUS EXECUTION                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ╔═══════════════════════════════════════════════════════╗ │
│  ║                                                       ║ │
│  ║         [Hero Video: Suturing Demo]                  ║ │
│  ║         1200×675px (16:9)                            ║ │
│  ║                                                       ║ │
│  ║  [Overlay: 7X Faster Than Human]                     ║ │
│  ║  [PiP: Traditional vs Autonomous]─┐                  ║ │
│  ╚═══════════════════════════════════│═══════════════════╝ │
│                                      │                      │
│  "7X Faster Than Human Performance" │                      │
│  "4X Autonomous Accuracy Improvement"│                      │
│                                      └─[240×135 PiP]        │
│  ┌──────────────────┐  ┌──────────────────┐               │
│  │   Knot-Tying     │  │  Multi-Throw     │               │
│  │   [Video 480×360]│  │  [Video 480×360] │               │
│  │                  │  │                  │               │
│  └──────────────────┘  └──────────────────┘               │
│                                                             │
│  [⏸ Pause]  [⏮ 0.25x] [▶ 1x] [⏭ 2x]  [Full Screen]      │
└─────────────────────────────────────────────────────────────┘

```

**Design Specifications:**

- Main video: Black background, minimal UI, focus on content
- PiP overlay: Positioned top-right, 20% size, toggle on/off
- Speed markers: Timeline annotations at key moments
- Secondary videos: Side-by-side, equal width, synchronized playback
- Performance metrics: Floating badges with pulse animation

**Video Player Controls:**

```jsx
<AdvancedVideoPlayer
  src="autonomous_suturing.mp4"
  pip={{
    enabled: true,
    src: "traditional_suturing.mp4",
    position: "top-right"
  }}
  speedControl={[0.25, 0.5, 1, 1.5, 2]}
  annotations={[
    { time: 5, label: "7X speed marker" },
    { time: 15, label: "Precision comparison" }
  ]}
  captionsEnabled={true}
/>

```

---

**Page 7: Data Pipeline & Scalability (Infographic)**

**Visual Design:**

```
┌─────────────────────────────────────────────────────────────┐
│      TRAINING DATA: 1000X FASTER GENERATION                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Real Surgical Data Scarcity                                │
│         ↓                                                   │
│  Simulation Solution (Isaac Sim + Cosmos)                   │
│                                                             │
│  ┌───────────────────────────────────────────────┐         │
│  │  Before (Simulation) │ After (Photorealistic) │         │
│  ├──────────────────────┼────────────────────────┤         │
│  │  [Video 560×420]     │  [Video 560×420]       │         │
│  │                      │                        │         │
│  │  ◄═══════ Drag Slider ══════►                 │         │
│  └───────────────────────────────────────────────┘         │
│                                                             │
│  GENERATED VARIATIONS:                                      │
│  ┌─────────┬─────────┬─────────┐                          │
│  │Lighting │ Smoke   │ Camera  │                          │
│  │Worse    │ Blur    │ Angles  │                          │
│  ├─────────┼─────────┼─────────┤                          │
│  │[320×240]│[320×240]│[320×240]│                          │
│  └─────────┴─────────┴─────────┘                          │
│                                                             │
│  [▶ See Full Pipeline] [Download Dataset Info]             │
└─────────────────────────────────────────────────────────────┘

```

**Design Specifications:**

- Flow diagram: Animated particles flowing through pipeline
- Before/After slider: Draggable divider with smooth transition
- Variation grid: Hover to see variation parameters
- Icons: Custom medical/tech icons (scalpel, camera, light bulb)
- Tooltips: Appear on hover with technical details

**Animated Flow:**

```jsx
<AnimatedPipeline>
  <Node id="simulation" icon="cube" label="Isaac Sim" />
  <Connection animated particles color="#06B6D4" />
  <Node id="segmentation" icon="layers" label="Auto-label" />
  <Connection animated particles color="#06B6D4" />
  <Node id="transfer" icon="wand" label="Cosmos Transfer" />
  <Connection animated particles color="#06B6D4" />
  <Node id="variations" icon="grid" label="Augmentations" />
</AnimatedPipeline>

```

---

**Page 8: Industry Connection (Dual Domain)**

**Visual Design:**

```
┌─────────────────────────────────────────────────────────────┐
│   WORLD MODELS: FROM ROADS TO OPERATING ROOMS               │
├──────────────────────────┬──────────────────────────────────┤
│   AUTONOMOUS VEHICLES    │    AUTONOMOUS SURGERY           │
├──────────────────────────┼──────────────────────────────────┤
│                          │                                  │
│  [Video: NIO Demo]       │  [Video: Surgical Scene]        │
│  640×480                 │  640×480                        │
│                          │                                  │
│  ┌─ 100ms ─────────┐    │  ┌─ 100ms ─────────┐           │
│  │ 216 Actions     │────┼──│ Surgical         │           │
│  │ Predicted       │    │  │ Decisions        │           │
│  └─────────────────┘    │  └─────────────────┘           │
│                          │                                  │
│  • Real-time prediction  │  • Test-time planning          │
│  • Multi-agent reasoning │  • Instrument coordination     │
│  • Safety constraints    │  • Anatomical awareness        │
│                          │                                  │
└──────────────────────────┴──────────────────────────────────┘
│                                                             │
│     ═══════ Shared WFM Technology ═══════                  │
│                                                             │
│  ┌────────────────────────────────────────────┐            │
│  │ [Diagram: WFM Architecture]                │            │
│  │ Observation → Predict → Action             │            │
│  └────────────────────────────────────────────┘            │
└─────────────────────────────────────────────────────────────┘

```

**Design Specifications:**

- Split screen: Animated connecting lines between similar concepts
- Videos: Synchronized playback with timeline markers
- Decision points: Highlighted with pulse animations
- Diagram: Interactive SVG with hover tooltips
- Background: Gradient blend from automotive blue to medical cyan

---

**Page 9: Future Directions (Roadmap Timeline)**

**Visual Design:**

```
┌─────────────────────────────────────────────────────────────┐
│            WHAT'S NEXT FOR SURGICAL WFMs?                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ◄────────────── Scroll Timeline ──────────────►           │
│                                                             │
│  2025          2026          2027+                          │
│    ●────────────●────────────●                             │
│    │            │            │                             │
│  Enhanced    Closed-Loop  Real-time                         │
│  Multimodal  Planning     Clinical                          │
│  Control     Systems      Deployment                        │
│    │            │            │                             │
│  ┌─▼──────┐  ┌─▼──────┐  ┌─▼──────┐                      │
│  │ Depth  │  │Dynamic │  │Clinical│                       │
│  │ Force  │  │Trajec- │  │Integra-│                       │
│  │ Kinem. │  │tory    │  │tion    │                       │
│  └────────┘  └────────┘  └────────┘                      │
│                                                             │
│  • Cross-industry data collaboration                        │
│  • Physics-informed diffusion models                        │
│  • Augmented dexterity through MPC                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘

```

**Design Specifications:**

- Timeline: Horizontal scroll-snap with node highlighting
- Active node: Glowing circle, enlarged (scale 1.2)
- Cards: Expand on click with detailed information
- Icons: Animated SVG icons representing each direction
- Background: Gradient effect following scroll position

---

**Page 10: Call-to-Action & Footer**

**Visual Design:**

```
┌─────────────────────────────────────────────────────────────┐
│         JOIN THE SURGICAL AI REVOLUTION                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ 📄 Read Paper│  │ 💻 View Code │  │ ✉ Contact    │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │ 🌐 GitHub    │  │ 🎥 Demo      │  │ 📚 Cite This │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Built by: Intuitive Surgical Inc.                          │
│  Published: July 8, 2025                                    │
│  Lead Researcher: Ruixing Liang (rliang7@jh.edu)           │
│                                                             │
│  [LinkedIn] [Twitter] [YouTube] [GitHub]                   │
│                                                             │
│  © 2025 Intuitive Surgical Inc. All rights reserved.       │
│  [Privacy Policy] [Terms of Use] [Accessibility]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

```

---

## **🛠 Technical Implementation Plan**

**Phase 1: Project Setup (Week 1)**

**1.1 Initialize Project**

```bash
# Create React app with TypeScript
npx create-react-app surgverse-website --template typescript

# Install dependenciesnpminstall framer-motion react-player react-intersection-observer
npminstall react-compare-slider recharts three @react-three/fiber
npminstall tailwindcss postcss autoprefixer
npminstall gh-pages --save-dev

# Initialize Tailwind
npx tailwindcss init -p

```

**1.2 Project Structure**

```
surgverse-website/
├── public/
│   ├── index.html
│   ├── videos/
│   │   ├── hero_suturing.mp4
│   │   ├── prediction_demo.mp4
│   │   ├── transfer_examples/
│   │   ├── comparison_sota/
│   │   └── autonomous_demos/
│   ├── images/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroVideo.tsx
│   │   │   └── HeroOverlay.tsx
│   │   ├── ProblemStatement/
│   │   │   ├── ComparisonGrid.tsx
│   │   │   └── VideoComparison.tsx
│   │   ├── TechnicalPipeline/
│   │   │   ├── PipelineScroll.tsx
│   │   │   ├── PipelineNode.tsx
│   │   │   └── ConnectionLine.tsx
│   │   ├── Applications/
│   │   │   ├── ApplicationCard.tsx
│   │   │   ├── PredictCard.tsx
│   │   │   ├── TransferCard.tsx
│   │   │   └── CameraControlCard.tsx
│   │   ├── Results/
│   │   │   ├── MetricsDisplay.tsx
│   │   │   ├── ComparisonSlider.tsx
│   │   │   └── ChartVisualization.tsx
│   │   ├── AutonomousSurgery/
│   │   │   └── DemoPlayer.tsx
│   │   ├── DataPipeline/
│   │   │   ├── FlowDiagram.tsx
│   │   │   └── BeforeAfterSlider.tsx
│   │   ├── IndustryConnection/
│   │   │   └── DualDomainView.tsx
│   │   ├── FutureDirections/
│   │   │   └── RoadmapTimeline.tsx
│   │   ├── CTA/
│   │   │   └── CTASection.tsx
│   │   └── shared/
│   │       ├── VideoPlayer.tsx
│   │       ├── Modal.tsx
│   │       ├── Button.tsx
│   │       └── AnimatedCounter.tsx
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts
│   │   ├── useScrollPosition.ts
│   │   └── useVideoSync.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   ├── utils/
│   │   ├── videoHelpers.ts
│   │   └── constants.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tailwind.config.js
└── tsconfig.json

```

**Phase 2: Core Components (Week 2-3)**

**2.1 Hero Section Component**

```tsx
// HeroSection.tsx
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks';

export const HeroSection: React.FC = () => {
  const [ref, isVisible] =useIntersectionObserver({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        style={{
          transform: isVisible ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 20s ease-out'
        }}
      >
        <source src="/videos/hero_suturing.mp4" type="video/mp4" />
      </video>

      {/* Glassmorphism Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="glass-card p-12 max-w-2xl text-center">
          <h1 className="text-6xl font-bold mb-6 text-white">
            SURGVERSE
          </h1>
          <p className="text-2xl mb-8 text-gray-100">
            World Foundation Models for Surgical Intelligence
          </p>

          <div className="flex gap-4 justify-center mb-8">
            <MetricPill value="40%" label="Better Accuracy" />
            <MetricPill value="1000x" label="Faster" />
            <MetricPill value="First" label="Surgical WFM" />
          </div>

          <Button variant="primary" size="lg">
            Explore ↓
          </Button>
        </div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

```

**2.2 Video Comparison Component**

```tsx
// ComparisonSlider.tsx
import { useState, useRef } from 'react';
import ReactCompareSlider from 'react-compare-slider';

interfaceComparisonSliderProps {
  videos: string[];
  labels: string[];
  syncPlayback?: boolean;
}

export const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  videos,
  labels,
  syncPlayback = true
}) => {
  const [sliderPosition, setSliderPosition] =useState(50);
  const videoRefs =useRef<HTMLVideoElement[]>([]);

  consthandlePlay = () => {
    if (syncPlayback) {
      videoRefs.current.forEach(video => video?.play());
    }
  };

  return (
    <div className="comparison-container">
      <ReactCompareSlider
        itemOne={
          <VideoPlayer
            ref={el => videoRefs.current[0] = el}
            src={videos[0]}
            label={labels[0]}
          />
        }
        itemTwo={
          <VideoPlayer
            ref={el => videoRefs.current[1] = el}
            src={videos[1]}
            label={labels[1]}
          />
        }
        position={sliderPosition}
        onPositionChange={setSliderPosition}
      />

      <div className="controls">
        <button onClick={handlePlay}>▶ Sync Playback</button>
        <SpeedControl />
        <FrameByFrameControl />
      </div>
    </div>
  );
};

```

**2.3 Animated Metrics Counter**

```tsx
// AnimatedCounter.tsx
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks';

interfaceAnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 1,
  suffix = '',
  prefix = ''
}) => {
  const [count, setCount] =useState(0);
  const [ref, isVisible] =useIntersectionObserver({ threshold: 0.5 });
  const controls =useAnimation();

useEffect(() => {
    if (isVisible) {
      let start = 0;
      const increment = end / (duration * 60);// 60 fps
      const timer =setInterval(() => {
        start += increment;
        if (start >= end) {
setCount(end);
clearInterval(timer);
        } else {
setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () =>clearInterval(timer);
    }
  }, [isVisible, end, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={controls}
      className="text-5xl font-bold text-cyan-500"
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

```

**Phase 3: Advanced Features (Week 4-5)**

**3.1 Horizontal Scroll Pipeline**

```tsx
// PipelineScroll.tsx
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const PipelineScroll: React.FC = () => {
  const containerRef =useRef<HTMLDivElement>(null);
  const { scrollXProgress } =useScroll({ container: containerRef });
  const [activeNode, setActiveNode] =useState(0);

  const nodes = [
    { id: 'data', title: 'Data Collection', video: 'data.mp4' },
    { id: 'train', title: 'Training', video: 'train.mp4' },
    { id: 'generate', title: 'Generation', video: 'generate.mp4' },
    { id: 'apply', title: 'Application', video: 'apply.mp4' }
  ];

useEffect(() => {
    const unsubscribe = scrollXProgress.onChange(value => {
      const nodeIndex =Math.floor(value * nodes.length);
setActiveNode(nodeIndex);
    });
    return unsubscribe;
  }, [scrollXProgress, nodes.length]);

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto scroll-snap-x"
    >
      <div className="flex gap-8 p-8">
        {nodes.map((node, index) => (
          <PipelineNode
            key={node.id}
            {...node}
            active={activeNode === index}
          />
        ))}
      </div>

      <ProgressBar progress={scrollXProgress} />
    </div>
  );
};

```

**3.2 Interactive 3D Card (Applications)**

```tsx
// ApplicationCard.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

interfaceApplicationCardProps {
  title: string;
  description: string;
  videoSrc: string;
  icon: React.ReactNode;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({
  title,
  description,
  videoSrc,
  icon
}) => {
  const [isHovered, setIsHovered] =useState(false);
  const [mousePosition, setMousePosition] =useState({ x: 0, y: 0 });

  consthandleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
setMousePosition({ x, y });
  };

  return (
    <motion.div
      className="application-card"
      onMouseEnter={() =>setIsHovered(true)}
      onMouseLeave={() =>setIsHovered(false)}
      onMouseMove={handleMouseMove}
      animate={{
        rotateY: isHovered ? mousePosition.x * 10 : 0,
        rotateX: isHovered ? -mousePosition.y * 10 : 0,
        translateY: isHovered ? -8 : 0
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
    >
      <div className="video-container">
        <video
          autoPlay={isHovered}
          loop
          muted
          playsInline
          src={videoSrc}
        />
      </div>

      <div className="content p-6">
        <div className="icon mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4">Explore →</button>
      </div>
    </motion.div>
  );
};

```

**Phase 4: Video Management (Week 5)**

**4.1 Video Optimization Strategy**

```jsx
// videoHelpers.ts

export const videoConfig = {
  resolutions: {
    mobile: { width: 480, height: 360, bitrate: '500k' },
    tablet: { width: 720, height: 540, bitrate: '1000k' },
    desktop: { width: 1280, height: 720, bitrate: '2500k' }
  },
  formats: ['mp4', 'webm'],
  posterDelay: 100// ms before loading video
};

export const getOptimalVideo = (videoName: string): string => {
  const screenWidth = window.innerWidth;
  let resolution = 'desktop';

  if (screenWidth < 768) resolution = 'mobile';
  else if (screenWidth < 1024) resolution = 'tablet';

  const format = document.createElement('video').canPlayType('video/webm')
    ? 'webm' : 'mp4';

  return `/videos/${videoName}_${resolution}.${format}`;
};

export constlazyLoadVideo = (videoElement: HTMLVideoElement) => {
  const observer = newIntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target as HTMLVideoElement;
        video.src = video.dataset.src || '';
        video.load();
        observer.unobserve(video);
      }
    });
  }, { rootMargin: '200px' });

  observer.observe(videoElement);
};

```

**4.2 GitHub LFS Setup for Large Videos**

```bash
# Initialize Git LFSgit lfsinstall# Track video filesgit lfs track "*.mp4"
git lfs track "*.webm"

# Add .gitattributesgitadd .gitattributes
git commit -m "Configure Git LFS for videos"

```

**Phase 5: Styling & Animations (Week 6)**

**5.1 Tailwind Configuration**

```jsx
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surgical: {
          blue: {
            deep: '#1E3A8A',
            mid: '#1E40AF',
          },
          cyan: '#06B6D4',
          green: '#10B981',
        },
        charcoal: '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
require('@tailwindcss/aspect-ratio'),
require('@tailwindcss/typography'),
  ],
};

```

**5.2 Custom CSS Animations**

```css
/* animations.css *//* Glass morphism effect */.glass-card {
  background:rgba(255, 255, 255, 0.1);
  backdrop-filter:blur(20px);
  border: 1px solidrgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32pxrgba(0, 0, 0, 0.1);
}

/* Video hover effects */.video-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.video-container:hover {
  transform:scale(1.02);
}

.video-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:linear-gradient(
    to bottom,
    transparent 0%,
rgba(0, 0, 0, 0.5) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-container:hover::after {
  opacity: 1;
}

/* Metric pill animations */.metric-pill {
  @apply inline-flex items-center px-4 py-2 rounded-full;
  @apply bg-surgical-cyan text-white font-semibold;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
0%, 100% {
    box-shadow: 0 0 0rgba(6, 182, 212, 0.4);
  }
50% {
    box-shadow: 0 0 20pxrgba(6, 182, 212, 0.6);
  }
}

/* Scroll indicator */.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform:translateX(-50%);
  animation: bounce-slow 2s infinite;
}

/* Connection lines (for pipeline) */.connection-line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw-line 2s ease-out forwards;
}

@keyframes draw-line {
to {
    stroke-dashoffset: 0;
  }
}

/* Comparison slider handle */.comparison-handle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 4px 12pxrgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ew-resize;
  transition: transform 0.2s ease;
}

.comparison-handle:hover {
  transform:scale(1.1);
}

/* Loading states */.skeleton {
  background:linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
0% {
    background-position: 200% 0;
  }
100% {
    background-position: -200% 0;
  }
}

```

**Phase 6: Deployment (Week 7)**

**6.1 GitHub Pages Configuration**

```json
// package.json
{
  "name": "surgverse-website",
  "version": "1.0.0",
  "homepage": "https://[username].github.io/surgverse",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.4",
    "react-player": "^2.13.0",
    "react-intersection-observer": "^9.5.2",
    "react-compare-slider": "^2.2.0",
    "recharts": "^2.8.0",
    "three": "^0.156.1",
    "@react-three/fiber": "^8.14.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.2.2",
    "tailwindcss": "^3.3.3",
    "autoprefixer": "^10.4.15",
    "postcss": "^8.4.29",
    "gh-pages": "^6.0.0"
  }
}

```

**6.2 Video CDN Setup (Alternative to LFS)**

```jsx
// Use Cloudflare R2 or AWS S3 for video hosting

const CDN_BASE_URL = 'https://cdn.surgverse.com/videos/';

export const getVideoUrl = (filename: string): string => {
  return `${CDN_BASE_URL}${filename}`;
};

// Pre-signed URL generation (if using private storage)
export const getSignedVideoUrl = async (filename: string):Promise<string> => {
  const response = awaitfetch(`/api/sign-video?file=${filename}`);
  const { url } = await response.json();
  return url;
};

```

**6.3 Performance Optimization**

```jsx
// Service Worker for caching// public/service-worker.js

const CACHE_NAME = 'surgverse-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/videos/hero_suturing_poster.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response ||fetch(event.request))
  );
});

```

**Phase 7: Testing & Launch (Week 8)**

**7.1 Accessibility Testing**

```jsx
// Install testing libraries
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm install --save-dev jest-axe

// accessibility.test.tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { HeroSection } from '@/components/Hero';

expect.extend(toHaveNoViolations);

test('Hero section should have no accessibility violations', async () => {
  const { container } =render(<HeroSection />);
  const results = awaitaxe(container);
expect(results).toHaveNoViolations();
});

```

**7.2 Performance Monitoring**

```jsx
// analytics.ts
export constinitAnalytics = () => {
// Google Analytics 4
  window.gtag('config', 'G-XXXXXXXXXX', {
    page_path: window.location.pathname,
  });

// Core Web Vitals tracking
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
  });
};

```

---

## **📅 Implementation Timeline**

**Week 1: Foundation**

- [ ]  Project setup and configuration
- [ ]  Design system implementation (colors, fonts, tokens)
- [ ]  Basic component scaffolding
- [ ]  Git repository initialization

**Week 2: Hero & Navigation**

- [ ]  Hero section with video background
- [ ]  Navigation bar (sticky)
- [ ]  Glassmorphism overlay
- [ ]  Metric pills with animations
- [ ]  Scroll indicator

**Week 3: Core Sections (Part 1)**

- [ ]  Problem Statement section
- [ ]  Video comparison grid
- [ ]  Technical Pipeline horizontal scroll
- [ ]  Pipeline node components
- [ ]  Animated connections

**Week 4: Core Sections (Part 2)**

- [ ]  Applications showcase (3 cards)
- [ ]  Interactive video players
- [ ]  Modal for full-screen videos
- [ ]  Results & Comparisons section
- [ ]  Comparison slider component

**Week 5: Advanced Features**

- [ ]  Autonomous Surgery demo player
- [ ]  Data Pipeline infographic
- [ ]  Industry Connection dual view
- [ ]  Future Directions timeline
- [ ]  Animated charts and metrics

**Week 6: Polish & Optimization**

- [ ]  CSS animations and transitions
- [ ]  Video optimization (multiple resolutions)
- [ ]  Lazy loading implementation
- [ ]  Mobile responsive design
- [ ]  Cross-browser testing

**Week 7: Deployment Preparation**

- [ ]  GitHub Pages setup
- [ ]  Video hosting (LFS or CDN)
- [ ]  Performance optimization
- [ ]  SEO meta tags
- [ ]  Analytics integration

**Week 8: Testing & Launch**

- [ ]  Accessibility audit (WCAG AA)
- [ ]  Performance testing (Lighthouse)
- [ ]  User testing feedback
- [ ]  Bug fixes
- [ ]  Production deployment

---

## **📊 Content Preparation Checklist**

**Videos Required (from pitch.pdf):**

- [ ]  Hero: Autonomous suturing demo (background loop)
- [ ]  Problem: 6 failure case videos
- [ ]  Problem: 6 success case videos
- [ ]  Pipeline: Data collection demo
- [ ]  Pipeline: Training visualization
- [ ]  Pipeline: Generation examples
- [ ]  Applications: Prediction demo (100ms timeline)
- [ ]  Applications: 5 transfer examples + ground truth
- [ ]  Applications: Camera control demo (multi-angle)
- [ ]  Comparison: Ground truth surgical video
- [ ]  Comparison: CogVideo generation
- [ ]  Comparison: Veo (Google) generation
- [ ]  Comparison: Surgverse output
- [ ]  Autonomous: Knot-tying demo (7X speed)
- [ ]  Autonomous: Multi-throw suturing demo
- [ ]  Industry: NIO self-driving demo
- [ ]  Industry: Surgical decision-making scene

**Video Processing Steps:**

```bash
# Convert to multiple resolutions using FFmpeg
ffmpeg -i input.mp4 -vf scale=480:360 -b:v 500k output_mobile.mp4
ffmpeg -i input.mp4 -vf scale=720:540 -b:v 1000k output_tablet.mp4
ffmpeg -i input.mp4 -vf scale=1280:720 -b:v 2500k output_desktop.mp4

# Generate WebM alternative
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 1000k output.webm

# Extract poster frame (first frame)
ffmpeg -i input.mp4 -vframes 1 -f image2 poster.jpg

```

**Text Content:**

- [ ]  Hero tagline
- [ ]  Section headers (9 sections)
- [ ]  Application descriptions
- [ ]  Metric explanations
- [ ]  Technical specifications
- [ ]  Research paper abstract
- [ ]  Team bios
- [ ]  Footer copyright and links

**Images/Graphics:**

- [ ]  Intuitive Surgical logo
- [ ]  Institution logos (Johns Hopkins, Nvidia)
- [ ]  Diagram: WFM architecture
- [ ]  Diagram: Pipeline flow
- [ ]  Icons: Applications (predict, transfer, camera)
- [ ]  Icons: Future directions
- [ ]  Background patterns/textures

---

## **🎯 Quality Assurance Checklist**

**Performance Targets:**

- [ ]  Lighthouse Performance Score: >90
- [ ]  First Contentful Paint: <1.5s
- [ ]  Largest Contentful Paint: <2.5s
- [ ]  Total Blocking Time: <200ms
- [ ]  Cumulative Layout Shift: <0.1

**Accessibility Requirements:**

- [ ]  WCAG 2.1 Level AA compliance
- [ ]  Keyboard navigation functional
- [ ]  Screen reader compatible
- [ ]  Color contrast ratio >4.5:1
- [ ]  Focus indicators visible
- [ ]  Video captions available

**Browser Compatibility:**

- [ ]  Chrome (latest)
- [ ]  Firefox (latest)
- [ ]  Safari (latest)
- [ ]  Edge (latest)
- [ ]  Mobile Safari (iOS 14+)
- [ ]  Chrome Mobile (Android 10+)

**Responsive Breakpoints:**

- [ ]  Mobile: 320px - 767px
- [ ]  Tablet: 768px - 1023px
- [ ]  Desktop: 1024px - 1439px
- [ ]  Large Desktop: 1440px+

---

## **🚀 Post-Launch Optimization**

**Analytics to Track:**

- Page views and unique visitors
- Video engagement (play rate, watch time)
- Scroll depth (which sections viewed)
- CTA click-through rate
- Time on site
- Bounce rate

**A/B Testing Opportunities:**

- Hero CTA button text
- Video autoplay vs click-to-play
- Section order
- Color scheme variations
- Navigation style

**Future Enhancements:**

- [ ]  Add interactive 3D surgical scene viewer
- [ ]  Integrate live demo/sandbox
- [ ]  Add blog section for research updates
- [ ]  Implement search functionality
- [ ]  Add multi-language support
- [ ]  Create downloadable resources section

---

## **📝 Documentation**

**Developer Documentation:**

**`# Surgverse Website - Developer Guide## Getting Started**
npm install
npm start

**## Building for Production**
npm run build
npm run deploy

**## Project Structure**
/src
  /components - Reusable UI components
  /hooks - Custom React hooks
  /styles - Global styles and animations
  /utils - Helper functions

**## Adding New Videos**
1. Place video in /public/videos/
2. Convert to multiple resolutions (see scripts/)
3. Update video manifest in /src/utils/videoManifest.ts
4. Use <VideoPlayer> component with lazy loading

**## Styling Guidelines**
- Use Tailwind utility classes
- Custom animations in animations.css
- Follow design token system
- Maintain consistent spacing (multiples of 4`