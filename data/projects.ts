// ─── Section Types ───────────────────────────────────────────────────────────

export type SectionType =
  | "text"
  | "image"
  | "two-image"
  | "image-text"
  | "quote"
  | "specifications"
  | "gallery";

export interface ProjectSection {
  id: string;
  number: string;
  title: string;
  type: SectionType;
  content?: string;
  caption?: string;
  secondCaption?: string;
  image?: string;
  imageAlt?: string;
  secondImage?: string;
  secondImageAlt?: string;
  imagePosition?: "left" | "right";
  imageLayout?: "stacked" | "grid";
  galleryImages?: { url: string; alt?: string; caption?: string }[];
  specs?: { label: string; value: string }[];
}

// ─── Project Type ────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  hero: string;
  heroCollage?: string[];
  description: string;
  role: string;
  tools: string;
  disciplines: string[];
  sections: ProjectSection[];
  nextProject?: string;
  prevProject?: string;
}

// ─── Project Data ────────────────────────────────────────────────────────────

export const projects: Project[] = [

  // ━━━ LUMI ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "lumi",
    title: "Lumi",
    category: "A Skincare Vapourizer",
    year: "2026",
    thumbnail: "/projects/lumi/render-colorways.png",
    hero: "/projects/lumi/lifestyle-vanity.png",
    heroCollage: [
      "/projects/lumi/lifestyle-vanity.png",
      "/projects/lumi/render-colorways.png",
      "/projects/lumi/lifestyle-use.jpg",
      "/projects/lumi/render-switch-detail.png",
      "/projects/lumi/lifestyle-mirror.jpg",
      "/projects/lumi/render-charging.png",
      "/projects/lumi/render-top-aperture.jpg",
    ],
    description:
      "To design a skincare vaporizer that is compact, multifunctional and elegant to carry.",
    role: "Industrial Design",
    tools: "Vizcom, Rhinoceros, Keyshot",
    disciplines: ["Product Design", "User Research", "3D Modelling"],
    sections: [
      {
        id: "lumi-context",
        number: "01",
        title: "Problem Context",
        type: "text",
        image: "/projects/lumi/problem-skin.png",
        imageAlt: "Skin texture and environmental impact",
        content:
          "Modern lifestyles, stress, and pollution have made skin issues increasingly common. This has fostered more intentional skincare habits, spanning from serums to skincare devices. Despite increased adoption, most skincare vaporizers remain bulky and hard to carry or lack desired functions.",
        specs: [
          {
            label: "Portability demand",
            value: "~58% of consumers seek small, portable skincare devices for daily, on-the-go use",
          },
          {
            label: "Multifunction gap",
            value: "~34% of users want multifunction tools, yet hot & cold dual-mode vaporization is still largely absent",
          },
          {
            label: "Cordless preference",
            value: "~41% of users prefer rechargeable, cordless devices for portability and ease of use",
          },
        ],
      },
      {
        id: "lumi-market-growth",
        number: "02",
        title: "Market Research",
        type: "image",
        image: "/projects/lumi/market-growth-real.jpg",
        imageAlt: "Global Facial Steaming Device Market Growth chart",
      },
      {
        id: "lumi-users",
        number: "03",
        title: "User Set",
        type: "specifications",
        specs: [
          {
            label: "Young adults",
            value: "Daily skincare users looking for effective skin prep at home.",
          },
          {
            label: "Working professionals",
            value: "Limited time, preference for simple, efficient routines.",
          },
          {
            label: "Skincare enthusiasts",
            value: "Regular users of steam and mist as part of advanced routines.",
          },
          {
            label: "Makeup users",
            value: "Need smooth and prepped skin for better makeup application.",
          },
        ],
      },
      {
        id: "lumi-moodboard",
        number: "03",
        title: "Moodboard",
        type: "image",
        image: "/projects/lumi/moodboard.png",
        imageAlt: "Form board exploration: elegant, sleek, modern",
      },
      {
        id: "lumi-ideations",
        number: "04",
        title: "Ideations",
        type: "text",
        image: "/projects/lumi/ideations-sketches-final.png",
        imageAlt: "Form ideation sketches and handle explorations",
        content:
          "After ideation, I struggled to achieve a truly handheld form, as early mockups resembled tabletop devices. Revisiting my form board and sketches helped shift the design toward forms that naturally suggested being held.",
      },
      {
        id: "lumi-functional-testing",
        number: "05",
        title: "Process",
        type: "two-image",
        imageLayout: "grid",
        content: "Rapid physical mockups were created to test proportions and basic geometry. Selected concepts were then 3D printed to evaluate grip, comfort, and usability.",
        image: "/projects/lumi/mockups-foam-highres.png",
        imageAlt: "Foam mockups being carved",
        caption: "Form exploration",
        secondImage: "/projects/lumi/mockups-arduino-highres.png",
        secondImageAlt: "Arduino testing for vaporizing component",
        secondCaption: "Functional testing",
      },
      {
        id: "lumi-rapid-mockups",
        type: "two-image",
        imageLayout: "stacked",
        image: "/projects/lumi/rapid-foam-mockups.png",
        imageAlt: "Rapid physical foam mockups and form sketches",
        caption: "Mockups using thermocol",
        secondImage: "/projects/lumi/3d-print-mockups.png",
        secondImageAlt: "3D printed ergonomic handle mockups and sketches",
        secondCaption: "3D print proportion testing",
      },
      {
        id: "lumi-gallery",
        number: "06",
        title: "Gallery",
        type: "gallery",
        galleryImages: [
          {
            url: "/projects/lumi/gallery-intro-highres.png",
            alt: "Presenting Lumi A Skincare Vapourizer - Feature Callouts",
          },
          {
            url: "/projects/lumi/render-vapourizer.png",
            alt: "Lumi colorways overhead view",
          },
          {
            url: "/projects/lumi/slide-14.png",
            alt: "Lumi colorways on pedestals",
          },
          {
            url: "/projects/lumi/gallery-03-new-gpt.png",
            alt: "Lumi placed on vanity table next to skincare products",
          },
          {
            url: "/projects/lumi/gallery-04.png",
            alt: "Lumi facial mist in use close up",
          },
          {
            url: "/projects/lumi/gallery-05.jpg",
            alt: "Lumi facial mist in use at vanity mirror",
          },
          {
            url: "/projects/lumi/gallery-06.png",
            alt: "Lumi colorways lifestyle triptych - Sage, Lilac, Sand",
          },
        ],
      },
      {
        id: "lumi-features",
        number: "07",
        title: "Project Details",
        type: "specifications",
        specs: [
          { label: "Duration", value: "5 weeks" },
          { label: "Tools", value: "Vizcom, Rhinoceros, Keyshot" },
          { label: "Discipline", value: "Product Design, User Research, 3D Modelling" },
          { label: "Work Type", value: "Individual Project" },
        ],
      },
    ],
    nextProject: "tether",
    prevProject: "iris",
  },

  // ━━━ TETHER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "tether",
    title: "Tether",
    category: "A Screwdriver Concept",
    year: "2026",
    thumbnail: "/projects/tether/render-colorways-hero.png",
    hero: "/projects/tether/render-single.png",
    heroCollage: [
      "/projects/tether/render-colorways-hero.png",
      "/projects/tether/render-hero.png",
      "/projects/tether/render-colorways-light.png",
      "/projects/tether/render-single.png",
      "/projects/tether/render-dogtag.png",
      "/projects/tether/render-clip.png",
      "/projects/tether/render-bit.png",
    ],
    description:
      "TETHER was created to make a screwdriver that isn't stored away, but carried — always attached, always within reach.",
    role: "Industrial Design",
    tools: "Vizcom, Rhinoceros, Keyshot",
    disciplines: ["Product Design", "Concept Development"],
    sections: [
      {
        id: "tether-about",
        number: "01",
        title: "About",
        type: "text",
        content:
          "TETHER was created to make a screwdriver that isn't stored away, but carried — always attached, always within reach. A small tool that fits naturally into everyday routines.",
      },
      {
        id: "tether-hero-img",
        number: "02",
        title: "Product",
        type: "image",
        image: "/projects/tether/render-hero.png",
        imageAlt: "Tether screwdriver — hero render on black",
      },
      {
        id: "tether-clip",
        number: "03",
        title: "Clip On. Move On.",
        type: "image-text",
        image: "/projects/tether/render-clip.png",
        imageAlt: "Tether carabiner clip detail",
        content:
          "The integrated carabiner allows it to clip onto belts, bags, or loops, making it easy to carry anywhere. The loop also allows users to add charms, making it both functional and personal.",
        imagePosition: "left",
      },
      {
        id: "tether-dogtag",
        number: "04",
        title: "Identity",
        type: "image-text",
        image: "/projects/tether/render-dogtag.png",
        imageAlt: "Tether branded dog tag",
        content:
          "Compact and simple, TETHER is built for small daily tasks — be it tightening, adjusting or fixing — without reaching for a toolbox.",
        imagePosition: "right",
      },
      {
        id: "tether-bit",
        number: "05",
        title: "Precision Tip",
        type: "image",
        image: "/projects/tether/render-bit.png",
        imageAlt: "Tether Phillips bit close-up on black background",
      },
      {
        id: "tether-colorways-light",
        number: "06",
        title: "Colorways",
        type: "image-text",
        image: "/projects/tether/render-colorways-light.png",
        imageAlt: "Tether three colorways — Oxide Redshift, Neon Moss, Carbon Void",
        content:
          "Available in three colorways — Oxide Redshift (red), Neon Moss (yellow-green), and Carbon Void (black). Each finish uses a matte soft-touch coating.",
        imagePosition: "left",
      },
      {
        id: "tether-gallery",
        number: "07",
        title: "Gallery",
        type: "image",
        image: "/projects/tether/render-colorways-hero.png",
        imageAlt: "Tether all three colorways flat lay hero",
      },
    ],
    nextProject: "scout",
    prevProject: "lumi",
  },

  // ━━━ SCOUT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "scout",
    title: "Scout",
    category: "A Hiking Shoe",
    year: "2026",
    thumbnail: "/projects/scout/render-black.png",
    hero: "/projects/scout/render-black.png",
    heroCollage: [
      "/projects/scout/render-black.png",
      "/projects/scout/render-green-side.png",
      "/projects/scout/render-sand-side.png",
      "/projects/scout/render-clay.png",
      "/projects/scout/render-sole.png",
      "/projects/scout/render-sole-bottom.png",
      "/projects/scout/render-lace-detail.png",
    ],
    description:
      "SCOUT is a connected hiking system designed to help solo and group hikers stay on trail, stay connected, and respond quickly in emergencies.",
    role: "Industrial Design",
    tools: "Vizcom, Rhinoceros, Keyshot",
    disciplines: ["Product Design", "UX/UI Design", "User Research", "3D Modelling"],
    sections: [
      {
        id: "scout-brief",
        number: "01",
        title: "Brief",
        type: "text",
        content:
          "Design a smart hiking system that enhances route awareness, group coordination, and emergency response in challenging outdoor environments.",
      },
      {
        id: "scout-why",
        number: "02",
        title: "Why",
        type: "specifications",
        specs: [
          { label: "Group visibility", value: "60% of hikers report losing sight of at least one group member during a hike" },
          { label: "Navigation reliance", value: "52% rely only on phone GPS for navigation" },
          { label: "Trail deviation", value: "41% report deviating from trail unintentionally at least once" },
          { label: "Low visibility", value: "30% say fog or low visibility affected their navigation" },
        ],
      },
      {
        id: "scout-hero-img",
        number: "03",
        title: "Introducing Scout",
        type: "image",
        image: "/projects/scout/render-black.png",
        imageAlt: "Scout hiking shoe — black and orange hero render",
      },
      {
        id: "scout-colorways",
        number: "04",
        title: "Colorways",
        type: "two-image",
        image: "/projects/scout/render-green-side.png",
        imageAlt: "Scout — green colorway side view",
        secondImage: "/projects/scout/render-sand-side.png",
        secondImageAlt: "Scout — sand colorway side view",
      },
      {
        id: "scout-definition",
        number: "05",
        title: "Scout",
        type: "quote",
        content:
          "a person who explores ahead to observe the surroundings and guide others safely.",
      },
      {
        id: "scout-clay",
        number: "06",
        title: "Form Development",
        type: "image-text",
        image: "/projects/scout/render-clay.png",
        imageAlt: "Scout — clay render showing form development",
        content:
          "This model was developed primarily on Vizcom and brought into Rhino for further development of details like laces and use of modifiers to control geometry.",
        imagePosition: "left",
      },
      {
        id: "scout-details",
        number: "07",
        title: "Design Details",
        type: "two-image",
        image: "/projects/scout/render-lace-detail.png",
        imageAlt: "Scout — lace and cord lock detail close-up",
        secondImage: "/projects/scout/render-sole.png",
        secondImageAlt: "Scout — sole grip pattern close-up",
      },
      {
        id: "scout-sole",
        number: "08",
        title: "Sole",
        type: "image-text",
        image: "/projects/scout/render-sole-bottom.png",
        imageAlt: "Scout — bottom sole tread pattern",
        content:
          "The aggressive lug pattern is designed for multi-terrain grip — inspired by mountain bike tires for maximum traction on loose, wet, or uneven surfaces.",
        imagePosition: "right",
      },
      {
        id: "scout-features",
        number: "09",
        title: "Features",
        type: "specifications",
        specs: [
          { label: "Emergency", value: "Pull tab for emergencies" },
          { label: "Fit", value: "Adjustable laces" },
          { label: "Visibility", value: "Lights on" },
          { label: "Navigation", value: "Haptic feedback on trail deviation" },
        ],
      },
      {
        id: "scout-ui",
        number: "10",
        title: "User Interface",
        type: "text",
        content:
          "Hike Setup — Users choose between solo or group hiking. When group mode is selected, Bluetooth activates to pair the user's shoes with other hikers in the group. Trail Selection — Users can browse available hiking trails on home screen. Selecting a trail opens a page with key details such as distance, difficulty, terrain and route overview.",
      },
      {
        id: "scout-ui-features",
        number: "11",
        title: "App Features",
        type: "specifications",
        specs: [
          { label: "Path Visibility", value: "Users can turn the shoe light on or off through the app" },
          { label: "Trail Deviation Log", value: "Shows how many times the user deviated from the trail with a map overlay" },
          { label: "Emergency Alert", value: "Shows hiker's location, nearby users alerted, and estimated arrival time of nearest person" },
          { label: "Group Tracking", value: "Shows names of all group members with their current location on the trail" },
        ],
      },
      {
        id: "scout-insight",
        number: "12",
        title: "Insight",
        type: "quote",
        content:
          "Navigation, group awareness and emergency response are the biggest gaps in current hiking experiences.",
      },
      {
        id: "scout-meta",
        number: "13",
        title: "Project Info",
        type: "specifications",
        specs: [
          { label: "Duration", value: "2 weeks" },
          { label: "Work Type", value: "Group Project" },
        ],
      },
    ],
    nextProject: "iris",
    prevProject: "tether",
  },

  // ━━━ IRIX ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "iris",
    title: "IRIX",
    category: "A Chemical Detection Device",
    year: "2026",
    thumbnail: "/projects/iris/render-front.png",
    hero: "/projects/iris/render-angle.png",
    heroCollage: [
      "/projects/iris/render-angle.png",
      "/projects/iris/render-front.png",
      "/projects/iris/render-front-2.png",
      "/projects/iris/render-top.png",
      "/projects/iris/render-back.png",
      "/projects/iris/render-detail.png",
      "/projects/iris/render-angle.png",
    ],
    description:
      "Design a CWA (chemical warfare agent) detection unit as part of a scalable network integrated into enclosed mass transit spaces like underground metros and airports.",
    role: "Speculative Design",
    tools: "Rhinoceros, Keyshot, Figma",
    disciplines: ["Speculative Design", "Product Design", "Research", "Systems Thinking"],
    sections: [
      {
        id: "iris-problem",
        number: "01",
        title: "Problem Statement",
        type: "text",
        content:
          "The response times and effectiveness for relevant authorities and first responders are extremely low in case of Chemical warfare agents release in civil infrastructure or public spaces due to a lack of detection systems for the same.",
      },
      {
        id: "iris-problem-context-image",
        type: "image",
        image: "/projects/iris/military-gas-masks.png",
        imageAlt: "Military personnel in gas masks testing equipment",
      },
      {
        id: "iris-stats",
        number: "04",
        title: "",
        type: "text", // Using text type but rendering conditionally by ID
        content: "",
      },

      {
        id: "iris-insight",
        number: "05",
        title: "",
        type: "gallery",
        content:
          "These attacks occurred despite the 1997 Chemical Weapons Convention, which bans chemical weapons.",
        galleryImages: [
          { url: "/projects/iris/attack-1.png", caption: "Halabja Chemical Attack, Iraq", alt: "Halabja Chemical Attack, Iraq" },
          { url: "/projects/iris/attack-2.png", caption: "Ukraine Conflict", alt: "Ukraine Conflict" },
          { url: "/projects/iris/attack-3.png", caption: "Tokyo Sarin Subway Attack, Japan", alt: "Tokyo Sarin Subway Attack, Japan" },
          { url: "/projects/iris/attack-4.png", caption: "Syria Chemical Attacks", alt: "Syria Chemical Attacks" },
        ],
      },
      {
        id: "iris-takeaways",
        number: "06",
        title: "Key Takeaways",
        type: "text", // Using text but overriding render
        content: "",
      },
      {
        id: "iris-intervention",
        number: "07",
        title: "The Intervention",
        type: "text", // Using text but we will intercept it in ProjectSection.tsx
        content: "",
      },
      {
        id: "iris-case-study",
        number: "08",
        title: "CASE STUDY",
        type: "gallery",
        content: "Using an Ahmedabad underground metro station as a real-world site to decide where and how the detection units should be placed.",
        caption: "Reference images of the Ahmedabad underground metro used to study layout, airflow, and crowd movement for sensor placement.",
        galleryImages: [
          { url: "/projects/iris/ahmedabad-1.png", caption: "", alt: "Metro Blueprint" },
          { url: "/projects/iris/ahmedabad-2.png", caption: "", alt: "Metro Turnstiles" },
          { url: "/projects/iris/ahmedabad-3.png", caption: "", alt: "Metro Escalator" },
          { url: "/projects/iris/ahmedabad-4.png", caption: "", alt: "Metro Lower Level" },
        ],
      },
      {
        id: "iris-key-aspects",
        number: "09",
        title: "Key Aspects Studied",
        type: "text", // Intercepted in ProjectSection.tsx
        content: "",
      },
      {
        id: "iris-front-view",
        number: "08",
        title: "Front View",
        type: "two-image",
        image: "/projects/iris/render-front.png",
        imageAlt: "IRIX-MX450 — front elevation view",
        secondImage: "/projects/iris/render-front-2.png",
        secondImageAlt: "IRIX-MX450 — alternate front elevation",
      },
      {
        id: "iris-top-view",
        number: "08",
        title: "Top View",
        type: "image-text",
        image: "/projects/iris/render-top.png",
        imageAlt: "IRIX-MX450 — top-down view",
        content:
          "The trapezoidal form is designed specifically for ceiling mounting. The bottom face faces down into the transit space, drawing air samples continuously through the optical chamber.",
        imagePosition: "left",
      },
      {
        id: "iris-back-detail",
        number: "09",
        title: "Back Panel",
        type: "two-image",
        image: "/projects/iris/render-back.png",
        imageAlt: "IRIX-MX450 — back panel with I/O ports",
        secondImage: "/projects/iris/render-detail.png",
        secondImageAlt: "IRIX-MX450 — material and corner detail",
      },
      {
        id: "iris-anatomy",
        number: "10",
        title: "Device Anatomy",
        type: "specifications",
        specs: [
          { label: "Active IR Sensing", value: "Infrared detection module" },
          { label: "Sealed Optical Chamber", value: "Contamination-free analysis" },
          { label: "Control & Data Ports", value: "Network integration interface" },
          { label: "Thermal Regulation", value: "Temperature management system" },
        ],
      },
      {
        id: "iris-why-emts",
        number: "11",
        title: "Why EMTS",
        type: "text",
        content:
          "They are enclosed, high-traffic public spaces where airborne chemicals can spread quickly and affect large numbers of people before being noticed, making early detection critical.",
      },
      {
        id: "iris-why-ftir",
        number: "12",
        title: "Why FTIR",
        type: "text",
        content:
          "It can detect and identify many different chemicals at once, including unknown ones, across gases, liquids, and aerosols without needing direct contact.",
      },
      {
        id: "iris-response",
        number: "13",
        title: "Response Protocol",
        type: "specifications",
        specs: [
          { label: "Step 1", value: "Incident" },
          { label: "Step 2", value: "Detection" },
          { label: "Step 3", value: "Alert" },
          { label: "Step 4", value: "Response" },
          { label: "Step 5", value: "Evacuation" },
        ],
      },
      {
        id: "iris-meta",
        number: "14",
        title: "Project Info",
        type: "specifications",
        specs: [
          { label: "Duration", value: "3 weeks" },
          { label: "Work Type", value: "Group Project" },
        ],
      },
    ],
    nextProject: "lumi",
    prevProject: "scout",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export function getProjectIndex(slug: string): number {
  return projects.findIndex((p) => p.id === slug);
}
