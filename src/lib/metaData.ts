export const pfp = "https://pbs.twimg.com/profile_images/1944049924502695940/0P77msmD_400x400.jpg"
export const name = "Rohit Bind";
export const jobTitle = "Full Stack Developer";
export const location = "Chhattisgarh, India";
export const pageTitle = `${name}`;
export const pageDescription = `Hire ${name}, a professional full stack developer and freelancer based in Chhattisgarh, India. Specializing in modern backend technologies to build robust and scalable web applications. Let's build something great together.`;
export const keywords =
  "rohit bind, full stack developer, full stack freelancer, hire full stack developer, web developer, backend developer, developer in chhattisgarh, developer in india, svelte developer, nodejs developer";
export const canonicalUrl = "https://www.devrohit.tech";
export const ogImageUrl = "https://avatars.githubusercontent.com/u/90490761?v=4";
export const socialProfiles = [
  "https://www.linkedin.com/in/rohitsx",
  "https://github.com/rohitsx",
  "https://x.com/rohitsxx",
];
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: name,
  url: canonicalUrl,
  image: ogImageUrl,
  jobTitle: jobTitle,
  description: pageDescription,
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chhattisgarh",
    addressCountry: "IN",
  },
  sameAs: socialProfiles,
  knowsAbout: [
    "Full Stack Development",
    "Backend Development",
    "Freelancing",
    "Svelte",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Software Development",
  ],
};
